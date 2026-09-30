import { createContext, useContext, useEffect, useRef, useState, type ComponentProps, type ReactNode } from 'react'
import { animate, useMotionValue, useMotionValueEvent, useReducedMotion, type MotionValue } from 'motion/react'
import './foldable-phone.css'
import { FOLD_DURATION } from './fold-choreography'

type FoldContext = { progress: MotionValue<number>; setValue: (value: number) => void; toggle: (instant?: boolean) => void; animateTo: (value: number) => void }
const Context = createContext<FoldContext | undefined>(undefined)

export function useFoldablePhone() {
  const context = useContext(Context)
  if (!context) throw new Error('Foldable phone parts must be inside FoldablePhone.')
  return context
}

export type FoldablePhoneProps = Omit<ComponentProps<'div'>, 'defaultValue' | 'onChange'> & {
  value?: number
  defaultValue?: number
  onValueChange?: (value: number) => void
  duration?: number
}

export function FoldablePhone({ value, defaultValue = 0, onValueChange, duration = FOLD_DURATION, children, className = '', ...props }: FoldablePhoneProps) {
  const progress = useMotionValue(value ?? defaultValue)
  const reducedMotion = useReducedMotion()
  const destination = useRef(value ?? defaultValue)
  const lastReported = useRef(value ?? defaultValue)
  const animation = useRef<ReturnType<typeof animate> | undefined>(undefined)
  useEffect(() => {
    if (value === undefined || Math.abs(value - lastReported.current) < 0.000001) return
    animation.current?.stop()
    destination.current = Math.max(0, Math.min(1, value))
    progress.set(destination.current)
  }, [value, progress])
  useEffect(() => {
    if (!reducedMotion) return
    animation.current?.stop()
    progress.set(destination.current)
  }, [reducedMotion, progress])
  useEffect(() => () => animation.current?.stop(), [])
  useMotionValueEvent(progress, 'change', latest => { lastReported.current = latest; onValueChange?.(latest) })
  function setValue(next: number) {
    animation.current?.stop()
    destination.current = Math.max(0, Math.min(1, next))
    progress.set(destination.current)
  }
  function animateTo(next: number) {
    const target = Math.max(0, Math.min(1, next))
    animation.current?.stop()
    destination.current = target
    if (reducedMotion) { progress.set(target); return }
    animation.current = animate(progress, target, { duration: duration * Math.max(0.25, Math.abs(target - progress.get())), ease: 'linear' })
  }
  function toggle(instant = false) {
    const moving = animation.current?.state === 'running'
    const current = moving ? destination.current : progress.get()
    const target = current >= 0.5 ? 0 : 1
    if (instant) { animation.current?.stop(); destination.current = target; progress.set(target); return }
    animateTo(target)
  }
  return <Context.Provider value={{ progress, setValue, toggle, animateTo }}><div {...props} className={`duo-root ${className}`}>{children}</div></Context.Provider>
}

export type FoldToggleProps = ComponentProps<'button'> & { foldIcon?: string; unfoldIcon?: string }

export function FoldToggle({ children, onClick, foldIcon, unfoldIcon, ...props }: FoldToggleProps) {
  const { progress, toggle } = useFoldablePhone()
  const [open, setOpen] = useState(progress.get() >= 0.5)
  useMotionValueEvent(progress, 'change', value => setOpen(value >= 0.5))
  const label = open ? 'Fold' : 'Unfold'
  const icon = open ? foldIcon : unfoldIcon
  return <button type="button" {...props} aria-pressed={open} onClick={event => { onClick?.(event); if (!event.defaultPrevented) toggle(event.detail === 0) }}>
    {children ?? (icon ? <><img className="fold-toggle-icon" src={icon} alt="" />{label}</> : label)}
  </button>
}

export type FoldHaltProps = ComponentProps<'button'> & { target?: number; icon?: string }

export function FoldHalt({ children, onClick, target = 0.5, icon, ...props }: FoldHaltProps) {
  const { progress, animateTo } = useFoldablePhone()
  const [active, setActive] = useState(Math.abs(progress.get() - target) < 0.01)
  useMotionValueEvent(progress, 'change', value => setActive(Math.abs(value - target) < 0.01))
  return <button type="button" {...props} aria-pressed={active} onClick={event => { onClick?.(event); if (!event.defaultPrevented) animateTo(target) }}>
    {icon && <img className="fold-toggle-icon" src={icon} alt="" />}{children ?? 'Stop halfway'}
  </button>
}

export function FoldScrubber({ className = '', ...props }: Omit<ComponentProps<'input'>, 'type' | 'min' | 'max' | 'value' | 'onChange' | 'defaultValue'>) {
  const { progress, setValue } = useFoldablePhone()
  const [value, updateValue] = useState(progress.get())
  useMotionValueEvent(progress, 'change', updateValue)
  return <input {...props} className={`duo-scrubber ${className}`} type="range" min={0} max={1} step={0.005} value={value} aria-label={props['aria-label'] ?? 'Fold angle'} aria-valuetext={`${Math.round(value * 180)} degrees open`} onChange={event => setValue(event.currentTarget.valueAsNumber)} />
}

export function PhoneBackground({ children, className = '', ...props }: ComponentProps<'div'> & { children?: ReactNode }) {
  return <div {...props} className={`duo-background ${className}`} aria-hidden="true">{children}</div>
}

export function AppleCredit({ className = '', ...props }: ComponentProps<'a'>) {
  return <a {...props} className={`duo-credit ${className}`} href="https://www.apple.com/iphone-duo/" target="_blank" rel="noopener noreferrer">Model by Apple ↗</a>
}
