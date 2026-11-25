# Design log

## Button state matrix

| State | Background | Text | Border / ring | Motion |
| --- | --- | --- | --- | --- |
| Default | Accent; secondary uses page background | On-accent; secondary uses accent | Accent border | None |
| Hover | Accent mixed with foreground; secondary gets a light accent tint | Unchanged | Unchanged | Color transition using fast duration and standard easing |
| Focus-visible | Current state | Unchanged | Focus-color ring, 3px wide with a 0.25rem offset | No additional motion |
| Active | Darker accent; secondary gets a stronger accent tint | Unchanged | Unchanged | Color transition using fast duration and standard easing |
| Disabled | Surface | Muted foreground | Muted border; focus ring remains available for focusable ARIA-disabled controls | No hover or press feedback |

The small variant changes font size and padding only. With reduced motion,
colors change immediately instead of transitioning.

`aria-disabled` conveys the disabled state but does not prevent activation.
For a disabled link, omit `href`; for other ARIA-disabled controls, application
code must prevent activation, including from the keyboard.
