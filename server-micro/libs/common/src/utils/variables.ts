export enum RMQClient {
  AUTH = 'AUTH',
  USER = 'USER',
  CONTACT = 'CONTACT',
  CHAT = 'CHAT',
  AUTH_USER = 'AUTH_USER',
  CONTACT_USER = 'CONTACT_USER',
  USER_CONTACT = 'USER_CONTACT',
  UPLOAD_USER = 'UPLOAD_USER',
  CHAT_USER = 'CHAT_USER',
}

export enum RMQClientService {
  AUTH = 'AUTH_SERVICE',
  USER = 'USER_SERVICE',
  CONTACT = 'CONTACT_SERVICE',
  CHAT = 'CHAT_SERVICE',
  AUTH_USER = 'AUTH_USER_SERVICE',
  CONTACT_USER = 'CONTACT_USER_SERVICE',
  USER_CONTACT = 'USER_CONTACT_SERVICE',
  UPLOAD_USER = 'UPLOAD_USER_SERVICE',
  CHAT_USER = 'CHAT_USER_SERVICE',
}

export enum RequestMethods {
  GET = 'GET',
  DELETE = 'DELETE',
  POST = 'POST',
  PUT = 'PUT',
}

export enum ContactStatus {
  SENT = 'SENT',
  ACCEPTED = 'ACCEPTED',
  FRIENDS = 'FRIENDS',
  BLOCKED = 'BLOCKED',
}

export enum TokenType {
  RESET_PASSWORD = 'RESET_PASSWORD',
  EMAIL_VERIFICATION = 'EMAIL_VERIFICATION',
}