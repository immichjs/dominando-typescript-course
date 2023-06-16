export abstract class AbstractNotification {
  abstract send(user: MyUser): boolean
}
