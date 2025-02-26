import * as CSS from 'csstype'
import { style, compose } from '../style'
import { SystemProp, ITheme, Theme } from '../types'

type AppearanceProp<T extends ITheme> = SystemProp<CSS.Property.Appearance, T>
export interface AppearanceProps<T extends ITheme = Theme> {
  appearance?: AppearanceProp<T>
  motionSafeAppearance?: AppearanceProp<T>
  motionReduceAppearance?: AppearanceProp<T>
  firstAppearance?: AppearanceProp<T>
  lastAppearance?: AppearanceProp<T>
  oddAppearance?: AppearanceProp<T>
  evenAppearance?: AppearanceProp<T>
  visitedAppearance?: AppearanceProp<T>
  checkedAppearance?: AppearanceProp<T>
  focusWithinAppearance?: AppearanceProp<T>
  hoverAppearance?: AppearanceProp<T>
  focusAppearance?: AppearanceProp<T>
  focusVisibleAppearance?: AppearanceProp<T>
  activeAppearance?: AppearanceProp<T>
  disabledAppearance?: AppearanceProp<T>
  placeholderAppearance?: AppearanceProp<T>
}
export const appearance = style({
  prop: 'appearance',
})

type CursorProp<T extends ITheme> = SystemProp<CSS.Property.Cursor, T>
export interface CursorProps<T extends ITheme = Theme> {
  cursor?: CursorProp<T>
  motionSafeCursor?: CursorProp<T>
  motionReduceCursor?: CursorProp<T>
  firstCursor?: CursorProp<T>
  lastCursor?: CursorProp<T>
  oddCursor?: CursorProp<T>
  evenCursor?: CursorProp<T>
  visitedCursor?: CursorProp<T>
  checkedCursor?: CursorProp<T>
  focusWithinCursor?: CursorProp<T>
  hoverCursor?: CursorProp<T>
  focusCursor?: CursorProp<T>
  focusVisibleCursor?: CursorProp<T>
  activeCursor?: CursorProp<T>
  disabledCursor?: CursorProp<T>
  placeholderCursor?: CursorProp<T>
}
export const cursor = style({
  prop: 'cursor',
})

type PointerEventsProp<T extends ITheme> = SystemProp<
  CSS.Property.PointerEvents,
  T
>
export interface PointerEventsProps<T extends ITheme = Theme> {
  pointerEvents?: PointerEventsProp<T>
  motionSafePointerEvents?: PointerEventsProp<T>
  motionReducePointerEvents?: PointerEventsProp<T>
  firstPointerEvents?: PointerEventsProp<T>
  lastPointerEvents?: PointerEventsProp<T>
  oddPointerEvents?: PointerEventsProp<T>
  evenPointerEvents?: PointerEventsProp<T>
  visitedPointerEvents?: PointerEventsProp<T>
  checkedPointerEvents?: PointerEventsProp<T>
  focusWithinPointerEvents?: PointerEventsProp<T>
  hoverPointerEvents?: PointerEventsProp<T>
  focusPointerEvents?: PointerEventsProp<T>
  focusVisiblePointerEvents?: PointerEventsProp<T>
  activePointerEvents?: PointerEventsProp<T>
  disabledPointerEvents?: PointerEventsProp<T>
  placeholderPointerEvents?: PointerEventsProp<T>
}
export const pointerEvents = style({
  prop: 'pointerEvents',
})

type ResizeProp<T extends ITheme> = SystemProp<CSS.Property.Resize, T>
export interface ResizeProps<T extends ITheme = Theme> {
  resize?: ResizeProp<T>
  motionSafeResize?: ResizeProp<T>
  motionReduceResize?: ResizeProp<T>
  firstResize?: ResizeProp<T>
  lastResize?: ResizeProp<T>
  oddResize?: ResizeProp<T>
  evenResize?: ResizeProp<T>
  visitedResize?: ResizeProp<T>
  checkedResize?: ResizeProp<T>
  focusWithinResize?: ResizeProp<T>
  hoverResize?: ResizeProp<T>
  focusResize?: ResizeProp<T>
  focusVisibleResize?: ResizeProp<T>
  activeResize?: ResizeProp<T>
  disabledResize?: ResizeProp<T>
  placeholderResize?: ResizeProp<T>
}
export const resize = style({
  prop: 'resize',
})

type UserSelectProp<T extends ITheme> = SystemProp<CSS.Property.UserSelect, T>
export interface UserSelectProps<T extends ITheme = Theme> {
  userSelect?: UserSelectProp<T>
  motionSafeUserSelect?: UserSelectProp<T>
  motionReduceUserSelect?: UserSelectProp<T>
  firstUserSelect?: UserSelectProp<T>
  lastUserSelect?: UserSelectProp<T>
  oddUserSelect?: UserSelectProp<T>
  evenUserSelect?: UserSelectProp<T>
  visitedUserSelect?: UserSelectProp<T>
  checkedUserSelect?: UserSelectProp<T>
  focusWithinUserSelect?: UserSelectProp<T>
  hoverUserSelect?: UserSelectProp<T>
  focusUserSelect?: UserSelectProp<T>
  focusVisibleUserSelect?: UserSelectProp<T>
  activeUserSelect?: UserSelectProp<T>
  disabledUserSelect?: UserSelectProp<T>
  placeholderUserSelect?: UserSelectProp<T>
}
export const userSelect = style({
  prop: 'userSelect',
})

export interface InteractivityProps<T extends ITheme = Theme>
  extends AppearanceProps<T>,
    CursorProps<T>,
    PointerEventsProps<T>,
    ResizeProps<T>,
    UserSelectProps<T> {}
export const interactivity = compose(
  appearance,
  cursor,
  pointerEvents,
  resize,
  userSelect,
)
