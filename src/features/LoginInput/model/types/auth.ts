export interface LoginFormValues {
  username: string;
  password: string;
}

export type SignUpFormValues = Pick<User, 'username' | 'email'> & {
  password: string;
  passwordConfirmation: string;
  isChecked: boolean;
  privacyConsent: boolean;
  offerConsent: boolean;
  adConsent: boolean;
};

export interface AuthResponse {
  access_token: string;
  user: User;
}

interface Permission {
  id: string;
  name: string;
}

interface RoleSubscription {
  id: string;
  name: string;
  permissions: Permission[];
}

interface GetSubscriptionResponse {
  id: string;
  name: string;
  pricePerMonth: number;
  description?: string;
  roles: RoleSubscription[];
}

interface Subscription {
  id: string;
  subscriptionId: number;
  userId: string;
  createDate: string;
  endDate?: string;
  subscription: GetSubscriptionResponse;
}

export interface User {
  id: string;
  username: string;
  country: string;
  city: string;
  email: string;
  birthday: string | null;
  address: string;
  avatarUrl: string;
  createdAt: string;
  updatedAt: string;
  isEmailVerified?: boolean;
  subscriptions: Subscription[];
  userRoles: Role[];
}

export interface UserUpdate extends User {
  avatarImage?: string | null;
}

export type RoleName =
  | 'guest'
  | 'candidate'
  | 'member'
  | 'admin'
  | 'hr'
  | 'candidate-free'
  | 'candidate-premium'
  | 'author';

export interface Role {
  id: number;
  name: RoleName;
  permissions: RolePermission[];
}

export interface RolePermission {
  id: number;
  name: string;
}

export type LoginBodyRequest = LoginFormValues;
export type LoginResponse = AuthResponse;

export type SignUpBodyRequest = Omit<SignUpFormValues, 'isChecked'>;
export type SignUpResponse = AuthResponse;

export type RefreshResponse = AuthResponse;
