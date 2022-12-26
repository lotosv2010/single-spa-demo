// Anything exported from this file is importable by other in-browser modules.
import { ReplaySubject } from "rxjs"

export const sharedSubject = new ReplaySubject()

export function sayHello(who) {
  console.log(`%c${who} Say Hello`, "color: skyblue")
}
