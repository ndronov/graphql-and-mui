import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  Date: { input: any; output: any };
  DateEnd: { input: any; output: any };
  DateTime: { input: any; output: any };
  DateTimeUtc: { input: any; output: any };
  Decimal: { input: any; output: any };
  EMAIL: { input: any; output: any };
  JSON: { input: any; output: any };
  Mixed: { input: any; output: any };
  StringInteger: { input: any; output: any };
};

export type Account = {
  readonly __typename?: 'Account';
  readonly account_name: Scalars['String']['output'];
  readonly account_number?: Maybe<Scalars['String']['output']>;
  readonly account_state?: Maybe<AccountState>;
  readonly account_type?: Maybe<AccountType>;
  readonly activated_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  readonly client?: Maybe<Client>;
  readonly client_accounts: ReadonlyArray<ClientAccountsDetails>;
  readonly commission_template?: Maybe<CommissionTemplate>;
  readonly company?: Maybe<Company>;
  readonly created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  readonly currency?: Maybe<Currencies>;
  readonly group?: Maybe<GroupRole>;
  readonly group_type?: Maybe<GroupType>;
  readonly iban_provider?: Maybe<PaymentProviderIban>;
  readonly id: Scalars['ID']['output'];
  readonly is_primary?: Maybe<Scalars['Boolean']['output']>;
  readonly last_charge_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  readonly max_limit_balance?: Maybe<Scalars['Decimal']['output']>;
  readonly member?: Maybe<Members>;
  readonly min_limit_balance?: Maybe<Scalars['Decimal']['output']>;
  readonly owner?: Maybe<ApplicantIndividual>;
  readonly payment_bank?: Maybe<PaymentBank>;
  readonly payment_provider?: Maybe<PaymentProvider>;
  readonly payment_system?: Maybe<PaymentSystem>;
  readonly updated_at?: Maybe<Scalars['DateTimeUtc']['output']>;
};

export type AccountClient = {
  readonly __typename?: 'AccountClient';
  readonly client: Client;
  readonly id: Scalars['ID']['output'];
};

export const enum AccountClientsType {
  Company = 'COMPANY',
  Individual = 'INDIVIDUAL',
}

export type AccountGenerateIbanResponse = {
  readonly __typename?: 'AccountGenerateIbanResponse';
  readonly message: Scalars['String']['output'];
  readonly status: Scalars['String']['output'];
};

export type AccountLimit = {
  readonly __typename?: 'AccountLimit';
  readonly account?: Maybe<Account>;
  readonly account_id?: Maybe<Scalars['ID']['output']>;
  readonly amount?: Maybe<Scalars['Decimal']['output']>;
  readonly commission_template_limit_action_type?: Maybe<CommissionTemplateLimitActionType>;
  readonly commission_template_limit_action_type_id?: Maybe<Scalars['ID']['output']>;
  readonly commission_template_limit_period?: Maybe<CommissionTemplateLimitPeriod>;
  readonly commission_template_limit_period_id?: Maybe<Scalars['ID']['output']>;
  readonly commission_template_limit_transfer_direction?: Maybe<CommissionTemplateLimitTransferDirection>;
  readonly commission_template_limit_transfer_direction_id?: Maybe<Scalars['ID']['output']>;
  readonly commission_template_limit_type?: Maybe<CommissionTemplateLimitType>;
  readonly currency?: Maybe<Currencies>;
  readonly currency_id?: Maybe<Scalars['ID']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly period_count?: Maybe<Scalars['Int']['output']>;
};

export type AccountLimitPaginator = {
  readonly __typename?: 'AccountLimitPaginator';
  readonly data: ReadonlyArray<AccountLimit>;
  readonly paginatorInfo: PaginatorInfo;
};

export type AccountPaginator = {
  readonly __typename?: 'AccountPaginator';
  readonly data: ReadonlyArray<Account>;
  readonly paginatorInfo: PaginatorInfo;
};

export type AccountReachedLimit = {
  readonly __typename?: 'AccountReachedLimit';
  readonly account?: Maybe<Account>;
  readonly account_id: Scalars['ID']['output'];
  readonly amount: Scalars['Decimal']['output'];
  readonly client_name: Scalars['String']['output'];
  readonly client_type: Scalars['String']['output'];
  readonly group_type: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly limit_currency: Scalars['String']['output'];
  readonly limit_type: Scalars['String']['output'];
  readonly limit_value: Scalars['Int']['output'];
  readonly period: Scalars['Int']['output'];
  readonly transfer_direction: Scalars['String']['output'];
};

export type AccountReachedLimitPaginator = {
  readonly __typename?: 'AccountReachedLimitPaginator';
  readonly data: ReadonlyArray<AccountReachedLimit>;
  readonly paginatorInfo: PaginatorInfo;
};

export type AccountState = {
  readonly __typename?: 'AccountState';
  readonly active: Scalars['Boolean']['output'];
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
};

export type AccountStatement = {
  readonly __typename?: 'AccountStatement';
  readonly account_currency?: Maybe<Scalars['String']['output']>;
  readonly account_number?: Maybe<Scalars['String']['output']>;
  readonly closing_balance?: Maybe<Scalars['Float']['output']>;
  readonly closing_balance_date?: Maybe<Scalars['DateTimeUtc']['output']>;
  readonly credit_turnover?: Maybe<Scalars['Float']['output']>;
  readonly date_from: Scalars['DateTimeUtc']['output'];
  readonly debit_turnover?: Maybe<Scalars['Float']['output']>;
  readonly opening_balance?: Maybe<Scalars['Float']['output']>;
  readonly opening_balance_date?: Maybe<Scalars['DateTimeUtc']['output']>;
  readonly transactions?: Maybe<ReadonlyArray<Maybe<AccountStatementTransaction>>>;
};

export type AccountStatementTransaction = {
  readonly __typename?: 'AccountStatementTransaction';
  readonly account_balance?: Maybe<Scalars['Float']['output']>;
  readonly account_client?: Maybe<Scalars['String']['output']>;
  readonly account_number?: Maybe<Scalars['String']['output']>;
  readonly amount: Scalars['Float']['output'];
  readonly created_at: Scalars['DateTimeUtc']['output'];
  readonly execution_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  readonly reason?: Maybe<Scalars['String']['output']>;
  readonly sender_recipient?: Maybe<Scalars['String']['output']>;
  readonly status?: Maybe<Scalars['String']['output']>;
  readonly transaction_id: Scalars['ID']['output'];
};

export const enum AccountType {
  Business = 'Business',
  Private = 'Private',
}

export type ActiveSession = {
  readonly __typename?: 'ActiveSession';
  readonly browser?: Maybe<Scalars['String']['output']>;
  readonly browser_version?: Maybe<Scalars['String']['output']>;
  readonly city?: Maybe<Scalars['String']['output']>;
  readonly company: Scalars['String']['output'];
  readonly country?: Maybe<Scalars['String']['output']>;
  readonly created_at: Scalars['DateTimeUtc']['output'];
  readonly device_type?: Maybe<Scalars['String']['output']>;
  readonly domain: Scalars['String']['output'];
  readonly id: Scalars['String']['output'];
  readonly ip?: Maybe<Scalars['String']['output']>;
  readonly model?: Maybe<Scalars['String']['output']>;
  readonly platform?: Maybe<Scalars['String']['output']>;
  readonly provider: Scalars['String']['output'];
  readonly trusted?: Maybe<Scalars['Boolean']['output']>;
};

export type ActiveSessionMutatorResponse = {
  readonly __typename?: 'ActiveSessionMutatorResponse';
  readonly message: Scalars['String']['output'];
  readonly status: Scalars['String']['output'];
};

export type ActiveSessions = {
  readonly __typename?: 'ActiveSessions';
  readonly data?: Maybe<ReadonlyArray<ActiveSession>>;
  readonly paginatorInfo?: Maybe<PaginatorInfo>;
};

export type ActivityLog = {
  readonly __typename?: 'ActivityLog';
  readonly changes?: Maybe<Scalars['String']['output']>;
  readonly company: Scalars['String']['output'];
  readonly created_at: Scalars['DateTimeUtc']['output'];
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly domain: Scalars['String']['output'];
  readonly group: Scalars['String']['output'];
  readonly id: Scalars['String']['output'];
  readonly member: Scalars['String']['output'];
};

export type ActivityLogs = {
  readonly __typename?: 'ActivityLogs';
  readonly data?: Maybe<ReadonlyArray<ActivityLog>>;
  readonly paginatorInfo?: Maybe<PaginatorInfo>;
};

export type AdditionalFieldInput = {
  readonly field_name?: InputMaybe<Scalars['String']['input']>;
  readonly field_type?: InputMaybe<FieldTypes>;
  readonly field_value?: InputMaybe<Scalars['StringInteger']['input']>;
};

export type ApplicantAccount = {
  readonly __typename?: 'ApplicantAccount';
  readonly account_name: Scalars['String']['output'];
  readonly account_number?: Maybe<Scalars['String']['output']>;
  readonly account_type: Scalars['String']['output'];
  readonly currency?: Maybe<Currencies>;
  readonly current_balance?: Maybe<Scalars['Decimal']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly is_primary?: Maybe<Scalars['Boolean']['output']>;
  readonly is_show?: Maybe<Scalars['Boolean']['output']>;
};

export type ApplicantBankingAccess = {
  readonly __typename?: 'ApplicantBankingAccess';
  readonly applicant_company?: Maybe<ApplicantCompany>;
  readonly applicant_individual?: Maybe<ApplicantIndividual>;
  readonly contact_administrator: Scalars['Boolean']['output'];
  readonly create_payments?: Maybe<Scalars['Boolean']['output']>;
  readonly daily_limit: Scalars['Decimal']['output'];
  readonly grant_access?: Maybe<Scalars['Boolean']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly member?: Maybe<Members>;
  readonly monthly_limit: Scalars['Decimal']['output'];
  readonly operation_limit: Scalars['Decimal']['output'];
  readonly role?: Maybe<Role>;
  readonly sign_payments?: Maybe<Scalars['Boolean']['output']>;
  readonly used_daily_limit: Scalars['Decimal']['output'];
  readonly used_monthly_limit: Scalars['Decimal']['output'];
};

export type ApplicantBankingAccesses = {
  readonly __typename?: 'ApplicantBankingAccesses';
  readonly data?: Maybe<ReadonlyArray<ApplicantBankingAccess>>;
  readonly paginatorInfo?: Maybe<PaginatorInfo>;
};

export const enum ApplicantClientType {
  Corporate = 'Corporate',
  Private = 'Private',
}

export type ApplicantCompany = {
  readonly __typename?: 'ApplicantCompany';
  readonly address?: Maybe<Scalars['String']['output']>;
  readonly address2?: Maybe<Scalars['String']['output']>;
  readonly applicant_state?: Maybe<ApplicantState>;
  readonly basic_info_additional_field?: Maybe<Scalars['JSON']['output']>;
  readonly business_type?: Maybe<ApplicantCompanyBusinessType>;
  readonly city?: Maybe<Scalars['String']['output']>;
  readonly company?: Maybe<Company>;
  readonly company_info_additional_fields?: Maybe<Scalars['JSON']['output']>;
  readonly company_position?: Maybe<ApplicantIndividualCompany>;
  readonly company_type?: Maybe<Scalars['String']['output']>;
  readonly contact_email?: Maybe<Scalars['EMAIL']['output']>;
  readonly contact_phone?: Maybe<Scalars['String']['output']>;
  readonly contacts_additional_fields?: Maybe<Scalars['JSON']['output']>;
  readonly country?: Maybe<Country>;
  readonly created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  readonly email?: Maybe<Scalars['EMAIL']['output']>;
  readonly email_verification?: Maybe<ApplicantVerificationStatus>;
  readonly expires_at?: Maybe<Scalars['Date']['output']>;
  readonly group?: Maybe<GroupRole>;
  readonly id: Scalars['ID']['output'];
  readonly incorporate_date?: Maybe<Scalars['DateTimeUtc']['output']>;
  readonly kyc_level?: Maybe<ApplicantRiskLevel>;
  readonly labels?: Maybe<ReadonlyArray<Maybe<ApplicantCompanyLabel>>>;
  readonly language?: Maybe<Languages>;
  readonly license_number?: Maybe<Scalars['String']['output']>;
  readonly manager?: Maybe<Members>;
  readonly modules?: Maybe<ReadonlyArray<Maybe<ApplicantCompanyModules>>>;
  readonly name?: Maybe<Scalars['String']['output']>;
  readonly notes?: Maybe<ReadonlyArray<Maybe<ApplicantCompanyNotes>>>;
  readonly office_address?: Maybe<Scalars['String']['output']>;
  readonly owner?: Maybe<ApplicantIndividual>;
  readonly owner_position?: Maybe<ApplicantIndividualCompany>;
  readonly owner_relation?: Maybe<ApplicantIndividualCompany>;
  readonly phone?: Maybe<Scalars['String']['output']>;
  readonly phone_verification?: Maybe<ApplicantVerificationStatus>;
  readonly photo?: Maybe<Files>;
  readonly profile_additional_fields?: Maybe<Scalars['JSON']['output']>;
  readonly project?: Maybe<Project>;
  readonly reg_at?: Maybe<Scalars['Date']['output']>;
  readonly reg_number?: Maybe<Scalars['String']['output']>;
  readonly risk_level?: Maybe<ApplicantRiskLevel>;
  readonly state?: Maybe<Scalars['String']['output']>;
  readonly state_reason?: Maybe<ApplicantStateReason>;
  readonly status?: Maybe<ApplicantStatus>;
  readonly tax?: Maybe<Scalars['String']['output']>;
  readonly url?: Maybe<Scalars['String']['output']>;
  readonly zip?: Maybe<Scalars['String']['output']>;
};

export type ApplicantCompanyBusinessType = {
  readonly __typename?: 'ApplicantCompanyBusinessType';
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
};

export type ApplicantCompanyBusinessTypePaginator = {
  readonly __typename?: 'ApplicantCompanyBusinessTypePaginator';
  readonly data: ReadonlyArray<ApplicantCompanyBusinessType>;
  readonly paginatorInfo: PaginatorInfo;
};

export type ApplicantCompanyLabel = {
  readonly __typename?: 'ApplicantCompanyLabel';
  readonly hex_color_code: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly is_active?: Maybe<Scalars['Boolean']['output']>;
  readonly name: Scalars['String']['output'];
};

export type ApplicantCompanyLabelPaginator = {
  readonly __typename?: 'ApplicantCompanyLabelPaginator';
  readonly data: ReadonlyArray<ApplicantCompanyLabel>;
  readonly paginatorInfo: PaginatorInfo;
};

export type ApplicantCompanyModules = {
  readonly __typename?: 'ApplicantCompanyModules';
  readonly id?: Maybe<Scalars['ID']['output']>;
  readonly is_active?: Maybe<Scalars['Boolean']['output']>;
  readonly name?: Maybe<Scalars['String']['output']>;
};

export type ApplicantCompanyNotes = {
  readonly __typename?: 'ApplicantCompanyNotes';
  readonly applicant?: Maybe<ApplicantCompany>;
  readonly author?: Maybe<Members>;
  readonly created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly note: Scalars['String']['output'];
};

export type ApplicantCompanyNotesPaginator = {
  readonly __typename?: 'ApplicantCompanyNotesPaginator';
  readonly data: ReadonlyArray<ApplicantCompanyNotes>;
  readonly paginatorInfo: PaginatorInfo;
};

export type ApplicantCompanyPaginator = {
  readonly __typename?: 'ApplicantCompanyPaginator';
  readonly data: ReadonlyArray<ApplicantCompany>;
  readonly paginatorInfo: PaginatorInfo;
};

export type ApplicantCompanyRiskLevelHistory = {
  readonly __typename?: 'ApplicantCompanyRiskLevelHistory';
  readonly applicant_company?: Maybe<ApplicantCompany>;
  readonly comment: Scalars['String']['output'];
  readonly created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly manager?: Maybe<Members>;
  readonly risk_level?: Maybe<ApplicantRiskLevel>;
};

export type ApplicantCompanyRiskLevelHistoryPaginator = {
  readonly __typename?: 'ApplicantCompanyRiskLevelHistoryPaginator';
  readonly data: ReadonlyArray<ApplicantCompanyRiskLevelHistory>;
  readonly paginatorInfo: PaginatorInfo;
};

export type ApplicantDetailsRequisites = {
  readonly __typename?: 'ApplicantDetailsRequisites';
  readonly address: Scalars['String']['output'];
  readonly bank_address: Scalars['String']['output'];
  readonly bank_country: Scalars['String']['output'];
  readonly bank_name: Scalars['String']['output'];
  readonly beneficiary: Scalars['String']['output'];
  readonly country: Scalars['String']['output'];
  readonly currency: Scalars['String']['output'];
  readonly iban: Scalars['String']['output'];
  readonly swift_code: Scalars['String']['output'];
};

export type ApplicantDevice = {
  readonly __typename?: 'ApplicantDevice';
  readonly browser?: Maybe<Scalars['String']['output']>;
  readonly created_at: Scalars['DateTimeUtc']['output'];
  readonly device_type?: Maybe<Scalars['String']['output']>;
  readonly expired_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  readonly id?: Maybe<Scalars['ID']['output']>;
  readonly ip?: Maybe<Scalars['String']['output']>;
  readonly model?: Maybe<Scalars['String']['output']>;
  readonly platform?: Maybe<Scalars['String']['output']>;
  readonly trusted: Scalars['Boolean']['output'];
};

export type ApplicantDocument = {
  readonly __typename?: 'ApplicantDocument';
  readonly added_from?: Maybe<Scalars['String']['output']>;
  readonly applicant_id: Scalars['ID']['output'];
  readonly applicant_type: ApplicantType;
  readonly company?: Maybe<Company>;
  readonly country?: Maybe<Country>;
  readonly created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  readonly document_state?: Maybe<DocumentState>;
  readonly document_state_id?: Maybe<Scalars['ID']['output']>;
  readonly document_type?: Maybe<DocumentType>;
  readonly document_type_id?: Maybe<Scalars['ID']['output']>;
  readonly file?: Maybe<Files>;
  readonly id: Scalars['ID']['output'];
  readonly info?: Maybe<Scalars['String']['output']>;
  readonly internal_notes?: Maybe<ReadonlyArray<Maybe<ApplicantDocumentInternalNote>>>;
  readonly reject_details?: Maybe<ReadonlyArray<Maybe<ApplicantDocumentRejectDetail>>>;
  readonly tags?: Maybe<ReadonlyArray<Maybe<ApplicantDocumentTag>>>;
  readonly updated_at?: Maybe<Scalars['DateTimeUtc']['output']>;
};

export type ApplicantDocumentInternalNote = {
  readonly __typename?: 'ApplicantDocumentInternalNote';
  readonly created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  readonly document?: Maybe<ApplicantDocument>;
  readonly id: Scalars['ID']['output'];
  readonly member?: Maybe<Members>;
  readonly note?: Maybe<Scalars['String']['output']>;
  readonly updated_at?: Maybe<Scalars['DateTimeUtc']['output']>;
};

export type ApplicantDocumentInternalNotePaginator = {
  readonly __typename?: 'ApplicantDocumentInternalNotePaginator';
  readonly data: ReadonlyArray<ApplicantDocumentInternalNote>;
  readonly paginatorInfo: PaginatorInfo;
};

export type ApplicantDocumentPaginator = {
  readonly __typename?: 'ApplicantDocumentPaginator';
  readonly data: ReadonlyArray<ApplicantDocument>;
  readonly paginatorInfo: PaginatorInfo;
};

export type ApplicantDocumentRejectDetail = {
  readonly __typename?: 'ApplicantDocumentRejectDetail';
  readonly applicant_document: ApplicantDocument;
  readonly applicant_document_tag?: Maybe<ReadonlyArray<ApplicantDocumentTag>>;
  readonly created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly member?: Maybe<Members>;
  readonly updated_at?: Maybe<Scalars['DateTimeUtc']['output']>;
};

export type ApplicantDocumentTag = {
  readonly __typename?: 'ApplicantDocumentTag';
  readonly category?: Maybe<ApplicantDocumentTagCategory>;
  readonly created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly member?: Maybe<Members>;
  readonly name: Scalars['String']['output'];
};

export type ApplicantDocumentTagCategory = {
  readonly __typename?: 'ApplicantDocumentTagCategory';
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
};

export type ApplicantDocumentTagCategoryPaginator = {
  readonly __typename?: 'ApplicantDocumentTagCategoryPaginator';
  readonly data: ReadonlyArray<ApplicantDocumentTagCategory>;
  readonly paginatorInfo: PaginatorInfo;
};

export type ApplicantDocumentTagPaginator = {
  readonly __typename?: 'ApplicantDocumentTagPaginator';
  readonly data: ReadonlyArray<ApplicantDocumentTag>;
  readonly paginatorInfo: PaginatorInfo;
};

export type ApplicantIndividual = {
  readonly __typename?: 'ApplicantIndividual';
  readonly address?: Maybe<Scalars['String']['output']>;
  readonly address_additional_fields?: Maybe<Scalars['JSON']['output']>;
  readonly applicant_companies?: Maybe<ReadonlyArray<Maybe<ApplicantCompany>>>;
  readonly applicant_state?: Maybe<ApplicantState>;
  readonly backup_codes?: Maybe<Scalars['JSON']['output']>;
  readonly banking_access?: Maybe<ReadonlyArray<Maybe<ApplicantBankingAccess>>>;
  readonly birth_at?: Maybe<Scalars['Date']['output']>;
  readonly birth_city?: Maybe<Scalars['String']['output']>;
  readonly birth_country?: Maybe<Country>;
  readonly birth_state?: Maybe<Scalars['String']['output']>;
  readonly citizenship_country?: Maybe<Country>;
  readonly city?: Maybe<Scalars['String']['output']>;
  readonly company?: Maybe<Company>;
  readonly contacts_additional_fields?: Maybe<Scalars['JSON']['output']>;
  readonly country?: Maybe<Country>;
  readonly created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  readonly email?: Maybe<Scalars['EMAIL']['output']>;
  readonly email_verification?: Maybe<ApplicantVerificationStatus>;
  readonly first_name?: Maybe<Scalars['String']['output']>;
  readonly fullname?: Maybe<Scalars['String']['output']>;
  readonly google2fa_secret?: Maybe<Scalars['String']['output']>;
  readonly group?: Maybe<GroupRole>;
  readonly id: Scalars['ID']['output'];
  readonly ip_addresses?: Maybe<ReadonlyArray<Maybe<ClientIpAddress>>>;
  readonly kyc_level?: Maybe<ApplicantKycLevel>;
  readonly labels?: Maybe<ReadonlyArray<Maybe<ApplicantIndividualLabel>>>;
  readonly language?: Maybe<Languages>;
  readonly last_name?: Maybe<Scalars['String']['output']>;
  readonly last_screened_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  readonly manager?: Maybe<Members>;
  readonly middle_name?: Maybe<Scalars['String']['output']>;
  readonly modules?: Maybe<ReadonlyArray<Maybe<ApplicantIndividualModules>>>;
  readonly nationality?: Maybe<Scalars['String']['output']>;
  readonly notes?: Maybe<ReadonlyArray<Maybe<ApplicantIndividualNotes>>>;
  readonly personal_additional_fields?: Maybe<Scalars['JSON']['output']>;
  readonly phone?: Maybe<Scalars['String']['output']>;
  readonly phone_verification?: Maybe<ApplicantVerificationStatus>;
  readonly photo?: Maybe<Files>;
  readonly profile_additional_fields?: Maybe<Scalars['JSON']['output']>;
  readonly project?: Maybe<Project>;
  readonly risk_level?: Maybe<ApplicantRiskLevel>;
  readonly security_pin?: Maybe<Scalars['String']['output']>;
  readonly sex?: Maybe<Sex>;
  readonly state?: Maybe<Scalars['String']['output']>;
  readonly state_reason?: Maybe<ApplicantStateReason>;
  readonly status?: Maybe<ApplicantStatus>;
  readonly two_factor_auth?: Maybe<TwoFactorAuthSettings>;
  readonly updated_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  readonly url?: Maybe<Scalars['String']['output']>;
  readonly zip?: Maybe<Scalars['String']['output']>;
};

export type ApplicantIndividualCompany = {
  readonly __typename?: 'ApplicantIndividualCompany';
  readonly applicant_company?: Maybe<ApplicantCompany>;
  readonly applicant_company_id: Scalars['ID']['output'];
  readonly applicant_id: Scalars['ID']['output'];
  readonly applicant_individual_company_position_id: Scalars['ID']['output'];
  readonly applicant_individual_company_relation_id: Scalars['ID']['output'];
  readonly applicant_type: Scalars['String']['output'];
  readonly client?: Maybe<Client>;
  readonly percentage_owned?: Maybe<Scalars['Float']['output']>;
  readonly position_in_company?: Maybe<ApplicantIndividualCompanyPosition>;
  readonly relation_to_company?: Maybe<ApplicantIndividualCompanyRelation>;
};

export type ApplicantIndividualCompanyPosition = {
  readonly __typename?: 'ApplicantIndividualCompanyPosition';
  readonly company?: Maybe<Company>;
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
};

export type ApplicantIndividualCompanyPositionPaginator = {
  readonly __typename?: 'ApplicantIndividualCompanyPositionPaginator';
  readonly data: ReadonlyArray<ApplicantIndividualCompanyPosition>;
  readonly paginatorInfo: PaginatorInfo;
};

export type ApplicantIndividualCompanyRelation = {
  readonly __typename?: 'ApplicantIndividualCompanyRelation';
  readonly company?: Maybe<Company>;
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
};

export type ApplicantIndividualCompanyRelationPaginator = {
  readonly __typename?: 'ApplicantIndividualCompanyRelationPaginator';
  readonly data: ReadonlyArray<ApplicantIndividualCompanyRelation>;
  readonly paginatorInfo: PaginatorInfo;
};

export type ApplicantIndividualLabel = {
  readonly __typename?: 'ApplicantIndividualLabel';
  readonly hex_color_code: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly is_active?: Maybe<Scalars['Boolean']['output']>;
  readonly name: Scalars['String']['output'];
};

export type ApplicantIndividualLabelPaginator = {
  readonly __typename?: 'ApplicantIndividualLabelPaginator';
  readonly data: ReadonlyArray<ApplicantIndividualLabel>;
  readonly paginatorInfo: PaginatorInfo;
};

export type ApplicantIndividualModules = {
  readonly __typename?: 'ApplicantIndividualModules';
  readonly id?: Maybe<Scalars['ID']['output']>;
  readonly is_active?: Maybe<Scalars['Boolean']['output']>;
  readonly name?: Maybe<Scalars['String']['output']>;
};

export type ApplicantIndividualNotes = {
  readonly __typename?: 'ApplicantIndividualNotes';
  readonly applicant?: Maybe<ApplicantIndividual>;
  readonly author?: Maybe<Members>;
  readonly created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly note: Scalars['String']['output'];
};

export type ApplicantIndividualNotesPaginator = {
  readonly __typename?: 'ApplicantIndividualNotesPaginator';
  readonly data: ReadonlyArray<ApplicantIndividualNotes>;
  readonly paginatorInfo: PaginatorInfo;
};

export type ApplicantIndividualPaginator = {
  readonly __typename?: 'ApplicantIndividualPaginator';
  readonly data: ReadonlyArray<ApplicantIndividual>;
  readonly paginatorInfo: PaginatorInfo;
};

export type ApplicantKycLevel = {
  readonly __typename?: 'ApplicantKycLevel';
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
};

export type ApplicantKycLevelPaginator = {
  readonly __typename?: 'ApplicantKycLevelPaginator';
  readonly data: ReadonlyArray<ApplicantKycLevel>;
  readonly paginatorInfo: PaginatorInfo;
};

export type ApplicantLinkedCompany = {
  readonly __typename?: 'ApplicantLinkedCompany';
  readonly company?: Maybe<ApplicantCompany>;
  readonly company_position?: Maybe<ApplicantIndividualCompanyPosition>;
  readonly company_relation?: Maybe<ApplicantIndividualCompanyRelation>;
  readonly percentage_owned?: Maybe<Scalars['Float']['output']>;
};

export type ApplicantModules = {
  readonly __typename?: 'ApplicantModules';
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
};

export type ApplicantModulesPaginator = {
  readonly __typename?: 'ApplicantModulesPaginator';
  readonly data: ReadonlyArray<ApplicantModules>;
  readonly paginatorInfo: PaginatorInfo;
};

export type ApplicantProfile = {
  readonly __typename?: 'ApplicantProfile';
  readonly address?: Maybe<Scalars['String']['output']>;
  readonly applicant_state?: Maybe<ApplicantState>;
  readonly backup_codes?: Maybe<Scalars['JSON']['output']>;
  readonly birth_at?: Maybe<Scalars['Date']['output']>;
  readonly birth_city?: Maybe<Scalars['String']['output']>;
  readonly birth_country?: Maybe<Country>;
  readonly birth_state?: Maybe<Scalars['String']['output']>;
  readonly citizenship_country?: Maybe<Country>;
  readonly city?: Maybe<Scalars['String']['output']>;
  readonly companies?: Maybe<ReadonlyArray<Maybe<ApplicantCompany>>>;
  readonly company?: Maybe<Company>;
  readonly contacts_additional_fields?: Maybe<Scalars['JSON']['output']>;
  readonly country?: Maybe<Country>;
  readonly created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  readonly email?: Maybe<Scalars['EMAIL']['output']>;
  readonly first_name?: Maybe<Scalars['String']['output']>;
  readonly fullname?: Maybe<Scalars['String']['output']>;
  readonly google2fa_secret?: Maybe<Scalars['String']['output']>;
  readonly group?: Maybe<GroupRole>;
  readonly id: Scalars['ID']['output'];
  readonly ip_addresses?: Maybe<ReadonlyArray<Maybe<ClientIpAddress>>>;
  readonly is_verification_phone?: Maybe<Scalars['Boolean']['output']>;
  readonly labels?: Maybe<ReadonlyArray<Maybe<ApplicantIndividualLabel>>>;
  readonly language?: Maybe<Languages>;
  readonly last_name?: Maybe<Scalars['String']['output']>;
  readonly manager?: Maybe<Members>;
  readonly middle_name?: Maybe<Scalars['String']['output']>;
  readonly modules?: Maybe<ReadonlyArray<Maybe<ApplicantIndividualModules>>>;
  readonly nationality?: Maybe<Scalars['String']['output']>;
  readonly notes?: Maybe<ReadonlyArray<Maybe<ApplicantIndividualNotes>>>;
  readonly notify_device_email?: Maybe<Scalars['Boolean']['output']>;
  readonly personal_additional_fields?: Maybe<Scalars['JSON']['output']>;
  readonly phone?: Maybe<Scalars['String']['output']>;
  readonly photo?: Maybe<Files>;
  readonly profile_additional_fields?: Maybe<Scalars['JSON']['output']>;
  readonly risk_level?: Maybe<ApplicantRiskLevel>;
  readonly security_pin?: Maybe<Scalars['String']['output']>;
  readonly sex?: Maybe<Sex>;
  readonly state?: Maybe<Scalars['String']['output']>;
  readonly state_reason?: Maybe<ApplicantStateReason>;
  readonly status?: Maybe<ApplicantStatus>;
  readonly two_factor_auth?: Maybe<TwoFactorAuthSettings>;
  readonly url?: Maybe<Scalars['String']['output']>;
  readonly zip?: Maybe<Scalars['String']['output']>;
};

export type ApplicantRequisites = {
  readonly __typename?: 'ApplicantRequisites';
  readonly account_number: Scalars['String']['output'];
  readonly bank?: Maybe<PaymentBank>;
  readonly currency?: Maybe<Currencies>;
  readonly id: Scalars['ID']['output'];
  readonly owner?: Maybe<ApplicantProfile>;
};

export type ApplicantRiskLevel = {
  readonly __typename?: 'ApplicantRiskLevel';
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
};

export type ApplicantRiskLevelHistory = {
  readonly __typename?: 'ApplicantRiskLevelHistory';
  readonly applicant?: Maybe<ApplicantIndividual>;
  readonly comment: Scalars['String']['output'];
  readonly created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly manager?: Maybe<Members>;
  readonly risk_level?: Maybe<ApplicantRiskLevel>;
};

export type ApplicantRiskLevelHistoryPaginator = {
  readonly __typename?: 'ApplicantRiskLevelHistoryPaginator';
  readonly data: ReadonlyArray<ApplicantRiskLevelHistory>;
  readonly paginatorInfo: PaginatorInfo;
};

export type ApplicantRiskLevelPaginator = {
  readonly __typename?: 'ApplicantRiskLevelPaginator';
  readonly data: ReadonlyArray<ApplicantRiskLevel>;
  readonly paginatorInfo: PaginatorInfo;
};

export type ApplicantSettingsProfile = {
  readonly __typename?: 'ApplicantSettingsProfile';
  readonly email?: Maybe<Scalars['EMAIL']['output']>;
  readonly email_confirm_url?: Maybe<Scalars['String']['output']>;
  readonly first_name?: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly last_name?: Maybe<Scalars['String']['output']>;
  readonly middle_name?: Maybe<Scalars['String']['output']>;
};

export type ApplicantState = {
  readonly __typename?: 'ApplicantState';
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
};

export type ApplicantStatePaginator = {
  readonly __typename?: 'ApplicantStatePaginator';
  readonly data: ReadonlyArray<ApplicantState>;
  readonly paginatorInfo: PaginatorInfo;
};

export type ApplicantStateReason = {
  readonly __typename?: 'ApplicantStateReason';
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
};

export type ApplicantStateReasonPaginator = {
  readonly __typename?: 'ApplicantStateReasonPaginator';
  readonly data: ReadonlyArray<ApplicantStateReason>;
  readonly paginatorInfo: PaginatorInfo;
};

export type ApplicantStatus = {
  readonly __typename?: 'ApplicantStatus';
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
};

export type ApplicantStatusPaginator = {
  readonly __typename?: 'ApplicantStatusPaginator';
  readonly data: ReadonlyArray<ApplicantStatus>;
  readonly paginatorInfo: PaginatorInfo;
};

export const enum ApplicantType {
  ApplicantCompany = 'ApplicantCompany',
  ApplicantIndividual = 'ApplicantIndividual',
}

export type ApplicantVerificationStatus = {
  readonly __typename?: 'ApplicantVerificationStatus';
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
};

export type AuthenticationLog = {
  readonly __typename?: 'AuthenticationLog';
  readonly browser?: Maybe<Scalars['String']['output']>;
  readonly browser_version?: Maybe<Scalars['String']['output']>;
  readonly city?: Maybe<Scalars['String']['output']>;
  readonly client_type: Scalars['String']['output'];
  readonly company: Scalars['String']['output'];
  readonly country?: Maybe<Scalars['String']['output']>;
  readonly created_at: Scalars['DateTimeUtc']['output'];
  readonly device_type?: Maybe<Scalars['String']['output']>;
  readonly domain: Scalars['String']['output'];
  readonly email: Scalars['String']['output'];
  readonly expired_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  readonly group: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly info?: Maybe<Scalars['String']['output']>;
  readonly ip?: Maybe<Scalars['String']['output']>;
  readonly member: Scalars['String']['output'];
  readonly model?: Maybe<Scalars['String']['output']>;
  readonly platform?: Maybe<Scalars['String']['output']>;
  readonly provider: Scalars['String']['output'];
  readonly status?: Maybe<Scalars['String']['output']>;
};

export type AuthenticationLogs = {
  readonly __typename?: 'AuthenticationLogs';
  readonly data?: Maybe<ReadonlyArray<AuthenticationLog>>;
  readonly paginatorInfo?: Maybe<PaginatorInfo>;
};

export type BankCorrespondent = {
  readonly __typename?: 'BankCorrespondent';
  readonly address: Scalars['String']['output'];
  readonly bank_account: Scalars['String']['output'];
  readonly bank_code: Scalars['String']['output'];
  readonly currencies?: Maybe<ReadonlyArray<Maybe<Currencies>>>;
  readonly id: Scalars['ID']['output'];
  readonly is_active?: Maybe<Scalars['Boolean']['output']>;
  readonly name: Scalars['String']['output'];
  readonly regions?: Maybe<ReadonlyArray<Maybe<Region>>>;
};

export type BankCorrespondentPaginator = {
  readonly __typename?: 'BankCorrespondentPaginator';
  readonly data: ReadonlyArray<BankCorrespondent>;
  readonly paginatorInfo: PaginatorInfo;
};

export type BusinessActivity = {
  readonly __typename?: 'BusinessActivity';
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
};

export type BusinessActivityPaginator = {
  readonly __typename?: 'BusinessActivityPaginator';
  readonly data: ReadonlyArray<BusinessActivity>;
  readonly paginatorInfo: PaginatorInfo;
};

export type Client = ApplicantCompany | ApplicantIndividual;

export type ClientAccountsDetails = {
  readonly __typename?: 'ClientAccountsDetails';
  readonly available_balance: Scalars['Decimal']['output'];
  readonly currency: Currencies;
  readonly current_balance: Scalars['Decimal']['output'];
  readonly id: Scalars['ID']['output'];
  readonly max_limit_balance?: Maybe<Scalars['Decimal']['output']>;
  readonly min_limit_balance?: Maybe<Scalars['Decimal']['output']>;
  readonly reserved_balance: Scalars['Decimal']['output'];
};

export type ClientIpAddress = {
  readonly __typename?: 'ClientIpAddress';
  readonly client_id?: Maybe<Scalars['ID']['output']>;
  readonly client_type?: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly ip_address?: Maybe<Scalars['String']['output']>;
};

export const enum ClientType {
  Administration = 'Administration',
  Client = 'Client',
}

export type Clientable = ApplicantCompany | ApplicantIndividual | Members;

export const enum Column {
  CreatedAt = 'CREATED_AT',
  ExpiredAt = 'EXPIRED_AT',
  Id = 'ID',
}

export type CommissionPriceList = {
  readonly __typename?: 'CommissionPriceList';
  readonly account?: Maybe<Account>;
  readonly commission_template?: Maybe<CommissionTemplate>;
  readonly company?: Maybe<Company>;
  readonly fees?: Maybe<ReadonlyArray<Maybe<PriceListFee>>>;
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
  readonly owner?: Maybe<ReadonlyArray<Maybe<ApplicantIndividual>>>;
  readonly payment_system?: Maybe<PaymentSystem>;
  readonly provider?: Maybe<PaymentProvider>;
  readonly region?: Maybe<Region>;
};

export type CommissionPriceListPaginator = {
  readonly __typename?: 'CommissionPriceListPaginator';
  readonly data: ReadonlyArray<CommissionPriceList>;
  readonly paginatorInfo: PaginatorInfo;
};

export type CommissionTemplate = {
  readonly __typename?: 'CommissionTemplate';
  readonly account?: Maybe<Account>;
  readonly business_activity?: Maybe<ReadonlyArray<Maybe<BusinessActivity>>>;
  readonly commission_template_limits?: Maybe<ReadonlyArray<Maybe<CommissionTemplateLimit>>>;
  readonly company?: Maybe<Company>;
  readonly country_id?: Maybe<ReadonlyArray<Maybe<Scalars['ID']['output']>>>;
  readonly currencies?: Maybe<ReadonlyArray<Maybe<Currencies>>>;
  readonly currency_id?: Maybe<ReadonlyArray<Maybe<Scalars['ID']['output']>>>;
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly is_active?: Maybe<Scalars['Boolean']['output']>;
  readonly name: Scalars['String']['output'];
  readonly owner?: Maybe<ReadonlyArray<Maybe<ApplicantIndividual>>>;
  readonly payment_provider?: Maybe<PaymentProvider>;
  readonly regions?: Maybe<ReadonlyArray<Maybe<Region>>>;
};

export type CommissionTemplateLimit = {
  readonly __typename?: 'CommissionTemplateLimit';
  readonly amount: Scalars['Decimal']['output'];
  readonly commission_template: CommissionTemplate;
  readonly commission_template_limit_action_type: CommissionTemplateLimitActionType;
  readonly commission_template_limit_period?: Maybe<CommissionTemplateLimitPeriod>;
  readonly commission_template_limit_transfer_direction: CommissionTemplateLimitTransferDirection;
  readonly commission_template_limit_type: CommissionTemplateLimitType;
  readonly currency: Currencies;
  readonly id: Scalars['ID']['output'];
  readonly payment_system: PaymentSystem;
  readonly period_count?: Maybe<Scalars['Int']['output']>;
  readonly region: Region;
};

export type CommissionTemplateLimitActionType = {
  readonly __typename?: 'CommissionTemplateLimitActionType';
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
};

export type CommissionTemplateLimitActionTypePaginator = {
  readonly __typename?: 'CommissionTemplateLimitActionTypePaginator';
  readonly data: ReadonlyArray<CommissionTemplateLimitActionType>;
  readonly paginatorInfo: PaginatorInfo;
};

export type CommissionTemplateLimitPaginator = {
  readonly __typename?: 'CommissionTemplateLimitPaginator';
  readonly data: ReadonlyArray<CommissionTemplateLimit>;
  readonly paginatorInfo: PaginatorInfo;
};

export type CommissionTemplateLimitPeriod = {
  readonly __typename?: 'CommissionTemplateLimitPeriod';
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
};

export type CommissionTemplateLimitPeriodPaginator = {
  readonly __typename?: 'CommissionTemplateLimitPeriodPaginator';
  readonly data: ReadonlyArray<CommissionTemplateLimitPeriod>;
  readonly paginatorInfo: PaginatorInfo;
};

export type CommissionTemplateLimitTransferDirection = {
  readonly __typename?: 'CommissionTemplateLimitTransferDirection';
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
};

export type CommissionTemplateLimitTransferDirectionPaginator = {
  readonly __typename?: 'CommissionTemplateLimitTransferDirectionPaginator';
  readonly data: ReadonlyArray<CommissionTemplateLimitTransferDirection>;
  readonly paginatorInfo: PaginatorInfo;
};

export type CommissionTemplateLimitType = {
  readonly __typename?: 'CommissionTemplateLimitType';
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
};

export type CommissionTemplateLimitTypePaginator = {
  readonly __typename?: 'CommissionTemplateLimitTypePaginator';
  readonly data: ReadonlyArray<CommissionTemplateLimitType>;
  readonly paginatorInfo: PaginatorInfo;
};

export type CommissionTemplatePaginator = {
  readonly __typename?: 'CommissionTemplatePaginator';
  readonly data: ReadonlyArray<CommissionTemplate>;
  readonly paginatorInfo: PaginatorInfo;
};

export type Company = {
  readonly __typename?: 'Company';
  readonly additional_fields_basic?: Maybe<Scalars['JSON']['output']>;
  readonly additional_fields_data?: Maybe<Scalars['JSON']['output']>;
  readonly additional_fields_info?: Maybe<Scalars['JSON']['output']>;
  readonly additional_fields_settings?: Maybe<Scalars['JSON']['output']>;
  readonly address?: Maybe<Scalars['String']['output']>;
  readonly backoffice_forgot_password_url?: Maybe<Scalars['String']['output']>;
  readonly backoffice_login_url?: Maybe<Scalars['String']['output']>;
  readonly backoffice_support_email?: Maybe<Scalars['EMAIL']['output']>;
  readonly backoffice_support_url?: Maybe<Scalars['String']['output']>;
  readonly city?: Maybe<Scalars['String']['output']>;
  readonly company_modules?: Maybe<ReadonlyArray<Maybe<CompanyModule>>>;
  readonly company_number?: Maybe<Scalars['String']['output']>;
  readonly contact_name?: Maybe<Scalars['String']['output']>;
  readonly country?: Maybe<Country>;
  readonly created_at: Scalars['DateTimeUtc']['output'];
  readonly departments?: Maybe<ReadonlyArray<Maybe<Department>>>;
  readonly email: Scalars['EMAIL']['output'];
  readonly employees?: Maybe<Employee>;
  readonly entity_type?: Maybe<Scalars['String']['output']>;
  readonly exp_date?: Maybe<Scalars['DateTimeUtc']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly incorporate_date?: Maybe<Scalars['DateTimeUtc']['output']>;
  readonly license_number?: Maybe<Scalars['String']['output']>;
  readonly logo?: Maybe<Files>;
  readonly member_verify_url?: Maybe<Scalars['String']['output']>;
  readonly members?: Maybe<ReadonlyArray<Maybe<Members>>>;
  readonly members_count?: Maybe<Scalars['Int']['output']>;
  readonly name: Scalars['String']['output'];
  readonly phone?: Maybe<Scalars['String']['output']>;
  readonly positions?: Maybe<ReadonlyArray<Maybe<DepartmentPosition>>>;
  readonly projects?: Maybe<ReadonlyArray<Maybe<Project>>>;
  readonly projects_count?: Maybe<Scalars['Int']['output']>;
  readonly reg_address?: Maybe<Scalars['String']['output']>;
  readonly reg_number?: Maybe<Scalars['String']['output']>;
  readonly state?: Maybe<State>;
  readonly state_reason?: Maybe<StateReason>;
  readonly tax_id?: Maybe<Scalars['String']['output']>;
  readonly type_of_industry?: Maybe<TypeOfIndustry>;
  readonly updated_at: Scalars['DateTimeUtc']['output'];
  readonly url?: Maybe<Scalars['String']['output']>;
  readonly vv_token?: Maybe<Scalars['String']['output']>;
  readonly zip?: Maybe<Scalars['String']['output']>;
};

export type CompanyModule = {
  readonly __typename?: 'CompanyModule';
  readonly iban_providers?: Maybe<ReadonlyArray<Maybe<CompanyModuleIbanProvider>>>;
  readonly id: Scalars['ID']['output'];
  readonly is_active: Scalars['Boolean']['output'];
  readonly module?: Maybe<Module>;
  readonly payment_providers?: Maybe<ReadonlyArray<Maybe<CompanyModulePaymentProvider>>>;
};

export type CompanyModuleIbanProvider = {
  readonly __typename?: 'CompanyModuleIbanProvider';
  readonly company_module_id: Scalars['ID']['output'];
  readonly id: Scalars['ID']['output'];
  readonly is_active: Scalars['Boolean']['output'];
  readonly payment_provider_iban: PaymentProviderIban;
};

export type CompanyModuleIbanProviderPassword = {
  readonly __typename?: 'CompanyModuleIbanProviderPassword';
  readonly id: Scalars['ID']['output'];
  readonly password: Scalars['String']['output'];
};

export type CompanyModulePaymentProvider = {
  readonly __typename?: 'CompanyModulePaymentProvider';
  readonly company_module_id: Scalars['ID']['output'];
  readonly id: Scalars['ID']['output'];
  readonly is_active: Scalars['Boolean']['output'];
  readonly payment_provider: PaymentProvider;
};

export type CompanyModulePaymentProviderPassword = {
  readonly __typename?: 'CompanyModulePaymentProviderPassword';
  readonly id: Scalars['ID']['output'];
  readonly password: Scalars['String']['output'];
};

export type CompanyPaginator = {
  readonly __typename?: 'CompanyPaginator';
  readonly data: ReadonlyArray<Company>;
  readonly paginatorInfo: PaginatorInfo;
};

export type ConnectImageableInput = {
  readonly id: Scalars['ID']['input'];
  readonly type: Scalars['String']['input'];
};

export type Country = {
  readonly __typename?: 'Country';
  readonly id: Scalars['ID']['output'];
  readonly iso: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
};

export type CountryPaginator = {
  readonly __typename?: 'CountryPaginator';
  readonly data: ReadonlyArray<Country>;
  readonly paginatorInfo: PaginatorInfo;
};

export type Currencies = {
  readonly __typename?: 'Currencies';
  readonly code: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly minor_unit?: Maybe<Scalars['Int']['output']>;
  readonly name: Scalars['String']['output'];
};

export type CurrenciesPaginator = {
  readonly __typename?: 'CurrenciesPaginator';
  readonly data: ReadonlyArray<Currencies>;
  readonly paginatorInfo: PaginatorInfo;
};

export type DateRange = {
  readonly from: Scalars['Date']['input'];
  readonly to: Scalars['DateEnd']['input'];
};

export type DateTimeRange = {
  readonly from: Scalars['DateTimeUtc']['input'];
  readonly to: Scalars['DateTimeUtc']['input'];
};

export type Department = {
  readonly __typename?: 'Department';
  readonly company?: Maybe<Company>;
  readonly created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
  readonly positions?: Maybe<ReadonlyArray<Maybe<DepartmentPosition>>>;
};

export type DepartmentPaginator = {
  readonly __typename?: 'DepartmentPaginator';
  readonly data: ReadonlyArray<Department>;
  readonly paginatorInfo: PaginatorInfo;
};

export type DepartmentPosition = {
  readonly __typename?: 'DepartmentPosition';
  readonly company?: Maybe<Company>;
  readonly department?: Maybe<ReadonlyArray<Maybe<Department>>>;
  readonly id: Scalars['ID']['output'];
  readonly is_active?: Maybe<Scalars['Boolean']['output']>;
  readonly name: Scalars['String']['output'];
};

export type DepartmentPositionPaginator = {
  readonly __typename?: 'DepartmentPositionPaginator';
  readonly data: ReadonlyArray<DepartmentPosition>;
  readonly paginatorInfo: PaginatorInfo;
};

export type DocumentState = {
  readonly __typename?: 'DocumentState';
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
};

export const enum DocumentStateEnum {
  Approve = 'Approve',
  Declined = 'Declined',
  Pending = 'Pending',
  Processing = 'Processing',
}

export type DocumentType = {
  readonly __typename?: 'DocumentType';
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
};

export type EmailNotification = {
  readonly __typename?: 'EmailNotification';
  readonly clientable?: Maybe<Clientable>;
  readonly company?: Maybe<Company>;
  readonly created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  readonly group_role?: Maybe<GroupRole>;
  readonly group_type?: Maybe<GroupType>;
  readonly id: Scalars['ID']['output'];
  readonly recipient_type?: Maybe<RecipientType>;
  readonly templates?: Maybe<ReadonlyArray<Maybe<EmailTemplate>>>;
  readonly type?: Maybe<NotifyType>;
  readonly updated_at?: Maybe<Scalars['DateTimeUtc']['output']>;
};

export type EmailNotificationPaginator = {
  readonly __typename?: 'EmailNotificationPaginator';
  readonly data: ReadonlyArray<EmailNotification>;
  readonly paginatorInfo: PaginatorInfo;
};

export type EmailSmtp = {
  readonly __typename?: 'EmailSmtp';
  readonly company?: Maybe<Company>;
  readonly from_email?: Maybe<Scalars['String']['output']>;
  readonly from_name?: Maybe<Scalars['String']['output']>;
  readonly host_name: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly is_sending_mail?: Maybe<Scalars['Boolean']['output']>;
  readonly member?: Maybe<Members>;
  readonly name?: Maybe<Scalars['String']['output']>;
  readonly password: Scalars['String']['output'];
  readonly port: Scalars['Int']['output'];
  readonly replay_to?: Maybe<Scalars['String']['output']>;
  readonly security?: Maybe<Securities>;
  readonly username: Scalars['String']['output'];
};

export type EmailTemplate = {
  readonly __typename?: 'EmailTemplate';
  readonly company?: Maybe<Company>;
  readonly content: Scalars['String']['output'];
  readonly created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly layout?: Maybe<EmailTemplateLayout>;
  readonly name: Scalars['String']['output'];
  readonly service_type: ServiceType;
  readonly subject: Scalars['String']['output'];
  readonly type: ClientType;
  readonly updated_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  readonly use_layout?: Maybe<Scalars['Boolean']['output']>;
};

export type EmailTemplateLayout = {
  readonly __typename?: 'EmailTemplateLayout';
  readonly company_id: Scalars['Int']['output'];
  readonly created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  readonly footer: Scalars['String']['output'];
  readonly header: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly updated_at?: Maybe<Scalars['DateTimeUtc']['output']>;
};

export type EmailTemplateOnCompanyResponse = {
  readonly __typename?: 'EmailTemplateOnCompanyResponse';
  readonly data: ReadonlyArray<EmailTemplate>;
  readonly layout?: Maybe<EmailTemplateLayout>;
};

export const enum EmailVerification {
  NotVerified = 'NOT_VERIFIED',
  Requested = 'REQUESTED',
  Verified = 'VERIFIED',
}

export type Employee = {
  readonly __typename?: 'Employee';
  readonly employees_number: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
};

export type Fee = {
  readonly __typename?: 'Fee';
  readonly account?: Maybe<Account>;
  readonly client?: Maybe<Client>;
  readonly created_at: Scalars['DateTimeUtc']['output'];
  readonly fee: Scalars['Decimal']['output'];
  readonly fee_amount: Scalars['Decimal']['output'];
  readonly fee_pp: Scalars['Decimal']['output'];
  readonly member?: Maybe<Members>;
  readonly operation_type?: Maybe<OperationType>;
  readonly price_list_fee?: Maybe<PriceListFee>;
  readonly status?: Maybe<PaymentStatus>;
  readonly transfer_outgoing?: Maybe<TransferOutgoing>;
  readonly transfer_type: Scalars['String']['output'];
};

export type FeeItem = {
  readonly __typename?: 'FeeItem';
  readonly amount_from?: Maybe<Scalars['Int']['output']>;
  readonly amount_to?: Maybe<Scalars['Int']['output']>;
  readonly fee?: Maybe<Scalars['Int']['output']>;
  readonly mode: Scalars['String']['output'];
  readonly percent?: Maybe<Scalars['Int']['output']>;
};

export type FeeMode = {
  readonly __typename?: 'FeeMode';
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
};

export type FeePeriod = {
  readonly __typename?: 'FeePeriod';
  readonly id?: Maybe<Scalars['ID']['output']>;
  readonly name?: Maybe<Scalars['String']['output']>;
};

export type FeeType = {
  readonly __typename?: 'FeeType';
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
};

export const enum FieldTypes {
  CountryList = 'CountryList',
  Text = 'Text',
  TextArea = 'TextArea',
}

export const enum FileEntityTypeEnum {
  Applicant = 'APPLICANT',
  ApplicantCompany = 'APPLICANT_COMPANY',
  ApplicantIndividual = 'APPLICANT_INDIVIDUAL',
  Company = 'COMPANY',
  Document = 'DOCUMENT',
  File = 'FILE',
  Member = 'MEMBER',
  Project = 'PROJECT',
}

export type Files = {
  readonly __typename?: 'Files';
  readonly author_id: Scalars['Int']['output'];
  readonly created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  readonly entity_type: FileEntityTypeEnum;
  readonly file_name: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly link: Scalars['String']['output'];
  readonly mime_type: Scalars['String']['output'];
  readonly size: Scalars['Int']['output'];
  readonly storage_name: Scalars['String']['output'];
  readonly storage_path: Scalars['String']['output'];
  readonly updated_at?: Maybe<Scalars['DateTimeUtc']['output']>;
};

export type FilesPaginator = {
  readonly __typename?: 'FilesPaginator';
  readonly data: ReadonlyArray<Files>;
  readonly paginatorInfo: PaginatorInfo;
};

export type FilterConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<FilterConditions>>;
  readonly OR?: InputMaybe<ReadonlyArray<FilterConditions>>;
  readonly column?: InputMaybe<Scalars['String']['input']>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export type GroupRole = {
  readonly __typename?: 'GroupRole';
  readonly company?: Maybe<Company>;
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly group_type?: Maybe<GroupType>;
  readonly group_type_id?: Maybe<Scalars['ID']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly is_active?: Maybe<Scalars['Boolean']['output']>;
  readonly module?: Maybe<Module>;
  readonly module_id?: Maybe<Scalars['ID']['output']>;
  readonly name?: Maybe<Scalars['String']['output']>;
  readonly providers?: Maybe<ReadonlyArray<Maybe<GroupRoleProvider>>>;
  readonly role?: Maybe<Role>;
  readonly role_id?: Maybe<Scalars['ID']['output']>;
};

export type GroupRolePaginator = {
  readonly __typename?: 'GroupRolePaginator';
  readonly data: ReadonlyArray<GroupRole>;
  readonly paginatorInfo: PaginatorInfo;
};

export type GroupRoleProvider = {
  readonly __typename?: 'GroupRoleProvider';
  readonly commission_template?: Maybe<CommissionTemplate>;
  readonly group_role_id?: Maybe<Scalars['ID']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly is_default?: Maybe<Scalars['Boolean']['output']>;
  readonly payment_provider?: Maybe<PaymentProvider>;
};

export type GroupRoleView = {
  readonly __typename?: 'GroupRoleView';
  readonly commission_template_id?: Maybe<Scalars['ID']['output']>;
  readonly commission_template_name?: Maybe<Scalars['String']['output']>;
  readonly company?: Maybe<Company>;
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly group_type?: Maybe<GroupType>;
  readonly group_type_id?: Maybe<Scalars['ID']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly is_active?: Maybe<Scalars['Boolean']['output']>;
  readonly module?: Maybe<Module>;
  readonly module_id?: Maybe<Scalars['ID']['output']>;
  readonly name?: Maybe<Scalars['String']['output']>;
  readonly payment_provider_id?: Maybe<Scalars['ID']['output']>;
  readonly payment_provider_name?: Maybe<Scalars['String']['output']>;
  readonly role?: Maybe<Role>;
  readonly role_id?: Maybe<Scalars['ID']['output']>;
};

export type GroupRoleViewPaginator = {
  readonly __typename?: 'GroupRoleViewPaginator';
  readonly data: ReadonlyArray<GroupRoleView>;
  readonly paginatorInfo: PaginatorInfo;
};

export type GroupType = {
  readonly __typename?: 'GroupType';
  readonly id: Scalars['ID']['output'];
  readonly name: GroupsEntities;
};

export const enum GroupTypeMode {
  All = 'ALL',
  Clients = 'CLIENTS',
}

export type GroupTypePaginator = {
  readonly __typename?: 'GroupTypePaginator';
  readonly data: ReadonlyArray<GroupType>;
  readonly paginatorInfo: PaginatorInfo;
};

export type Groups = {
  readonly __typename?: 'Groups';
  /** @deprecated Field no longer supported */
  readonly groups?: Maybe<ReadonlyArray<Maybe<GroupRole>>>;
  readonly id: Scalars['ID']['output'];
  readonly name: GroupsEntities;
};

export const enum GroupsEntities {
  Company = 'Company',
  Individual = 'Individual',
  Member = 'Member',
}

export type ImageableMorphToTable = {
  readonly connect?: InputMaybe<ConnectImageableInput>;
  readonly delete?: InputMaybe<Scalars['Boolean']['input']>;
  readonly disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type InputAccount = {
  readonly account_name: Scalars['String']['input'];
  readonly account_number?: InputMaybe<Scalars['String']['input']>;
  readonly clientableAttach?: InputMaybe<PivotTable>;
  readonly commission_template_id: Scalars['ID']['input'];
  readonly company_id: Scalars['ID']['input'];
  readonly currency_id: Scalars['ID']['input'];
  readonly group_role_id: Scalars['ID']['input'];
  readonly group_type_id: Scalars['ID']['input'];
  readonly iban_provider_id?: InputMaybe<Scalars['ID']['input']>;
  readonly is_primary?: InputMaybe<Scalars['Boolean']['input']>;
  readonly max_limit_balance?: InputMaybe<Scalars['Decimal']['input']>;
  readonly min_limit_balance?: InputMaybe<Scalars['Decimal']['input']>;
  readonly owner_id: Scalars['ID']['input'];
  readonly payment_bank_id?: InputMaybe<Scalars['ID']['input']>;
  readonly payment_provider_id: Scalars['ID']['input'];
  readonly payment_system_id: Scalars['ID']['input'];
};

export type InputCommissionTemplate = {
  readonly business_activity?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly commission_template_limit_id?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly company_id?: InputMaybe<Scalars['ID']['input']>;
  readonly currency_id?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly description?: InputMaybe<Scalars['String']['input']>;
  readonly is_active?: InputMaybe<Scalars['Boolean']['input']>;
  readonly name: Scalars['String']['input'];
  readonly payment_provider_id?: InputMaybe<Scalars['ID']['input']>;
  readonly payment_system_id?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly region_id?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
};

export type InputCommissionTemplateLimit = {
  readonly amount: Scalars['Decimal']['input'];
  readonly commission_template_id: Scalars['ID']['input'];
  readonly commission_template_limit_action_type_id?: InputMaybe<Scalars['ID']['input']>;
  readonly commission_template_limit_period_id?: InputMaybe<Scalars['ID']['input']>;
  readonly commission_template_limit_transfer_direction_id: Scalars['ID']['input'];
  readonly commission_template_limit_type_id: Scalars['ID']['input'];
  readonly currency_id?: InputMaybe<Scalars['ID']['input']>;
  readonly period_count?: InputMaybe<Scalars['ID']['input']>;
  readonly region_id?: InputMaybe<Scalars['ID']['input']>;
};

export type InputCompanyModuleIbanProvider = {
  readonly company_module_id?: InputMaybe<Scalars['ID']['input']>;
  readonly is_active?: InputMaybe<Scalars['Boolean']['input']>;
  readonly payment_provider_iban_id?: InputMaybe<Scalars['ID']['input']>;
};

export type InputCompanyModulePaymentProvider = {
  readonly company_module_id?: InputMaybe<Scalars['ID']['input']>;
  readonly is_active?: InputMaybe<Scalars['Boolean']['input']>;
  readonly payment_provider_id?: InputMaybe<Scalars['ID']['input']>;
};

export type InputGroupRoleProvider = {
  readonly commission_template_id: Scalars['ID']['input'];
  readonly is_default?: InputMaybe<Scalars['Boolean']['input']>;
  readonly payment_provider_id: Scalars['ID']['input'];
};

export type InputMemberAccessLimitation = {
  readonly company_id: Scalars['ID']['input'];
  readonly groupRoles?: InputMaybe<PivotTable>;
  readonly group_type_id?: InputMaybe<Scalars['ID']['input']>;
  readonly member_id: Scalars['ID']['input'];
  readonly module_id: Scalars['ID']['input'];
  readonly payment_provider_id?: InputMaybe<Scalars['ID']['input']>;
  readonly project_id?: InputMaybe<Scalars['ID']['input']>;
  readonly see_own_applicants?: InputMaybe<Scalars['Boolean']['input']>;
};

export type InputPaymentBank = {
  readonly address: Scalars['String']['input'];
  readonly bank_code?: InputMaybe<Scalars['String']['input']>;
  readonly country_id: Scalars['ID']['input'];
  readonly is_active?: InputMaybe<Scalars['Boolean']['input']>;
  readonly name: Scalars['String']['input'];
  readonly payment_provider_id: Scalars['ID']['input'];
  readonly payment_system_code?: InputMaybe<Scalars['String']['input']>;
  readonly payment_system_id: Scalars['ID']['input'];
};

export type InputPaymentProvider = {
  readonly company_id: Scalars['ID']['input'];
  readonly description?: InputMaybe<Scalars['String']['input']>;
  readonly is_active?: InputMaybe<Scalars['Boolean']['input']>;
  readonly logo_id?: InputMaybe<Scalars['ID']['input']>;
  readonly name: Scalars['String']['input'];
  readonly payment_systems?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
};

export type InputPaymentProviderIban = {
  readonly company_id: Scalars['ID']['input'];
  readonly currency_id: Scalars['ID']['input'];
  readonly is_active: Scalars['Boolean']['input'];
  readonly name: Scalars['String']['input'];
};

export type InputPaymentSystem = {
  readonly banks?: InputMaybe<PivotTable>;
  readonly currencies?: InputMaybe<PivotTable>;
  readonly description?: InputMaybe<Scalars['String']['input']>;
  readonly is_active?: InputMaybe<Scalars['Boolean']['input']>;
  readonly logo_id?: InputMaybe<Scalars['ID']['input']>;
  readonly name: Scalars['String']['input'];
  readonly operations?: InputMaybe<PivotTable>;
  readonly payment_provider_id?: InputMaybe<Scalars['ID']['input']>;
  readonly regions?: InputMaybe<PivotTable>;
};

export type InputProject = {
  readonly additional_fields_basic?: InputMaybe<ReadonlyArray<InputMaybe<AdditionalFieldInput>>>;
  readonly additional_fields_settings?: InputMaybe<ReadonlyArray<InputMaybe<AdditionalFieldInput>>>;
  readonly avatar_id?: InputMaybe<Scalars['ID']['input']>;
  readonly client_url?: InputMaybe<Scalars['String']['input']>;
  readonly company_id: Scalars['ID']['input'];
  readonly description?: InputMaybe<Scalars['String']['input']>;
  readonly forgot_password_url?: InputMaybe<Scalars['String']['input']>;
  readonly login_url?: InputMaybe<Scalars['String']['input']>;
  readonly module_id: Scalars['ID']['input'];
  readonly name: Scalars['String']['input'];
  readonly project_settings?: InputMaybe<ReadonlyArray<InputMaybe<InputProjectSettings>>>;
  readonly sms_sender_name?: InputMaybe<Scalars['String']['input']>;
  readonly state_id?: InputMaybe<Scalars['ID']['input']>;
  readonly support_email?: InputMaybe<Scalars['String']['input']>;
  readonly url?: InputMaybe<Scalars['String']['input']>;
};

export type InputProjectApiSetting = {
  readonly api_key: Scalars['String']['input'];
  readonly is_active?: InputMaybe<Scalars['Boolean']['input']>;
  readonly password: Scalars['String']['input'];
  readonly provider_id: Scalars['ID']['input'];
  readonly provider_type: ProviderTypeEnum;
  readonly wallet: Scalars['String']['input'];
};

export type InputProjectSettings = {
  readonly applicant_type: ApplicantType;
  readonly commission_template_id?: InputMaybe<Scalars['ID']['input']>;
  readonly group_role_id?: InputMaybe<Scalars['ID']['input']>;
  readonly group_type_id?: InputMaybe<Scalars['ID']['input']>;
  readonly iban_provider_id?: InputMaybe<Scalars['ID']['input']>;
  readonly payment_provider_id?: InputMaybe<Scalars['ID']['input']>;
};

export type InputRegion = {
  readonly company_id: Scalars['ID']['input'];
  readonly countries?: InputMaybe<PivotTable>;
  readonly name: Scalars['String']['input'];
};

export type KycTimeline = {
  readonly __typename?: 'KycTimeline';
  readonly action: Scalars['String']['output'];
  readonly action_new_value?: Maybe<Scalars['JSON']['output']>;
  readonly action_old_value?: Maybe<Scalars['JSON']['output']>;
  readonly action_type: KycTimelineActionType;
  readonly applicant?: Maybe<Client>;
  readonly applicant_id: Scalars['ID']['output'];
  readonly applicant_type: ApplicantType;
  readonly browser: Scalars['String']['output'];
  readonly company?: Maybe<Company>;
  readonly created_at: Scalars['DateTimeUtc']['output'];
  readonly creator?: Maybe<Members>;
  readonly document?: Maybe<ApplicantDocument>;
  readonly id: Scalars['ID']['output'];
  readonly ip: Scalars['String']['output'];
  readonly os: Scalars['String']['output'];
  readonly tag: Scalars['String']['output'];
};

export const enum KycTimelineActionType {
  DocumentState = 'DOCUMENT_STATE',
  DocumentUpload = 'DOCUMENT_UPLOAD',
  Email = 'EMAIL',
  Profile = 'PROFILE',
  Verification = 'VERIFICATION',
}

export type KycTimelines = {
  readonly __typename?: 'KycTimelines';
  readonly data?: Maybe<ReadonlyArray<KycTimeline>>;
  readonly paginatorInfo?: Maybe<PaginatorInfo>;
};

export type Languages = {
  readonly __typename?: 'Languages';
  readonly id: Scalars['ID']['output'];
  readonly iso: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
};

export type LanguagesPaginator = {
  readonly __typename?: 'LanguagesPaginator';
  readonly data: ReadonlyArray<Languages>;
  readonly paginatorInfo: PaginatorInfo;
};

export type MemberAccessLimitation = {
  readonly __typename?: 'MemberAccessLimitation';
  readonly company?: Maybe<Company>;
  readonly group?: Maybe<GroupType>;
  readonly group_roles?: Maybe<ReadonlyArray<Maybe<GroupRole>>>;
  readonly id: Scalars['ID']['output'];
  readonly member?: Maybe<Members>;
  readonly module?: Maybe<Module>;
  readonly project?: Maybe<Project>;
  readonly provider?: Maybe<PaymentProvider>;
  readonly see_own_applicants?: Maybe<Scalars['Boolean']['output']>;
};

export type MemberAccessLimitationPaginator = {
  readonly __typename?: 'MemberAccessLimitationPaginator';
  readonly data: ReadonlyArray<MemberAccessLimitation>;
  readonly paginatorInfo: PaginatorInfo;
};

export type MemberProfile = {
  readonly __typename?: 'MemberProfile';
  readonly access_groups?: Maybe<ReadonlyArray<Maybe<MemberAccessLimitation>>>;
  readonly additional_fields?: Maybe<Scalars['JSON']['output']>;
  readonly additional_info_fields?: Maybe<Scalars['JSON']['output']>;
  readonly backup_codes?: Maybe<Scalars['JSON']['output']>;
  readonly company: Company;
  readonly country?: Maybe<Country>;
  readonly department?: Maybe<Department>;
  readonly email?: Maybe<Scalars['EMAIL']['output']>;
  readonly first_name?: Maybe<Scalars['String']['output']>;
  readonly fullname?: Maybe<Scalars['String']['output']>;
  readonly google2fa_secret?: Maybe<Scalars['String']['output']>;
  readonly group?: Maybe<GroupRole>;
  readonly id: Scalars['ID']['output'];
  readonly ip_addresses?: Maybe<ReadonlyArray<Maybe<ClientIpAddress>>>;
  readonly is_active?: Maybe<Scalars['Boolean']['output']>;
  readonly is_show_owner_applicants?: Maybe<Scalars['Boolean']['output']>;
  readonly is_sign_transaction?: Maybe<Scalars['Boolean']['output']>;
  readonly language?: Maybe<Languages>;
  readonly last_login_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  readonly last_name?: Maybe<Scalars['String']['output']>;
  readonly position?: Maybe<DepartmentPosition>;
  readonly security_pin?: Maybe<Scalars['String']['output']>;
  readonly sex?: Maybe<Sex>;
  readonly two_factor_auth_setting_id?: Maybe<Scalars['ID']['output']>;
  readonly two_factor_auth_settings?: Maybe<TwoFactorAuthSettings>;
};

export type MemberStatus = {
  readonly __typename?: 'MemberStatus';
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
};

export type Members = {
  readonly __typename?: 'Members';
  readonly access_groups?: Maybe<ReadonlyArray<Maybe<MemberAccessLimitation>>>;
  readonly additional_fields?: Maybe<Scalars['JSON']['output']>;
  readonly additional_info_fields?: Maybe<Scalars['JSON']['output']>;
  readonly backup_codes?: Maybe<Scalars['JSON']['output']>;
  readonly company?: Maybe<Company>;
  readonly country?: Maybe<Country>;
  readonly created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  readonly department?: Maybe<Department>;
  readonly email?: Maybe<Scalars['EMAIL']['output']>;
  readonly email_verification?: Maybe<EmailVerification>;
  readonly first_name?: Maybe<Scalars['String']['output']>;
  readonly fullname?: Maybe<Scalars['String']['output']>;
  readonly google2fa_secret?: Maybe<Scalars['String']['output']>;
  readonly group?: Maybe<GroupRole>;
  readonly id: Scalars['ID']['output'];
  readonly ip_addresses?: Maybe<ReadonlyArray<Maybe<ClientIpAddress>>>;
  readonly is_show_owner_applicants?: Maybe<Scalars['Boolean']['output']>;
  readonly is_sign_transaction?: Maybe<Scalars['Boolean']['output']>;
  readonly job_title?: Maybe<Scalars['String']['output']>;
  readonly language?: Maybe<Languages>;
  readonly last_login_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  readonly last_name?: Maybe<Scalars['String']['output']>;
  readonly member_status?: Maybe<MemberStatus>;
  readonly photo?: Maybe<Files>;
  readonly position?: Maybe<DepartmentPosition>;
  readonly security_pin?: Maybe<Scalars['String']['output']>;
  readonly sex?: Maybe<Sex>;
  readonly two_factor_auth_setting_id?: Maybe<Scalars['ID']['output']>;
  readonly two_factor_auth_settings?: Maybe<TwoFactorAuthSettings>;
};

export type MembersPaginator = {
  readonly __typename?: 'MembersPaginator';
  readonly data: ReadonlyArray<Members>;
  readonly paginatorInfo: PaginatorInfo;
};

export type Module = {
  readonly __typename?: 'Module';
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
};

export type Mutation = {
  readonly __typename?: 'Mutation';
  readonly addCompanyModule?: Maybe<Company>;
  readonly attachApplicantCompanyLabel?: Maybe<ApplicantCompany>;
  readonly attachApplicantDocumentTag?: Maybe<ApplicantDocument>;
  readonly attachApplicantIndividualLabel?: Maybe<ApplicantIndividual>;
  readonly cancelTransferOutgoingFee?: Maybe<TransferOutgoing>;
  readonly createAccount: ReadonlyArray<Account>;
  readonly createAccountLimit?: Maybe<AccountLimit>;
  readonly createApplicant?: Maybe<ApplicantSettingsProfile>;
  readonly createApplicantBankingAccess?: Maybe<ApplicantBankingAccess>;
  readonly createApplicantCompany?: Maybe<ApplicantCompany>;
  readonly createApplicantCompanyBusinessType?: Maybe<ApplicantCompanyBusinessType>;
  readonly createApplicantCompanyLabel?: Maybe<ApplicantCompanyLabel>;
  readonly createApplicantCompanyModule?: Maybe<ApplicantCompany>;
  readonly createApplicantCompanyNote?: Maybe<ApplicantCompanyNotes>;
  readonly createApplicantCompanyRiskLevelHistory?: Maybe<ApplicantCompanyRiskLevelHistory>;
  readonly createApplicantDocument?: Maybe<ApplicantDocument>;
  readonly createApplicantDocumentInternalNote?: Maybe<ApplicantDocumentInternalNote>;
  readonly createApplicantDocumentRejectDetail?: Maybe<ApplicantDocumentRejectDetail>;
  readonly createApplicantDocumentTag?: Maybe<ApplicantDocumentTag>;
  readonly createApplicantDocumentTagCategory?: Maybe<ApplicantDocumentTagCategory>;
  readonly createApplicantIndividual?: Maybe<ApplicantIndividual>;
  readonly createApplicantIndividualCompany?: Maybe<ApplicantIndividualCompany>;
  readonly createApplicantIndividualCompanyPosition?: Maybe<ApplicantIndividualCompanyPosition>;
  readonly createApplicantIndividualCompanyRelation?: Maybe<ApplicantIndividualCompanyRelation>;
  readonly createApplicantIndividualLabel?: Maybe<ApplicantIndividualLabel>;
  readonly createApplicantIndividualModule?: Maybe<ApplicantIndividual>;
  readonly createApplicantIndividualNote?: Maybe<ApplicantIndividualNotes>;
  readonly createApplicantModule?: Maybe<ApplicantModules>;
  readonly createApplicantRiskLevelHistory?: Maybe<ApplicantRiskLevelHistory>;
  readonly createApplicantStateReason?: Maybe<ApplicantStateReason>;
  readonly createBankCorrespondent?: Maybe<BankCorrespondent>;
  readonly createBusinessActivity?: Maybe<BusinessActivity>;
  readonly createCommissionPriceList?: Maybe<CommissionPriceList>;
  readonly createCommissionTemplate?: Maybe<CommissionTemplate>;
  readonly createCommissionTemplateLimit?: Maybe<CommissionTemplateLimit>;
  readonly createCompany?: Maybe<Company>;
  readonly createCompanyModuleIbanProvider?: Maybe<CompanyModuleIbanProvider>;
  readonly createCompanyModulePaymentProvider?: Maybe<CompanyModulePaymentProvider>;
  readonly createDepartment?: Maybe<Department>;
  readonly createDepartmentPosition?: Maybe<DepartmentPosition>;
  readonly createDocumentType?: Maybe<DocumentType>;
  readonly createEmailNotification?: Maybe<EmailNotification>;
  readonly createEmailSmtp?: Maybe<EmailSmtp>;
  readonly createEmailTemplate?: Maybe<EmailTemplateOnCompanyResponse>;
  readonly createEmailTemplateLayout?: Maybe<EmailTemplateLayout>;
  readonly createGroupSettings?: Maybe<GroupRole>;
  readonly createMember?: Maybe<Members>;
  readonly createMemberAccessLimitation?: Maybe<MemberAccessLimitation>;
  readonly createModule?: Maybe<Module>;
  readonly createPayment?: Maybe<Payments>;
  readonly createPaymentBank?: Maybe<PaymentBank>;
  readonly createPaymentProvider?: Maybe<PaymentProvider>;
  readonly createPaymentProviderIban?: Maybe<PaymentProviderIban>;
  readonly createPaymentSystem?: Maybe<PaymentSystem>;
  readonly createPriceListFees?: Maybe<PriceListFee>;
  readonly createProject?: Maybe<Project>;
  readonly createRegion?: Maybe<Region>;
  readonly createRole?: Maybe<Role>;
  readonly createTicket?: Maybe<Ticket>;
  readonly createTicketComment?: Maybe<TicketComments>;
  readonly createTransferOutgoing?: Maybe<TransferOutgoing>;
  readonly createTransferOutgoingFee?: Maybe<TransferOutgoing>;
  readonly deleteAccount?: Maybe<Account>;
  readonly deleteAccountLimit?: Maybe<AccountLimit>;
  readonly deleteApplicantBankingAccess?: Maybe<ApplicantBankingAccess>;
  readonly deleteApplicantBankingMember?: Maybe<ApplicantBankingAccess>;
  readonly deleteApplicantCompany?: Maybe<ApplicantCompany>;
  readonly deleteApplicantCompanyLabel?: Maybe<ApplicantCompanyLabel>;
  readonly deleteApplicantCompanyModule?: Maybe<ApplicantCompany>;
  readonly deleteApplicantCompanyNote?: Maybe<ApplicantCompanyNotes>;
  readonly deleteApplicantCompanyRiskLevelHistory?: Maybe<ApplicantCompanyRiskLevelHistory>;
  readonly deleteApplicantDevice?: Maybe<ApplicantDevice>;
  readonly deleteApplicantDocument?: Maybe<ApplicantDocument>;
  readonly deleteApplicantDocumentInternalNote?: Maybe<ApplicantDocumentInternalNote>;
  readonly deleteApplicantDocumentRejectDetail?: Maybe<ApplicantDocumentRejectDetail>;
  readonly deleteApplicantDocumentTag?: Maybe<ApplicantDocumentTag>;
  readonly deleteApplicantDocumentTagCategory?: Maybe<ApplicantDocumentTagCategory>;
  readonly deleteApplicantIndividual?: Maybe<ApplicantIndividual>;
  readonly deleteApplicantIndividualCompany?: Maybe<ApplicantIndividualCompany>;
  readonly deleteApplicantIndividualCompanyPosition?: Maybe<ApplicantIndividualCompanyPosition>;
  readonly deleteApplicantIndividualCompanyRelation?: Maybe<ApplicantIndividualCompanyRelation>;
  readonly deleteApplicantIndividualLabel?: Maybe<ApplicantIndividualLabel>;
  readonly deleteApplicantIndividualModule?: Maybe<ApplicantIndividual>;
  readonly deleteApplicantIndividualNote?: Maybe<ApplicantIndividualNotes>;
  readonly deleteApplicantRiskLevelHistory?: Maybe<ApplicantRiskLevelHistory>;
  readonly deleteApplicantStateReason?: Maybe<ApplicantStateReason>;
  readonly deleteBankCorrespondent?: Maybe<BankCorrespondent>;
  readonly deleteCommissionPriceList?: Maybe<CommissionPriceList>;
  readonly deleteCommissionTemplate?: Maybe<CommissionTemplate>;
  readonly deleteCommissionTemplateLimit?: Maybe<CommissionTemplateLimit>;
  readonly deleteCompany?: Maybe<Company>;
  readonly deleteCompanyModule?: Maybe<Company>;
  readonly deleteCompanyModuleIbanProvider?: Maybe<CompanyModuleIbanProvider>;
  readonly deleteCompanyModulePaymentProvider?: Maybe<CompanyModulePaymentProvider>;
  readonly deleteDepartment?: Maybe<Department>;
  readonly deleteDepartmentPosition?: Maybe<DepartmentPosition>;
  readonly deleteDocumentType?: Maybe<DocumentType>;
  readonly deleteEmailNotification?: Maybe<EmailNotification>;
  readonly deleteEmailSmtp: ReadonlyArray<EmailSmtp>;
  readonly deleteEmailTemplate?: Maybe<EmailTemplate>;
  readonly deleteEmailTemplateLayout?: Maybe<EmailTemplateLayout>;
  readonly deleteFile?: Maybe<Files>;
  readonly deleteGroup?: Maybe<GroupRole>;
  readonly deleteMember?: Maybe<Members>;
  readonly deleteMemberAccessLimitation?: Maybe<MemberAccessLimitation>;
  readonly deletePayment?: Maybe<Payments>;
  readonly deletePaymentBank?: Maybe<PaymentBank>;
  readonly deletePaymentProvider?: Maybe<PaymentProvider>;
  readonly deletePaymentProviderIban?: Maybe<PaymentProviderIban>;
  readonly deletePaymentSystem?: Maybe<PaymentSystem>;
  readonly deletePriceListFees?: Maybe<PriceListFee>;
  readonly deleteProject?: Maybe<Project>;
  readonly deleteRegion?: Maybe<Region>;
  readonly deleteRole?: Maybe<Role>;
  readonly deleteTagApplicantDocumentRejectDetail?: Maybe<ApplicantDocumentRejectDetail>;
  readonly detachApplicantCompanyLabel?: Maybe<ApplicantCompany>;
  readonly detachApplicantDocumentTag?: Maybe<ApplicantDocument>;
  readonly detachApplicantIndividualLabel?: Maybe<ApplicantIndividual>;
  readonly generateIban: AccountGenerateIbanResponse;
  readonly grantApplicantBankingAccess?: Maybe<ApplicantBankingAccess>;
  readonly resetMemberPassword?: Maybe<Members>;
  readonly sendConfirmChangeEmail?: Maybe<StatusType>;
  readonly sendEmail?: Maybe<StatusType>;
  readonly sendEmailRegistation?: Maybe<ApplicantIndividual>;
  readonly sendEmailResetPassword?: Maybe<ApplicantIndividual>;
  readonly sendEmailVerification?: Maybe<ApplicantIndividual>;
  readonly sendEmailVerificationApplicantCompany?: Maybe<ApplicantCompany>;
  readonly sendEmailWithTemplate?: Maybe<StatusType>;
  readonly sendMemberEmailVerification?: Maybe<Members>;
  readonly sendPhoneVerification?: Maybe<ApplicantIndividual>;
  readonly sendPhoneVerificationApplicantCompany?: Maybe<ApplicantCompany>;
  readonly setApplicantIndividualPassword?: Maybe<ApplicantIndividual>;
  readonly setApplicantSecurityPin?: Maybe<ApplicantIndividual>;
  readonly setApplicantSettingsPassword?: Maybe<TwoFactorAuthToken>;
  readonly setApplicantSettingsPasswordWithOtp?: Maybe<ApplicantSettingsProfile>;
  readonly setMemberActive?: Maybe<Members>;
  readonly setMemberGroup?: Maybe<GroupRole>;
  readonly setMemberInactive?: Maybe<Members>;
  readonly setMemberPassword?: Maybe<Members>;
  readonly setMemberSecurityPin?: Maybe<Members>;
  readonly setMemberSuspended?: Maybe<Members>;
  readonly updateAccount?: Maybe<Account>;
  readonly updateAccountLimit?: Maybe<AccountLimit>;
  readonly updateActiveSession: ActiveSessionMutatorResponse;
  readonly updateApplicantAccount: ApplicantAccount;
  readonly updateApplicantBankingAccess?: Maybe<ApplicantBankingAccess>;
  readonly updateApplicantCompany?: Maybe<ApplicantCompany>;
  readonly updateApplicantCompanyBusinessType?: Maybe<ApplicantCompanyBusinessType>;
  readonly updateApplicantCompanyLabel?: Maybe<ApplicantCompanyLabel>;
  readonly updateApplicantCompanyModule?: Maybe<ApplicantCompany>;
  readonly updateApplicantCompanyVerificationStatus?: Maybe<ApplicantCompany>;
  readonly updateApplicantDevice: TwoFactorAuthToken;
  readonly updateApplicantDeviceWithOtp: ApplicantDevice;
  readonly updateApplicantDocument?: Maybe<ApplicantDocument>;
  readonly updateApplicantDocumentTag?: Maybe<ApplicantDocumentTag>;
  readonly updateApplicantDocumentTagCategory?: Maybe<ApplicantDocumentTagCategory>;
  readonly updateApplicantIndividual?: Maybe<ApplicantIndividual>;
  readonly updateApplicantIndividualCompany?: Maybe<ApplicantIndividualCompany>;
  readonly updateApplicantIndividualCompanyPosition?: Maybe<ApplicantIndividualCompanyPosition>;
  readonly updateApplicantIndividualCompanyRelation?: Maybe<ApplicantIndividualCompanyRelation>;
  readonly updateApplicantIndividualLabel?: Maybe<ApplicantIndividualLabel>;
  readonly updateApplicantIndividualModule?: Maybe<ApplicantIndividual>;
  readonly updateApplicantIndividualVerificationStatus?: Maybe<ApplicantIndividual>;
  readonly updateApplicantProfile?: Maybe<ApplicantProfile>;
  readonly updateApplicantStateReason?: Maybe<ApplicantStateReason>;
  readonly updateBankCorrespondent?: Maybe<BankCorrespondent>;
  readonly updateBusinessActivity?: Maybe<BusinessActivity>;
  readonly updateCommissionPriceList?: Maybe<CommissionPriceList>;
  readonly updateCommissionTemplate?: Maybe<CommissionTemplate>;
  readonly updateCommissionTemplateLimit?: Maybe<CommissionTemplateLimit>;
  readonly updateCompany?: Maybe<Company>;
  readonly updateCompanyModule?: Maybe<CompanyModule>;
  readonly updateCompanyModuleIbanProvider?: Maybe<CompanyModuleIbanProvider>;
  readonly updateCompanyModulePaymentProvider?: Maybe<CompanyModulePaymentProvider>;
  readonly updateDepartment?: Maybe<Department>;
  readonly updateEmailNotification?: Maybe<EmailNotification>;
  readonly updateEmailSmtp?: Maybe<EmailSmtp>;
  readonly updateEmailTemplate?: Maybe<EmailTemplateOnCompanyResponse>;
  readonly updateEmailTemplateLayout?: Maybe<EmailTemplateLayout>;
  readonly updateGroupSettings?: Maybe<GroupRole>;
  readonly updateMember?: Maybe<Members>;
  readonly updateMemberAccessLimitation?: Maybe<MemberAccessLimitation>;
  readonly updateMemberProfile?: Maybe<MemberProfile>;
  readonly updatePayment?: Maybe<Payments>;
  readonly updatePaymentBank?: Maybe<PaymentBank>;
  readonly updatePaymentProvider?: Maybe<PaymentProvider>;
  readonly updatePaymentProviderIban?: Maybe<PaymentProviderIban>;
  readonly updatePaymentSystem?: Maybe<PaymentSystem>;
  readonly updatePriceListFees?: Maybe<PriceListFee>;
  readonly updateProject?: Maybe<Project>;
  readonly updateProjectApiSetting: ReadonlyArray<ProjectApiSetting>;
  readonly updateRegion?: Maybe<Region>;
  readonly updateRole?: Maybe<Role>;
  readonly updateTicket?: Maybe<Ticket>;
  readonly updateTransferOutgoing?: Maybe<TransferOutgoing>;
  readonly updateTransferOutgoingFee?: Maybe<TransferOutgoing>;
};

export type MutationAddCompanyModuleArgs = {
  company_id: Scalars['ID']['input'];
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  module_id?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
};

export type MutationAttachApplicantCompanyLabelArgs = {
  applicant_company_id: Scalars['ID']['input'];
  applicant_company_label_id?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
};

export type MutationAttachApplicantDocumentTagArgs = {
  applicant_document_id: Scalars['ID']['input'];
  applicant_document_tag_id: ReadonlyArray<InputMaybe<Scalars['ID']['input']>>;
};

export type MutationAttachApplicantIndividualLabelArgs = {
  applicant_individual_id: Scalars['ID']['input'];
  applicant_individual_label_id?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
};

export type MutationCancelTransferOutgoingFeeArgs = {
  id: Scalars['ID']['input'];
};

export type MutationCreateAccountArgs = {
  input: InputAccount;
};

export type MutationCreateAccountLimitArgs = {
  account_id: Scalars['ID']['input'];
  amount: Scalars['Decimal']['input'];
  commission_template_limit_action_type_id: Scalars['ID']['input'];
  commission_template_limit_period_id: Scalars['ID']['input'];
  commission_template_limit_transfer_direction_id: Scalars['ID']['input'];
  commission_template_limit_type_id: Scalars['ID']['input'];
  currency_id?: InputMaybe<Scalars['ID']['input']>;
  period_count?: InputMaybe<Scalars['ID']['input']>;
};

export type MutationCreateApplicantArgs = {
  client_type: ApplicantClientType;
  company_name?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['EMAIL']['input'];
  first_name: Scalars['String']['input'];
  last_name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  password_confirmation: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  url?: InputMaybe<Scalars['String']['input']>;
};

export type MutationCreateApplicantBankingAccessArgs = {
  applicant_company_id: Scalars['ID']['input'];
  applicant_individual_id: Scalars['ID']['input'];
  contact_administrator: Scalars['Boolean']['input'];
  daily_limit: Scalars['Decimal']['input'];
  monthly_limit: Scalars['Decimal']['input'];
  operation_limit: Scalars['Decimal']['input'];
  role_id: Scalars['ID']['input'];
  used_limit?: InputMaybe<Scalars['Decimal']['input']>;
};

export type MutationCreateApplicantCompanyArgs = {
  company_id: Scalars['ID']['input'];
  email: Scalars['EMAIL']['input'];
  group_id?: InputMaybe<Scalars['ID']['input']>;
  module_ids?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  name: Scalars['String']['input'];
  owner_id?: InputMaybe<Scalars['ID']['input']>;
  owner_position_id?: InputMaybe<Scalars['ID']['input']>;
  owner_relation_id?: InputMaybe<Scalars['ID']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  photo_id?: InputMaybe<Scalars['ID']['input']>;
  project_id: Scalars['ID']['input'];
};

export type MutationCreateApplicantCompanyBusinessTypeArgs = {
  name: Scalars['String']['input'];
};

export type MutationCreateApplicantCompanyLabelArgs = {
  hex_color_code: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type MutationCreateApplicantCompanyModuleArgs = {
  applicant_company_id: Scalars['ID']['input'];
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  module_id?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
};

export type MutationCreateApplicantCompanyNoteArgs = {
  applicant_company_id: Scalars['ID']['input'];
  member_id: Scalars['ID']['input'];
  note: Scalars['String']['input'];
};

export type MutationCreateApplicantCompanyRiskLevelHistoryArgs = {
  applicant_company_id: Scalars['ID']['input'];
  comment: Scalars['String']['input'];
  risk_level_id: Scalars['ID']['input'];
};

export type MutationCreateApplicantDocumentArgs = {
  added_from?: InputMaybe<Scalars['String']['input']>;
  applicant_id: Scalars['ID']['input'];
  applicant_type: ApplicantType;
  company_id: Scalars['ID']['input'];
  country_id?: InputMaybe<Scalars['ID']['input']>;
  document_state_id?: InputMaybe<Scalars['ID']['input']>;
  document_type_id: Scalars['ID']['input'];
  file_id: Scalars['ID']['input'];
  info?: InputMaybe<Scalars['String']['input']>;
};

export type MutationCreateApplicantDocumentInternalNoteArgs = {
  applicant_document_id: Scalars['ID']['input'];
  note: Scalars['String']['input'];
};

export type MutationCreateApplicantDocumentRejectDetailArgs = {
  applicant_document_id: Scalars['ID']['input'];
  applicant_document_tag_id: ReadonlyArray<Scalars['ID']['input']>;
};

export type MutationCreateApplicantDocumentTagArgs = {
  category_id: Scalars['ID']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type MutationCreateApplicantDocumentTagCategoryArgs = {
  name: Scalars['String']['input'];
};

export type MutationCreateApplicantIndividualArgs = {
  company_id: Scalars['ID']['input'];
  email: Scalars['EMAIL']['input'];
  first_name: Scalars['String']['input'];
  group_id?: InputMaybe<Scalars['ID']['input']>;
  last_name: Scalars['String']['input'];
  module_ids?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  phone: Scalars['String']['input'];
  photo_id?: InputMaybe<Scalars['ID']['input']>;
  project_id?: InputMaybe<Scalars['ID']['input']>;
};

export type MutationCreateApplicantIndividualCompanyArgs = {
  applicant_company_id: Scalars['ID']['input'];
  applicant_id: Scalars['ID']['input'];
  applicant_individual_company_position_id: Scalars['ID']['input'];
  applicant_individual_company_relation_id: Scalars['ID']['input'];
  percentage_owned?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationCreateApplicantIndividualCompanyPositionArgs = {
  company_id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

export type MutationCreateApplicantIndividualCompanyRelationArgs = {
  company_id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

export type MutationCreateApplicantIndividualLabelArgs = {
  hex_color_code: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type MutationCreateApplicantIndividualModuleArgs = {
  applicant_individual_id: Scalars['ID']['input'];
  module_id?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
};

export type MutationCreateApplicantIndividualNoteArgs = {
  applicant_individual_id: Scalars['ID']['input'];
  member_id: Scalars['ID']['input'];
  note: Scalars['String']['input'];
};

export type MutationCreateApplicantModuleArgs = {
  name: Scalars['String']['input'];
};

export type MutationCreateApplicantRiskLevelHistoryArgs = {
  applicant_id: Scalars['ID']['input'];
  comment: Scalars['String']['input'];
  risk_level_id: Scalars['ID']['input'];
};

export type MutationCreateApplicantStateReasonArgs = {
  name: Scalars['String']['input'];
};

export type MutationCreateBankCorrespondentArgs = {
  address: Scalars['String']['input'];
  bank_account: Scalars['String']['input'];
  bank_code: Scalars['String']['input'];
  currency_id: ReadonlyArray<InputMaybe<Scalars['ID']['input']>>;
  is_active: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  payment_system_id: Scalars['ID']['input'];
  region_id: ReadonlyArray<InputMaybe<Scalars['ID']['input']>>;
};

export type MutationCreateBusinessActivityArgs = {
  name: Scalars['String']['input'];
};

export type MutationCreateCommissionPriceListArgs = {
  commission_template_id: Scalars['ID']['input'];
  company_id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  payment_system_id: Scalars['ID']['input'];
  provider_id: Scalars['ID']['input'];
  region_id: Scalars['ID']['input'];
};

export type MutationCreateCommissionTemplateArgs = {
  input: InputCommissionTemplate;
};

export type MutationCreateCommissionTemplateLimitArgs = {
  input: InputCommissionTemplateLimit;
};

export type MutationCreateCompanyArgs = {
  country_id: Scalars['ID']['input'];
  email: Scalars['EMAIL']['input'];
  name: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  url: Scalars['String']['input'];
};

export type MutationCreateCompanyModuleIbanProviderArgs = {
  input: InputCompanyModuleIbanProvider;
};

export type MutationCreateCompanyModulePaymentProviderArgs = {
  input: InputCompanyModulePaymentProvider;
};

export type MutationCreateDepartmentArgs = {
  company_id: Scalars['ID']['input'];
  department_positions_id?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  name: Scalars['String']['input'];
};

export type MutationCreateDepartmentPositionArgs = {
  company_id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

export type MutationCreateDocumentTypeArgs = {
  name: Scalars['String']['input'];
};

export type MutationCreateEmailNotificationArgs = {
  client_id?: InputMaybe<Scalars['Int']['input']>;
  company_id: Scalars['ID']['input'];
  group_role_id: Scalars['ID']['input'];
  group_type_id: Scalars['ID']['input'];
  templates: ReadonlyArray<InputMaybe<Scalars['Int']['input']>>;
};

export type MutationCreateEmailSmtpArgs = {
  company_id: Scalars['ID']['input'];
  from_email?: InputMaybe<Scalars['String']['input']>;
  from_name?: InputMaybe<Scalars['String']['input']>;
  host_name: Scalars['String']['input'];
  is_sending_mail?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  port: Scalars['Int']['input'];
  replay_to?: InputMaybe<Scalars['String']['input']>;
  security?: InputMaybe<Securities>;
  username: Scalars['String']['input'];
};

export type MutationCreateEmailTemplateArgs = {
  company_id: Scalars['ID']['input'];
  content: Scalars['String']['input'];
  footer?: InputMaybe<Scalars['String']['input']>;
  header?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  service_type: ServiceType;
  subject: Scalars['String']['input'];
  type: ClientType;
  use_layout: Scalars['Boolean']['input'];
};

export type MutationCreateEmailTemplateLayoutArgs = {
  company_id: Scalars['Int']['input'];
  footer: Scalars['String']['input'];
  header: Scalars['String']['input'];
};

export type MutationCreateGroupSettingsArgs = {
  company_id?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  group_type_id: Scalars['ID']['input'];
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  module_id?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  providers?: InputMaybe<ReadonlyArray<InputMaybe<InputGroupRoleProvider>>>;
  role_id?: InputMaybe<Scalars['ID']['input']>;
};

export type MutationCreateMemberArgs = {
  company_id: Scalars['ID']['input'];
  country_id?: InputMaybe<Scalars['ID']['input']>;
  email: Scalars['EMAIL']['input'];
  first_name: Scalars['String']['input'];
  group_id: Scalars['ID']['input'];
  is_show_owner_applicants?: InputMaybe<Scalars['Boolean']['input']>;
  is_sign_transaction?: InputMaybe<Scalars['Boolean']['input']>;
  language_id?: InputMaybe<Scalars['ID']['input']>;
  last_name: Scalars['String']['input'];
  member_status_id?: InputMaybe<Scalars['ID']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  send_email?: InputMaybe<Scalars['Boolean']['input']>;
  sex?: InputMaybe<Sex>;
  two_factor_auth_setting_id: Scalars['ID']['input'];
};

export type MutationCreateMemberAccessLimitationArgs = {
  input: InputMemberAccessLimitation;
};

export type MutationCreateModuleArgs = {
  name: Scalars['String']['input'];
};

export type MutationCreatePaymentArgs = {
  account_id: Scalars['ID']['input'];
  amount: Scalars['Decimal']['input'];
  amount_real?: InputMaybe<Scalars['Decimal']['input']>;
  beneficiary_additional_data?: InputMaybe<Scalars['JSON']['input']>;
  beneficiary_address: Scalars['String']['input'];
  beneficiary_city: Scalars['String']['input'];
  beneficiary_country_id: Scalars['ID']['input'];
  beneficiary_name: Scalars['String']['input'];
  beneficiary_state: Scalars['String']['input'];
  beneficiary_zip: Scalars['String']['input'];
  company_id: Scalars['ID']['input'];
  currency_id: Scalars['ID']['input'];
  execution_at?: InputMaybe<Scalars['DateTimeUtc']['input']>;
  fee?: InputMaybe<Scalars['Decimal']['input']>;
  fee_type_id: Scalars['ID']['input'];
  operation_type_id: Scalars['ID']['input'];
  payment_provider_id: Scalars['ID']['input'];
  price_list_fees_id: Scalars['ID']['input'];
  recipient_account: Scalars['String']['input'];
  recipient_bank_address: Scalars['String']['input'];
  recipient_bank_country_id: Scalars['ID']['input'];
  recipient_bank_name: Scalars['String']['input'];
  recipient_bank_swift: Scalars['String']['input'];
  respondent_fees_id: Scalars['ID']['input'];
  urgency_id: Scalars['ID']['input'];
};

export type MutationCreatePaymentBankArgs = {
  input: InputPaymentBank;
};

export type MutationCreatePaymentProviderArgs = {
  input: InputPaymentProvider;
};

export type MutationCreatePaymentProviderIbanArgs = {
  input: InputPaymentProviderIban;
};

export type MutationCreatePaymentSystemArgs = {
  input: InputPaymentSystem;
};

export type MutationCreatePriceListFeesArgs = {
  input?: InputMaybe<PriceListFeeInput>;
};

export type MutationCreateProjectArgs = {
  input: InputProject;
};

export type MutationCreateRegionArgs = {
  input: InputRegion;
};

export type MutationCreateRoleArgs = {
  company_id?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  group_type_id?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  permission_category_all_member?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  permissions?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
};

export type MutationCreateTicketArgs = {
  client_id: Scalars['ID']['input'];
  member_id: Scalars['ID']['input'];
  message: Scalars['String']['input'];
  status?: InputMaybe<Scalars['Int']['input']>;
  title: Scalars['String']['input'];
};

export type MutationCreateTicketCommentArgs = {
  client_id: Scalars['ID']['input'];
  message: Scalars['String']['input'];
  ticket_id: Scalars['ID']['input'];
};

export type MutationCreateTransferOutgoingArgs = {
  account_id: Scalars['ID']['input'];
  amount: Scalars['Decimal']['input'];
  bank_message?: InputMaybe<Scalars['String']['input']>;
  company_id: Scalars['ID']['input'];
  currency_id: Scalars['ID']['input'];
  execution_at?: InputMaybe<Scalars['DateTimeUtc']['input']>;
  file_id?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  group_id: Scalars['ID']['input'];
  group_type_id: Scalars['ID']['input'];
  payment_provider_id: Scalars['ID']['input'];
  payment_system_id: Scalars['ID']['input'];
  price_list_fee_id: Scalars['ID']['input'];
  price_list_id: Scalars['ID']['input'];
  project_id: Scalars['ID']['input'];
  recipient_account?: InputMaybe<Scalars['String']['input']>;
  recipient_address?: InputMaybe<Scalars['String']['input']>;
  recipient_bank_address?: InputMaybe<Scalars['String']['input']>;
  recipient_bank_country_id: Scalars['ID']['input'];
  recipient_bank_name?: InputMaybe<Scalars['String']['input']>;
  recipient_bank_swift?: InputMaybe<Scalars['String']['input']>;
  recipient_city?: InputMaybe<Scalars['String']['input']>;
  recipient_name?: InputMaybe<Scalars['String']['input']>;
  recipient_state?: InputMaybe<Scalars['String']['input']>;
  recipient_zip?: InputMaybe<Scalars['String']['input']>;
  requested_by_id: Scalars['ID']['input'];
};

export type MutationCreateTransferOutgoingFeeArgs = {
  account_id: Scalars['ID']['input'];
  amount: Scalars['Decimal']['input'];
  bank_message?: InputMaybe<Scalars['String']['input']>;
  company_id: Scalars['ID']['input'];
  currency_id: Scalars['ID']['input'];
  execution_at?: InputMaybe<Scalars['DateTimeUtc']['input']>;
  file_id?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  group_id: Scalars['ID']['input'];
  group_type_id: Scalars['ID']['input'];
  operation_type_id: Scalars['ID']['input'];
  payment_provider_id: Scalars['ID']['input'];
  payment_system_id: Scalars['ID']['input'];
  price_list_fee_id: Scalars['ID']['input'];
  price_list_id: Scalars['ID']['input'];
  project_id: Scalars['ID']['input'];
  recipient_account?: InputMaybe<Scalars['String']['input']>;
  recipient_address?: InputMaybe<Scalars['String']['input']>;
  recipient_bank_address?: InputMaybe<Scalars['String']['input']>;
  recipient_bank_country_id: Scalars['ID']['input'];
  recipient_bank_name?: InputMaybe<Scalars['String']['input']>;
  recipient_bank_swift?: InputMaybe<Scalars['String']['input']>;
  recipient_city?: InputMaybe<Scalars['String']['input']>;
  recipient_name?: InputMaybe<Scalars['String']['input']>;
  recipient_state?: InputMaybe<Scalars['String']['input']>;
  recipient_zip?: InputMaybe<Scalars['String']['input']>;
  requested_by_id: Scalars['ID']['input'];
};

export type MutationDeleteAccountArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteAccountLimitArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteApplicantBankingAccessArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteApplicantBankingMemberArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteApplicantCompanyArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteApplicantCompanyLabelArgs = {
  deleteAnyway?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
};

export type MutationDeleteApplicantCompanyModuleArgs = {
  applicant_company_id: Scalars['ID']['input'];
  module_id?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
};

export type MutationDeleteApplicantCompanyNoteArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteApplicantCompanyRiskLevelHistoryArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteApplicantDeviceArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteApplicantDocumentArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteApplicantDocumentInternalNoteArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteApplicantDocumentRejectDetailArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteApplicantDocumentTagArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteApplicantDocumentTagCategoryArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteApplicantIndividualArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteApplicantIndividualCompanyArgs = {
  applicant_company_id: Scalars['ID']['input'];
  applicant_id: Scalars['ID']['input'];
};

export type MutationDeleteApplicantIndividualCompanyPositionArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteApplicantIndividualCompanyRelationArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteApplicantIndividualLabelArgs = {
  deleteAnyway?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
};

export type MutationDeleteApplicantIndividualModuleArgs = {
  applicant_individual_id: Scalars['ID']['input'];
  module_id?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
};

export type MutationDeleteApplicantIndividualNoteArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteApplicantRiskLevelHistoryArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteApplicantStateReasonArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteBankCorrespondentArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteCommissionPriceListArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteCommissionTemplateArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteCommissionTemplateLimitArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteCompanyArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteCompanyModuleArgs = {
  company_id: Scalars['ID']['input'];
};

export type MutationDeleteCompanyModuleIbanProviderArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteCompanyModulePaymentProviderArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteDepartmentArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteDepartmentPositionArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteDocumentTypeArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteEmailNotificationArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteEmailSmtpArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteEmailTemplateArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteEmailTemplateLayoutArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteFileArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteGroupArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteMemberArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteMemberAccessLimitationArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeletePaymentArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeletePaymentBankArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeletePaymentProviderArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeletePaymentProviderIbanArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeletePaymentSystemArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeletePriceListFeesArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteProjectArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteRegionArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteRoleArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteTagApplicantDocumentRejectDetailArgs = {
  applicant_document_tag_id?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  id: Scalars['ID']['input'];
};

export type MutationDetachApplicantCompanyLabelArgs = {
  applicant_company_id: Scalars['ID']['input'];
  applicant_company_label_id?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
};

export type MutationDetachApplicantDocumentTagArgs = {
  applicant_document_id: Scalars['ID']['input'];
  applicant_document_tag_id: ReadonlyArray<InputMaybe<Scalars['ID']['input']>>;
};

export type MutationDetachApplicantIndividualLabelArgs = {
  applicant_individual_id: Scalars['ID']['input'];
  applicant_individual_label_id?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
};

export type MutationGenerateIbanArgs = {
  id: Scalars['ID']['input'];
};

export type MutationGrantApplicantBankingAccessArgs = {
  id: Scalars['ID']['input'];
};

export type MutationResetMemberPasswordArgs = {
  id: Scalars['ID']['input'];
};

export type MutationSendConfirmChangeEmailArgs = {
  email: Scalars['String']['input'];
};

export type MutationSendEmailArgs = {
  email: Scalars['String']['input'];
  from_email?: InputMaybe<Scalars['String']['input']>;
  from_name?: InputMaybe<Scalars['String']['input']>;
  host_name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  port: Scalars['Int']['input'];
  replay_to?: InputMaybe<Scalars['String']['input']>;
  security?: InputMaybe<Securities>;
  username: Scalars['String']['input'];
};

export type MutationSendEmailRegistationArgs = {
  applicant_id: Scalars['ID']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
};

export type MutationSendEmailResetPasswordArgs = {
  applicant_id: Scalars['ID']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
};

export type MutationSendEmailVerificationArgs = {
  applicant_id: Scalars['ID']['input'];
};

export type MutationSendEmailVerificationApplicantCompanyArgs = {
  applicant_company_id: Scalars['ID']['input'];
};

export type MutationSendEmailWithTemplateArgs = {
  company_id: Scalars['ID']['input'];
  content?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  footer?: InputMaybe<Scalars['String']['input']>;
  header?: InputMaybe<Scalars['String']['input']>;
  subject: Scalars['String']['input'];
};

export type MutationSendMemberEmailVerificationArgs = {
  id: Scalars['ID']['input'];
};

export type MutationSendPhoneVerificationArgs = {
  applicant_id: Scalars['ID']['input'];
};

export type MutationSendPhoneVerificationApplicantCompanyArgs = {
  applicant_company_id: Scalars['ID']['input'];
};

export type MutationSetApplicantIndividualPasswordArgs = {
  id: Scalars['ID']['input'];
  password: Scalars['String']['input'];
  password_confirmation: Scalars['String']['input'];
};

export type MutationSetApplicantSecurityPinArgs = {
  id: Scalars['ID']['input'];
};

export type MutationSetApplicantSettingsPasswordArgs = {
  current_password: Scalars['String']['input'];
  password: Scalars['String']['input'];
  password_confirmation: Scalars['String']['input'];
};

export type MutationSetApplicantSettingsPasswordWithOtpArgs = {
  auth_token: Scalars['String']['input'];
  code: Scalars['String']['input'];
  current_password: Scalars['String']['input'];
  password: Scalars['String']['input'];
  password_confirmation: Scalars['String']['input'];
};

export type MutationSetMemberActiveArgs = {
  id: Scalars['ID']['input'];
};

export type MutationSetMemberGroupArgs = {
  group_type_id: Scalars['ID']['input'];
  providers?: InputMaybe<ReadonlyArray<InputGroupRoleProvider>>;
  role_id: Scalars['ID']['input'];
};

export type MutationSetMemberInactiveArgs = {
  id: Scalars['ID']['input'];
};

export type MutationSetMemberPasswordArgs = {
  id: Scalars['ID']['input'];
  password: Scalars['String']['input'];
  password_confirmation: Scalars['String']['input'];
};

export type MutationSetMemberSecurityPinArgs = {
  id: Scalars['ID']['input'];
};

export type MutationSetMemberSuspendedArgs = {
  id: Scalars['ID']['input'];
};

export type MutationUpdateAccountArgs = {
  account_name: Scalars['String']['input'];
  account_state_id: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
  is_primary: Scalars['Boolean']['input'];
};

export type MutationUpdateAccountLimitArgs = {
  amount?: InputMaybe<Scalars['Decimal']['input']>;
  commission_template_limit_action_type_id?: InputMaybe<Scalars['ID']['input']>;
  commission_template_limit_period_id?: InputMaybe<Scalars['ID']['input']>;
  commission_template_limit_transfer_direction_id?: InputMaybe<Scalars['ID']['input']>;
  commission_template_limit_type_id?: InputMaybe<Scalars['ID']['input']>;
  currency_id?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  period_count?: InputMaybe<Scalars['ID']['input']>;
};

export type MutationUpdateActiveSessionArgs = {
  id: Scalars['String']['input'];
  trusted: Scalars['Boolean']['input'];
};

export type MutationUpdateApplicantAccountArgs = {
  id: Scalars['ID']['input'];
  is_show: Scalars['Boolean']['input'];
};

export type MutationUpdateApplicantBankingAccessArgs = {
  applicant_company_id?: InputMaybe<Scalars['ID']['input']>;
  applicant_individual_id?: InputMaybe<Scalars['ID']['input']>;
  contact_administrator?: InputMaybe<Scalars['Boolean']['input']>;
  daily_limit?: InputMaybe<Scalars['Decimal']['input']>;
  id: Scalars['ID']['input'];
  monthly_limit?: InputMaybe<Scalars['Decimal']['input']>;
  operation_limit?: InputMaybe<Scalars['Decimal']['input']>;
  role_id?: InputMaybe<Scalars['ID']['input']>;
};

export type MutationUpdateApplicantCompanyArgs = {
  account_manager_member_id?: InputMaybe<Scalars['ID']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  address2?: InputMaybe<Scalars['String']['input']>;
  applicant_company_business_type_id?: InputMaybe<Scalars['ID']['input']>;
  applicant_kyc_level_id?: InputMaybe<Scalars['ID']['input']>;
  applicant_risk_level_id?: InputMaybe<Scalars['ID']['input']>;
  applicant_state_id?: InputMaybe<Scalars['ID']['input']>;
  applicant_state_reason_id?: InputMaybe<Scalars['ID']['input']>;
  basic_info_additional_field?: InputMaybe<ReadonlyArray<InputMaybe<AdditionalFieldInput>>>;
  city?: InputMaybe<Scalars['String']['input']>;
  company_id?: InputMaybe<Scalars['ID']['input']>;
  company_info_additional_fields?: InputMaybe<ReadonlyArray<InputMaybe<AdditionalFieldInput>>>;
  company_type?: InputMaybe<Scalars['String']['input']>;
  contact_email?: InputMaybe<Scalars['EMAIL']['input']>;
  contact_phone?: InputMaybe<Scalars['String']['input']>;
  contacts_additional_fields?: InputMaybe<ReadonlyArray<InputMaybe<AdditionalFieldInput>>>;
  country_id?: InputMaybe<Scalars['ID']['input']>;
  email?: InputMaybe<Scalars['EMAIL']['input']>;
  expires_at?: InputMaybe<Scalars['DateTimeUtc']['input']>;
  group_id?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  incorporate_date?: InputMaybe<Scalars['DateTimeUtc']['input']>;
  is_verification_phone?: InputMaybe<Scalars['Boolean']['input']>;
  labels?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  language_id?: InputMaybe<Scalars['ID']['input']>;
  license_number?: InputMaybe<Scalars['String']['input']>;
  module_ids?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  office_address?: InputMaybe<Scalars['String']['input']>;
  owner_id?: InputMaybe<Scalars['ID']['input']>;
  owner_position_id?: InputMaybe<Scalars['ID']['input']>;
  owner_relation_id?: InputMaybe<Scalars['ID']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  photo_id?: InputMaybe<Scalars['ID']['input']>;
  profile_additional_fields?: InputMaybe<ReadonlyArray<InputMaybe<AdditionalFieldInput>>>;
  project_id?: InputMaybe<Scalars['ID']['input']>;
  reg_at?: InputMaybe<Scalars['Date']['input']>;
  reg_number?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  tax?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  zip?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUpdateApplicantCompanyBusinessTypeArgs = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

export type MutationUpdateApplicantCompanyLabelArgs = {
  hex_color_code?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

export type MutationUpdateApplicantCompanyModuleArgs = {
  applicant_company_id: Scalars['ID']['input'];
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  module_id?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
};

export type MutationUpdateApplicantCompanyVerificationStatusArgs = {
  applicant_status_id: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
};

export type MutationUpdateApplicantDeviceArgs = {
  id: Scalars['ID']['input'];
  trusted: Scalars['Boolean']['input'];
};

export type MutationUpdateApplicantDeviceWithOtpArgs = {
  auth_token: Scalars['String']['input'];
  code: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  trusted: Scalars['Boolean']['input'];
};

export type MutationUpdateApplicantDocumentArgs = {
  document_state_id?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  info?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUpdateApplicantDocumentTagArgs = {
  category_id: Scalars['ID']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

export type MutationUpdateApplicantDocumentTagCategoryArgs = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

export type MutationUpdateApplicantIndividualArgs = {
  account_manager_member_id?: InputMaybe<Scalars['ID']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  address_additional_fields?: InputMaybe<ReadonlyArray<InputMaybe<AdditionalFieldInput>>>;
  applicant_risk_level_id?: InputMaybe<Scalars['ID']['input']>;
  applicant_state_id?: InputMaybe<Scalars['ID']['input']>;
  applicant_state_reason_id?: InputMaybe<Scalars['ID']['input']>;
  birth_at?: InputMaybe<Scalars['Date']['input']>;
  birth_city?: InputMaybe<Scalars['String']['input']>;
  birth_country_id?: InputMaybe<Scalars['ID']['input']>;
  birth_state?: InputMaybe<Scalars['String']['input']>;
  citizenship_country_id?: InputMaybe<Scalars['ID']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  company_id?: InputMaybe<Scalars['ID']['input']>;
  contacts_additional_fields?: InputMaybe<ReadonlyArray<InputMaybe<AdditionalFieldInput>>>;
  country_id?: InputMaybe<Scalars['ID']['input']>;
  email?: InputMaybe<Scalars['EMAIL']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  group_id?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  ip_address?: InputMaybe<Scalars['String']['input']>;
  is_verification_phone?: InputMaybe<Scalars['Boolean']['input']>;
  kyc_level_id?: InputMaybe<Scalars['ID']['input']>;
  labels?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  language_id?: InputMaybe<Scalars['ID']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  last_screened_at?: InputMaybe<Scalars['DateTimeUtc']['input']>;
  middle_name?: InputMaybe<Scalars['String']['input']>;
  module_ids?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  nationality?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  password_confirmation?: InputMaybe<Scalars['String']['input']>;
  personal_additional_fields?: InputMaybe<ReadonlyArray<InputMaybe<AdditionalFieldInput>>>;
  phone?: InputMaybe<Scalars['String']['input']>;
  photo_id?: InputMaybe<Scalars['ID']['input']>;
  profile_additional_fields?: InputMaybe<ReadonlyArray<InputMaybe<AdditionalFieldInput>>>;
  project_id?: InputMaybe<Scalars['ID']['input']>;
  sex?: InputMaybe<Sex>;
  state?: InputMaybe<Scalars['String']['input']>;
  two_factor_auth_setting_id?: InputMaybe<Scalars['ID']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  zip?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUpdateApplicantIndividualCompanyArgs = {
  applicant_company_id: Scalars['ID']['input'];
  applicant_id: Scalars['ID']['input'];
  applicant_individual_company_position_id?: InputMaybe<Scalars['ID']['input']>;
  applicant_individual_company_relation_id?: InputMaybe<Scalars['ID']['input']>;
  percentage_owned?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationUpdateApplicantIndividualCompanyPositionArgs = {
  company_id?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

export type MutationUpdateApplicantIndividualCompanyRelationArgs = {
  company_id?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

export type MutationUpdateApplicantIndividualLabelArgs = {
  hex_color_code?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

export type MutationUpdateApplicantIndividualModuleArgs = {
  applicant_individual_id: Scalars['ID']['input'];
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  module_id?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
};

export type MutationUpdateApplicantIndividualVerificationStatusArgs = {
  applicant_status_id: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
};

export type MutationUpdateApplicantProfileArgs = {
  address?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  notify_device_email?: InputMaybe<Scalars['Boolean']['input']>;
  photo_id?: InputMaybe<Scalars['ID']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  zip?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUpdateApplicantStateReasonArgs = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

export type MutationUpdateBankCorrespondentArgs = {
  address: Scalars['String']['input'];
  bank_account: Scalars['String']['input'];
  bank_code: Scalars['String']['input'];
  currency_id: ReadonlyArray<InputMaybe<Scalars['ID']['input']>>;
  id: Scalars['ID']['input'];
  is_active: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  payment_system_id: Scalars['ID']['input'];
  region_id: ReadonlyArray<InputMaybe<Scalars['ID']['input']>>;
};

export type MutationUpdateBusinessActivityArgs = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

export type MutationUpdateCommissionPriceListArgs = {
  commission_template_id?: InputMaybe<Scalars['ID']['input']>;
  company_id?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  payment_system_id?: InputMaybe<Scalars['ID']['input']>;
  provider_id?: InputMaybe<Scalars['ID']['input']>;
  region_id?: InputMaybe<Scalars['ID']['input']>;
};

export type MutationUpdateCommissionTemplateArgs = {
  id: Scalars['ID']['input'];
  input: InputCommissionTemplate;
};

export type MutationUpdateCommissionTemplateLimitArgs = {
  id: Scalars['ID']['input'];
  input: InputCommissionTemplateLimit;
};

export type MutationUpdateCompanyArgs = {
  additional_fields_basic?: InputMaybe<ReadonlyArray<InputMaybe<AdditionalFieldInput>>>;
  additional_fields_data?: InputMaybe<ReadonlyArray<InputMaybe<AdditionalFieldInput>>>;
  additional_fields_info?: InputMaybe<ReadonlyArray<InputMaybe<AdditionalFieldInput>>>;
  additional_fields_settings?: InputMaybe<ReadonlyArray<InputMaybe<AdditionalFieldInput>>>;
  address?: InputMaybe<Scalars['String']['input']>;
  backoffice_forgot_password_url?: InputMaybe<Scalars['String']['input']>;
  backoffice_login_url?: InputMaybe<Scalars['String']['input']>;
  backoffice_support_email?: InputMaybe<Scalars['EMAIL']['input']>;
  backoffice_support_url?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  company_number?: InputMaybe<Scalars['String']['input']>;
  contact_name?: InputMaybe<Scalars['String']['input']>;
  country_id?: InputMaybe<Scalars['ID']['input']>;
  email?: InputMaybe<Scalars['EMAIL']['input']>;
  employees_id?: InputMaybe<Scalars['ID']['input']>;
  entity_type?: InputMaybe<Scalars['String']['input']>;
  exp_date?: InputMaybe<Scalars['DateTimeUtc']['input']>;
  id: Scalars['ID']['input'];
  incorporate_date?: InputMaybe<Scalars['DateTimeUtc']['input']>;
  license_number?: InputMaybe<Scalars['String']['input']>;
  logo_id?: InputMaybe<Scalars['ID']['input']>;
  member_verify_url?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  reg_address?: InputMaybe<Scalars['String']['input']>;
  reg_number?: InputMaybe<Scalars['String']['input']>;
  state_id?: InputMaybe<Scalars['ID']['input']>;
  state_reason_id?: InputMaybe<Scalars['ID']['input']>;
  tax_id?: InputMaybe<Scalars['String']['input']>;
  type_of_industry_id?: InputMaybe<Scalars['ID']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  vv_token?: InputMaybe<Scalars['String']['input']>;
  zip?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUpdateCompanyModuleArgs = {
  id: Scalars['ID']['input'];
  is_active: Scalars['Boolean']['input'];
};

export type MutationUpdateCompanyModuleIbanProviderArgs = {
  id: Scalars['ID']['input'];
  is_active: Scalars['Boolean']['input'];
};

export type MutationUpdateCompanyModulePaymentProviderArgs = {
  id: Scalars['ID']['input'];
  is_active: Scalars['Boolean']['input'];
};

export type MutationUpdateDepartmentArgs = {
  department_positions_id?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUpdateEmailNotificationArgs = {
  client_id?: InputMaybe<Scalars['Int']['input']>;
  company_id?: InputMaybe<Scalars['ID']['input']>;
  group_role_id: Scalars['ID']['input'];
  group_type_id: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
  templates?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
};

export type MutationUpdateEmailSmtpArgs = {
  from_email?: InputMaybe<Scalars['String']['input']>;
  from_name?: InputMaybe<Scalars['String']['input']>;
  host_name?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  is_sending_mail?: InputMaybe<Scalars['Boolean']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  port?: InputMaybe<Scalars['Int']['input']>;
  replay_to?: InputMaybe<Scalars['String']['input']>;
  security?: InputMaybe<Securities>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUpdateEmailTemplateArgs = {
  company_id?: InputMaybe<Scalars['ID']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  footer?: InputMaybe<Scalars['String']['input']>;
  header?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  service_type?: InputMaybe<ServiceType>;
  subject?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<ClientType>;
  use_layout?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationUpdateEmailTemplateLayoutArgs = {
  company_id: Scalars['Int']['input'];
  footer?: InputMaybe<Scalars['String']['input']>;
  header?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type MutationUpdateGroupSettingsArgs = {
  company_id?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  group_type_id: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  module_id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  providers?: InputMaybe<ReadonlyArray<InputMaybe<InputGroupRoleProvider>>>;
  role_id?: InputMaybe<Scalars['ID']['input']>;
};

export type MutationUpdateMemberArgs = {
  additional_fields?: InputMaybe<ReadonlyArray<InputMaybe<AdditionalFieldInput>>>;
  additional_info_fields?: InputMaybe<ReadonlyArray<InputMaybe<AdditionalFieldInput>>>;
  company_id?: InputMaybe<Scalars['ID']['input']>;
  country_id?: InputMaybe<Scalars['ID']['input']>;
  department_id?: InputMaybe<Scalars['ID']['input']>;
  department_position_id?: InputMaybe<Scalars['ID']['input']>;
  email?: InputMaybe<Scalars['EMAIL']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  group_id?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  ip_address?: InputMaybe<Scalars['String']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  is_show_owner_applicants?: InputMaybe<Scalars['Boolean']['input']>;
  is_sign_transaction?: InputMaybe<Scalars['Boolean']['input']>;
  job_title?: InputMaybe<Scalars['String']['input']>;
  language_id?: InputMaybe<Scalars['ID']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  member_status_id?: InputMaybe<Scalars['ID']['input']>;
  photo_id?: InputMaybe<Scalars['ID']['input']>;
  sex?: InputMaybe<Sex>;
  two_factor_auth_setting_id?: InputMaybe<Scalars['ID']['input']>;
};

export type MutationUpdateMemberAccessLimitationArgs = {
  id: Scalars['ID']['input'];
  input: InputMemberAccessLimitation;
};

export type MutationUpdateMemberProfileArgs = {
  country_id?: InputMaybe<Scalars['ID']['input']>;
  email?: InputMaybe<Scalars['EMAIL']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  language_id?: InputMaybe<Scalars['ID']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUpdatePaymentArgs = {
  id: Scalars['ID']['input'];
  status_id: Scalars['ID']['input'];
};

export type MutationUpdatePaymentBankArgs = {
  id: Scalars['ID']['input'];
  input: InputPaymentBank;
};

export type MutationUpdatePaymentProviderArgs = {
  id: Scalars['ID']['input'];
  input: InputPaymentProvider;
};

export type MutationUpdatePaymentProviderIbanArgs = {
  id: Scalars['ID']['input'];
  input: InputPaymentProviderIban;
};

export type MutationUpdatePaymentSystemArgs = {
  id: Scalars['ID']['input'];
  input: InputPaymentSystem;
};

export type MutationUpdatePriceListFeesArgs = {
  commission_price_list?: InputMaybe<ReadonlyArray<InputMaybe<PriceList>>>;
  id: Scalars['ID']['input'];
  input?: InputMaybe<PriceListFeeInput>;
};

export type MutationUpdateProjectArgs = {
  id: Scalars['ID']['input'];
  input: InputProject;
};

export type MutationUpdateProjectApiSettingArgs = {
  input: ReadonlyArray<InputProjectApiSetting>;
  project_id: Scalars['ID']['input'];
};

export type MutationUpdateRegionArgs = {
  id: Scalars['ID']['input'];
  input: InputRegion;
};

export type MutationUpdateRoleArgs = {
  company_id?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  group_type_id?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  permission_category_all_member?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  permissions?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
};

export type MutationUpdateTicketArgs = {
  id: Scalars['ID']['input'];
  message?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUpdateTransferOutgoingArgs = {
  id: Scalars['ID']['input'];
  status_id: Scalars['Int']['input'];
};

export type MutationUpdateTransferOutgoingFeeArgs = {
  amount: Scalars['Decimal']['input'];
  file_id?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  id: Scalars['ID']['input'];
  reason?: InputMaybe<Scalars['String']['input']>;
};

export const enum NotifyType {
  Administration = 'Administration',
  Client = 'Client',
}

export type OperationType = {
  readonly __typename?: 'OperationType';
  readonly id?: Maybe<Scalars['ID']['output']>;
  readonly name?: Maybe<Scalars['String']['output']>;
};

export const enum OperationTypeEnum {
  BetweenAccount = 'BETWEEN_ACCOUNT',
  BetweenUsers = 'BETWEEN_USERS',
  Credit = 'CREDIT',
  Debit = 'DEBIT',
  Exchange = 'EXCHANGE',
  IncomingWireTransfer = 'INCOMING_WIRE_TRANSFER',
  OutgoingWireTransfer = 'OUTGOING_WIRE_TRANSFER',
  ScheduledFees = 'SCHEDULED_FEES',
}

export const enum Order {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type OrderBy = {
  readonly column: Column;
  readonly order: Order;
};

export type OrderByClause = {
  readonly column: Scalars['String']['input'];
  readonly order: SortOrder;
};

export const enum OrderByRelationAggregateFunction {
  Count = 'COUNT',
}

export const enum OrderByRelationWithColumnAggregateFunction {
  Avg = 'AVG',
  Count = 'COUNT',
  Max = 'MAX',
  Min = 'MIN',
  Sum = 'SUM',
}

export const enum Permission_Account_Details {
  Edit = 'EDIT',
  Read = 'READ',
  ShowBalance = 'SHOW_BALANCE',
  ShowProviderInfo = 'SHOW_PROVIDER_INFO',
  StatusActive = 'STATUS_ACTIVE',
  StatusClosed = 'STATUS_CLOSED',
  StatusPending = 'STATUS_PENDING',
  StatusSuspended = 'STATUS_SUSPENDED',
  WaitingForIBANActivation = 'WAITING_FOR_I_B_A_N_ACTIVATION',
}

export const enum Permission_Dashboard {
  Feedback = 'FEEDBACK',
  InviteFriends = 'INVITE_FRIENDS',
  LastPayments = 'LAST_PAYMENTS',
  Yes = 'YES',
}

export const enum Permission_Make_Payments {
  CreatePayments = 'CREATE_PAYMENTS',
  SignPayments = 'SIGN_PAYMENTS',
}

export const enum Permission_My_Net_Worth {
  Assets = 'ASSETS',
  Liabilities = 'LIABILITIES',
  Summary = 'SUMMARY',
  Yes = 'YES',
}

export const enum Permission_My_Templates {
  AddNew = 'ADD_NEW',
  Delete = 'DELETE',
  Edit = 'EDIT',
  Read = 'READ',
}

export const enum Permission_Payment_Details {
  ExportPaymentDetails = 'EXPORT_PAYMENT_DETAILS',
  Read = 'READ',
}

export const enum Permission_Payment_List {
  CancelPayment = 'CANCEL_PAYMENT',
  Edit = 'EDIT',
  Read = 'READ',
}

export const enum Permission_Requisites {
  DownloadRequisites = 'DOWNLOAD_REQUISITES',
  Read = 'READ',
  SendRequisitesDetails = 'SEND_REQUISITES_DETAILS',
}

export const enum Permission_Settings_Account {
  Edit = 'EDIT',
  Read = 'READ',
}

export const enum Permission_Settings_Contact_Details {
  Edit = 'EDIT',
  Read = 'READ',
}

export const enum Permission_Settings_Log_In_Details {
  Edit = 'EDIT',
  MyDevice = 'MY_DEVICE',
  Read = 'READ',
  SecurePin = 'SECURE_PIN',
  TwoFactorAuthentication = 'TWO_FACTOR_AUTHENTICATION',
}

export const enum Permission_Settings_Security_Level {
  Edit = 'EDIT',
  Read = 'READ',
}

export const enum Permission_Statements {
  ExportStatement = 'EXPORT_STATEMENT',
  Read = 'READ',
}

export const enum Permission_Tickets {
  CloseTicket = 'CLOSE_TICKET',
  NewTicket = 'NEW_TICKET',
  Read = 'READ',
  StatusClosed = 'STATUS_CLOSED',
  StatusNoReplyRequired = 'STATUS_NO_REPLY_REQUIRED',
  StatusOpened = 'STATUS_OPENED',
  StatusReplyRequired = 'STATUS_REPLY_REQUIRED',
}

export type PageInfo = {
  readonly __typename?: 'PageInfo';
  readonly count: Scalars['Int']['output'];
  readonly currentPage: Scalars['Int']['output'];
  readonly endCursor?: Maybe<Scalars['String']['output']>;
  readonly hasNextPage: Scalars['Boolean']['output'];
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  readonly lastPage: Scalars['Int']['output'];
  readonly startCursor?: Maybe<Scalars['String']['output']>;
  readonly total: Scalars['Int']['output'];
};

export type PaginatorInfo = {
  readonly __typename?: 'PaginatorInfo';
  readonly count: Scalars['Int']['output'];
  readonly currentPage: Scalars['Int']['output'];
  readonly firstItem?: Maybe<Scalars['Int']['output']>;
  readonly hasMorePages: Scalars['Boolean']['output'];
  readonly lastItem?: Maybe<Scalars['Int']['output']>;
  readonly lastPage: Scalars['Int']['output'];
  readonly perPage: Scalars['Int']['output'];
  readonly total: Scalars['Int']['output'];
};

export type PaymentBank = {
  readonly __typename?: 'PaymentBank';
  readonly address?: Maybe<Scalars['String']['output']>;
  readonly bank_code?: Maybe<Scalars['String']['output']>;
  readonly bank_correspondent?: Maybe<BankCorrespondent>;
  readonly country?: Maybe<Country>;
  readonly id: Scalars['ID']['output'];
  readonly is_active?: Maybe<Scalars['Boolean']['output']>;
  readonly name: Scalars['String']['output'];
  readonly payment_provider?: Maybe<PaymentProvider>;
  readonly payment_system?: Maybe<PaymentSystem>;
  readonly payment_system_code?: Maybe<Scalars['String']['output']>;
};

export type PaymentBankPaginator = {
  readonly __typename?: 'PaymentBankPaginator';
  readonly data: ReadonlyArray<PaymentBank>;
  readonly paginatorInfo: PaginatorInfo;
};

export type PaymentProvider = {
  readonly __typename?: 'PaymentProvider';
  readonly commission_price_list?: Maybe<CommissionPriceList>;
  readonly company?: Maybe<Company>;
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly is_active?: Maybe<Scalars['Boolean']['output']>;
  readonly logo?: Maybe<Files>;
  readonly name: Scalars['String']['output'];
  readonly payment_systems?: Maybe<ReadonlyArray<Maybe<PaymentSystem>>>;
};

export type PaymentProviderHistory = {
  readonly __typename?: 'PaymentProviderHistory';
  readonly created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly payment_provider_id: Scalars['ID']['output'];
  readonly provider_response?: Maybe<Scalars['JSON']['output']>;
  readonly transfer_id: Scalars['ID']['output'];
  readonly transfer_type?: Maybe<Scalars['String']['output']>;
};

export type PaymentProviderIban = {
  readonly __typename?: 'PaymentProviderIban';
  readonly company?: Maybe<Company>;
  readonly currency?: Maybe<Currencies>;
  readonly id: Scalars['ID']['output'];
  readonly is_active?: Maybe<Scalars['Boolean']['output']>;
  readonly name: Scalars['String']['output'];
};

export type PaymentProviderIbanPaginator = {
  readonly __typename?: 'PaymentProviderIbanPaginator';
  readonly data: ReadonlyArray<PaymentProviderIban>;
  readonly paginatorInfo: PaginatorInfo;
};

export type PaymentProviderPaginator = {
  readonly __typename?: 'PaymentProviderPaginator';
  readonly data: ReadonlyArray<PaymentProvider>;
  readonly paginatorInfo: PaginatorInfo;
};

export type PaymentStatus = {
  readonly __typename?: 'PaymentStatus';
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
};

export type PaymentSystem = {
  readonly __typename?: 'PaymentSystem';
  readonly bank_correspondent?: Maybe<BankCorrespondent>;
  readonly banks?: Maybe<ReadonlyArray<Maybe<PaymentBank>>>;
  readonly company?: Maybe<Company>;
  readonly currencies?: Maybe<ReadonlyArray<Maybe<Currencies>>>;
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly is_active?: Maybe<Scalars['Boolean']['output']>;
  readonly logo?: Maybe<Files>;
  readonly name: Scalars['String']['output'];
  readonly operations?: Maybe<ReadonlyArray<Maybe<OperationType>>>;
  readonly providers?: Maybe<PaymentProvider>;
  readonly regions?: Maybe<ReadonlyArray<Maybe<Region>>>;
};

export type PaymentSystemPaginator = {
  readonly __typename?: 'PaymentSystemPaginator';
  readonly data: ReadonlyArray<PaymentSystem>;
  readonly paginatorInfo: PaginatorInfo;
};

export type PaymentUrgency = {
  readonly __typename?: 'PaymentUrgency';
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
};

export type Payments = {
  readonly __typename?: 'Payments';
  readonly account?: Maybe<Account>;
  readonly amount: Scalars['Decimal']['output'];
  readonly amount_real: Scalars['Decimal']['output'];
  readonly beneficiary_additional_data?: Maybe<Scalars['JSON']['output']>;
  readonly beneficiary_address?: Maybe<Scalars['String']['output']>;
  readonly beneficiary_city?: Maybe<Scalars['String']['output']>;
  readonly beneficiary_country?: Maybe<Country>;
  readonly beneficiary_name?: Maybe<Scalars['String']['output']>;
  readonly beneficiary_state?: Maybe<Scalars['String']['output']>;
  readonly beneficiary_zip?: Maybe<Scalars['String']['output']>;
  readonly company?: Maybe<Company>;
  readonly created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  readonly currency?: Maybe<Currencies>;
  readonly error?: Maybe<Scalars['String']['output']>;
  readonly execution_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  readonly fee?: Maybe<Scalars['Decimal']['output']>;
  readonly fee_type?: Maybe<FeeType>;
  readonly id: Scalars['ID']['output'];
  readonly member?: Maybe<Members>;
  readonly payment_number?: Maybe<Scalars['String']['output']>;
  readonly payment_operation_type?: Maybe<OperationType>;
  readonly payment_provider?: Maybe<PaymentProvider>;
  readonly payment_urgency?: Maybe<PaymentUrgency>;
  readonly price_list_fees?: Maybe<PriceListFee>;
  readonly received_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  readonly recipient_account?: Maybe<Scalars['String']['output']>;
  readonly recipient_bank_address?: Maybe<Scalars['String']['output']>;
  readonly recipient_bank_country?: Maybe<Country>;
  readonly recipient_bank_name?: Maybe<Scalars['String']['output']>;
  readonly recipient_bank_swift?: Maybe<Scalars['String']['output']>;
  readonly respondent_fee?: Maybe<RespondentFee>;
  readonly status?: Maybe<PaymentStatus>;
  readonly status_id?: Maybe<Scalars['ID']['output']>;
  readonly updated_at?: Maybe<Scalars['DateTimeUtc']['output']>;
};

export type PaymentsPaginator = {
  readonly __typename?: 'PaymentsPaginator';
  readonly data: ReadonlyArray<Payments>;
  readonly paginatorInfo: PaginatorInfo;
};

export type PermissionAuth = {
  readonly __typename?: 'PermissionAuth';
  readonly PERMISSION_ACCOUNT_DETAILS: ReadonlyArray<Permission_Account_Details>;
  readonly PERMISSION_DASHBOARD: ReadonlyArray<Permission_Dashboard>;
  readonly PERMISSION_MAKE_PAYMENTS: ReadonlyArray<Permission_Make_Payments>;
  readonly PERMISSION_MY_NET_WORTH: ReadonlyArray<Permission_My_Net_Worth>;
  readonly PERMISSION_MY_TEMPLATES: ReadonlyArray<Permission_My_Templates>;
  readonly PERMISSION_PAYMENT_DETAILS: ReadonlyArray<Permission_Payment_Details>;
  readonly PERMISSION_PAYMENT_LIST: ReadonlyArray<Permission_Payment_List>;
  readonly PERMISSION_REQUISITES: ReadonlyArray<Permission_Requisites>;
  readonly PERMISSION_SETTINGS_ACCOUNT: ReadonlyArray<Permission_Settings_Account>;
  readonly PERMISSION_SETTINGS_CONTACT_DETAILS: ReadonlyArray<Permission_Settings_Contact_Details>;
  readonly PERMISSION_SETTINGS_LOG_IN_DETAILS: ReadonlyArray<Permission_Settings_Log_In_Details>;
  readonly PERMISSION_SETTINGS_SECURITY_LEVEL: ReadonlyArray<Permission_Settings_Security_Level>;
  readonly PERMISSION_STATEMENTS: ReadonlyArray<Permission_Statements>;
  readonly PERMISSION_TICKETS: ReadonlyArray<Permission_Tickets>;
};

export type PermissionCategory = {
  readonly __typename?: 'PermissionCategory';
  readonly id?: Maybe<Scalars['ID']['output']>;
  readonly name?: Maybe<Scalars['String']['output']>;
  readonly permissionList?: Maybe<ReadonlyArray<Maybe<PermissionList>>>;
};

export type PermissionCategoryPermissionListArgs = {
  permissionType?: InputMaybe<PermissionCategoryPermissionListPermissionTypeWhereConditions>;
};

export const enum PermissionCategoryPermissionListPermissionTypeColumn {
  Type = 'TYPE',
}

export type PermissionCategoryPermissionListPermissionTypeWhereConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<PermissionCategoryPermissionListPermissionTypeWhereConditions>>;
  readonly HAS?: InputMaybe<PermissionCategoryPermissionListPermissionTypeWhereConditionsRelation>;
  readonly OR?: InputMaybe<ReadonlyArray<PermissionCategoryPermissionListPermissionTypeWhereConditions>>;
  readonly column?: InputMaybe<PermissionCategoryPermissionListPermissionTypeColumn>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export type PermissionCategoryPermissionListPermissionTypeWhereConditionsRelation = {
  readonly amount?: InputMaybe<Scalars['Int']['input']>;
  readonly condition?: InputMaybe<PermissionCategoryPermissionListPermissionTypeWhereConditions>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly relation: Scalars['String']['input'];
};

export type PermissionCategoryRole = {
  readonly __typename?: 'PermissionCategoryRole';
  readonly is_all_companies?: Maybe<Scalars['Boolean']['output']>;
  readonly permission_category_id?: Maybe<Scalars['ID']['output']>;
  readonly role_id?: Maybe<Scalars['ID']['output']>;
};

export type PermissionList = {
  readonly __typename?: 'PermissionList';
  readonly id?: Maybe<Scalars['ID']['output']>;
  readonly name?: Maybe<Scalars['String']['output']>;
  readonly permissions?: Maybe<ReadonlyArray<Maybe<Permissions>>>;
  readonly separator?: Maybe<PermissionSeparatorType>;
  readonly type?: Maybe<PermissionListType>;
};

export const enum PermissionListType {
  Individual = 'Individual',
  Member = 'Member',
}

export const enum PermissionSeparatorType {
  Business = 'Business',
  Private = 'Private',
}

export type PermissionType = {
  readonly __typename?: 'PermissionType';
  readonly PERMISSION_ACCOUNT_DETAILS?: Maybe<Permission_Account_Details>;
  readonly PERMISSION_DASHBOARD?: Maybe<Permission_Dashboard>;
  readonly PERMISSION_MAKE_PAYMENTS?: Maybe<Permission_Make_Payments>;
  readonly PERMISSION_MY_NET_WORTH?: Maybe<Permission_My_Net_Worth>;
  readonly PERMISSION_MY_TEMPLATES?: Maybe<Permission_My_Templates>;
  readonly PERMISSION_PAYMENT_DETAILS?: Maybe<Permission_Payment_Details>;
  readonly PERMISSION_PAYMENT_LIST?: Maybe<Permission_Payment_List>;
  readonly PERMISSION_REQUISITES?: Maybe<Permission_Requisites>;
  readonly PERMISSION_SETTINGS_ACCOUNT?: Maybe<Permission_Settings_Account>;
  readonly PERMISSION_SETTINGS_CONTACT_DETAILS?: Maybe<Permission_Settings_Contact_Details>;
  readonly PERMISSION_SETTINGS_LOG_IN_DETAILS?: Maybe<Permission_Settings_Log_In_Details>;
  readonly PERMISSION_SETTINGS_SECURITY_LEVEL?: Maybe<Permission_Settings_Security_Level>;
  readonly PERMISSION_STATEMENTS?: Maybe<Permission_Statements>;
  readonly PERMISSION_TICKETS?: Maybe<Permission_Tickets>;
};

export type Permissions = {
  readonly __typename?: 'Permissions';
  readonly all?: Maybe<Scalars['JSON']['output']>;
  readonly display_name?: Maybe<Scalars['String']['output']>;
  readonly guard_name?: Maybe<Scalars['String']['output']>;
  readonly id?: Maybe<Scalars['ID']['output']>;
  readonly name?: Maybe<Scalars['String']['output']>;
  readonly type?: Maybe<Scalars['String']['output']>;
};

export type PivotTable = {
  readonly sync?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
};

export type PriceListFee = {
  readonly __typename?: 'PriceListFee';
  readonly created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  readonly fee_ranges?: Maybe<Scalars['JSON']['output']>;
  readonly fee_type?: Maybe<FeeType>;
  readonly fees?: Maybe<ReadonlyArray<Maybe<PriceListFeeCurrency>>>;
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
  readonly operation_type?: Maybe<OperationType>;
  readonly period?: Maybe<FeePeriod>;
  readonly price_list_id?: Maybe<Scalars['ID']['output']>;
  readonly scheduled?: Maybe<PriceListFeeScheduled>;
  readonly updated_at?: Maybe<Scalars['DateTimeUtc']['output']>;
};

export type PriceListFeeCurrency = {
  readonly __typename?: 'PriceListFeeCurrency';
  readonly currency_id: Scalars['ID']['output'];
  readonly fee?: Maybe<ReadonlyArray<Maybe<FeeItem>>>;
  readonly id: Scalars['ID']['output'];
  readonly price_list_fee_id: Scalars['ID']['output'];
};

export type PriceListFeeInput = {
  readonly fee_ranges?: InputMaybe<Scalars['JSON']['input']>;
  readonly fees?: InputMaybe<ReadonlyArray<PriceListFeesList>>;
  readonly name: Scalars['String']['input'];
  readonly operation_type_id: Scalars['ID']['input'];
  readonly period_id?: InputMaybe<Scalars['ID']['input']>;
  readonly price_list_id: Scalars['ID']['input'];
  readonly scheduled?: InputMaybe<PriceListFeeScheduledInput>;
  readonly type_id: Scalars['ID']['input'];
};

export type PriceListFeeItem = {
  readonly amount_from?: InputMaybe<Scalars['Int']['input']>;
  readonly amount_to?: InputMaybe<Scalars['Int']['input']>;
  readonly fee?: InputMaybe<Scalars['Int']['input']>;
  readonly mode: Scalars['String']['input'];
  readonly percent?: InputMaybe<Scalars['Int']['input']>;
};

export type PriceListFeeScheduled = {
  readonly __typename?: 'PriceListFeeScheduled';
  readonly end_date?: Maybe<Scalars['DateTimeUtc']['output']>;
  readonly end_date_id?: Maybe<Scalars['ID']['output']>;
  readonly recurrent_interval?: Maybe<Scalars['Int']['output']>;
  readonly starting_date?: Maybe<Scalars['DateTimeUtc']['output']>;
  readonly starting_date_id?: Maybe<Scalars['ID']['output']>;
};

export type PriceListFeeScheduledInput = {
  readonly end_date?: InputMaybe<Scalars['DateTimeUtc']['input']>;
  readonly end_date_id?: InputMaybe<Scalars['ID']['input']>;
  readonly recurrent_interval?: InputMaybe<Scalars['Int']['input']>;
  readonly starting_date?: InputMaybe<Scalars['DateTimeUtc']['input']>;
  readonly starting_date_id?: InputMaybe<Scalars['ID']['input']>;
};

export type PriceListFeesList = {
  readonly currency_id: Scalars['ID']['input'];
  readonly fee: ReadonlyArray<ReadonlyArray<InputMaybe<PriceListFeeItem>>>;
};

export type Project = {
  readonly __typename?: 'Project';
  readonly additional_fields_basic?: Maybe<Scalars['JSON']['output']>;
  readonly additional_fields_settings?: Maybe<Scalars['JSON']['output']>;
  readonly avatar?: Maybe<Files>;
  readonly client_url?: Maybe<Scalars['String']['output']>;
  readonly company?: Maybe<Company>;
  readonly created_at: Scalars['DateTimeUtc']['output'];
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly forgot_password_url?: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly login_url?: Maybe<Scalars['String']['output']>;
  readonly module?: Maybe<Module>;
  readonly name: Scalars['String']['output'];
  readonly project_api_settings?: Maybe<ReadonlyArray<Maybe<ProjectApiSetting>>>;
  readonly project_settings?: Maybe<ReadonlyArray<Maybe<ProjectSettings>>>;
  readonly sms_sender_name?: Maybe<Scalars['String']['output']>;
  readonly state?: Maybe<State>;
  readonly support_email?: Maybe<Scalars['String']['output']>;
  readonly updated_at: Scalars['DateTimeUtc']['output'];
  readonly url?: Maybe<Scalars['String']['output']>;
};

export type ProjectApiSetting = {
  readonly __typename?: 'ProjectApiSetting';
  readonly api_key?: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly is_active?: Maybe<Scalars['Boolean']['output']>;
  readonly password?: Maybe<Scalars['String']['output']>;
  readonly project: Project;
  readonly provider?: Maybe<ProviderType>;
  readonly wallet?: Maybe<Scalars['String']['output']>;
};

export type ProjectApiSettingPassword = {
  readonly __typename?: 'ProjectApiSettingPassword';
  readonly id: Scalars['ID']['output'];
  readonly password: Scalars['String']['output'];
};

export type ProjectPaginator = {
  readonly __typename?: 'ProjectPaginator';
  readonly data: ReadonlyArray<Project>;
  readonly paginatorInfo: PaginatorInfo;
};

export type ProjectSettings = {
  readonly __typename?: 'ProjectSettings';
  readonly applicant_type: ApplicantType;
  readonly commission_template?: Maybe<CommissionTemplate>;
  readonly group_role?: Maybe<GroupRole>;
  readonly group_type?: Maybe<GroupType>;
  readonly iban_provider?: Maybe<PaymentProviderIban>;
  readonly payment_provider?: Maybe<PaymentProvider>;
};

export type ProviderType = PaymentProvider | PaymentProviderIban;

export const enum ProviderTypeEnum {
  PaymentProvider = 'PaymentProvider',
  PaymentProviderIban = 'PaymentProviderIban',
}

export type Query = {
  readonly __typename?: 'Query';
  readonly account?: Maybe<Account>;
  readonly accountLimit?: Maybe<AccountLimit>;
  readonly accountLimits?: Maybe<AccountLimitPaginator>;
  readonly accountList?: Maybe<AccountPaginator>;
  readonly accountReachedLimit?: Maybe<AccountReachedLimit>;
  readonly accountReachedLimits?: Maybe<AccountReachedLimitPaginator>;
  readonly accountStatement?: Maybe<AccountStatement>;
  readonly accountStates: ReadonlyArray<AccountState>;
  readonly activeSessions?: Maybe<ActiveSessions>;
  readonly activityLogs?: Maybe<ActivityLogs>;
  readonly applicantAccounts?: Maybe<ReadonlyArray<ApplicantAccount>>;
  readonly applicantBankingAccess?: Maybe<ApplicantBankingAccess>;
  readonly applicantBankingAccesses?: Maybe<ApplicantBankingAccesses>;
  readonly applicantCompanies?: Maybe<ApplicantCompanyPaginator>;
  readonly applicantCompany?: Maybe<ApplicantCompany>;
  readonly applicantCompanyBusinessType?: Maybe<ApplicantCompanyBusinessTypePaginator>;
  readonly applicantCompanyLabel?: Maybe<ApplicantCompanyLabel>;
  readonly applicantCompanyLabels: ReadonlyArray<ApplicantCompanyLabel>;
  readonly applicantCompanyLabelsAvailable?: Maybe<ApplicantCompanyLabelPaginator>;
  readonly applicantCompanyModules: ReadonlyArray<ApplicantCompanyModules>;
  readonly applicantCompanyNote?: Maybe<ApplicantCompanyNotes>;
  readonly applicantCompanyNotes?: Maybe<ApplicantCompanyNotesPaginator>;
  readonly applicantCompanyRiskLevelHistory?: Maybe<ApplicantCompanyRiskLevelHistoryPaginator>;
  readonly applicantDevices?: Maybe<ReadonlyArray<ApplicantDevice>>;
  readonly applicantDocument?: Maybe<ApplicantDocument>;
  readonly applicantDocumentInternalNotes?: Maybe<ApplicantDocumentInternalNotePaginator>;
  readonly applicantDocumentTagCategories?: Maybe<ApplicantDocumentTagCategoryPaginator>;
  readonly applicantDocumentTags?: Maybe<ApplicantDocumentTagPaginator>;
  readonly applicantDocuments?: Maybe<ApplicantDocumentPaginator>;
  readonly applicantIndividual?: Maybe<ApplicantIndividual>;
  readonly applicantIndividualCompanyPosition?: Maybe<ApplicantIndividualCompanyPosition>;
  readonly applicantIndividualCompanyPositions?: Maybe<ApplicantIndividualCompanyPositionPaginator>;
  readonly applicantIndividualCompanyRelation?: Maybe<ApplicantIndividualCompanyRelation>;
  readonly applicantIndividualCompanyRelations?: Maybe<ApplicantIndividualCompanyRelationPaginator>;
  readonly applicantIndividualLabel?: Maybe<ApplicantIndividualLabel>;
  readonly applicantIndividualLabels: ReadonlyArray<ApplicantIndividualLabel>;
  readonly applicantIndividualLabelsAvailable?: Maybe<ApplicantIndividualLabelPaginator>;
  readonly applicantIndividualModules: ReadonlyArray<ApplicantIndividualModules>;
  readonly applicantIndividualNote?: Maybe<ApplicantIndividualNotes>;
  readonly applicantIndividualNotes?: Maybe<ApplicantIndividualNotesPaginator>;
  readonly applicantIndividuals?: Maybe<ApplicantIndividualPaginator>;
  readonly applicantKycLevel?: Maybe<ApplicantKycLevel>;
  readonly applicantKycLevels?: Maybe<ApplicantKycLevelPaginator>;
  readonly applicantLinkedCompanies: ReadonlyArray<ApplicantLinkedCompany>;
  readonly applicantProfile?: Maybe<ApplicantProfile>;
  readonly applicantRequisite?: Maybe<ApplicantDetailsRequisites>;
  readonly applicantRequisites: ReadonlyArray<ApplicantRequisites>;
  readonly applicantRiskLevel?: Maybe<ApplicantRiskLevel>;
  readonly applicantRiskLevelHistory?: Maybe<ApplicantRiskLevelHistoryPaginator>;
  readonly applicantRiskLevels?: Maybe<ApplicantRiskLevelPaginator>;
  readonly applicantState?: Maybe<ApplicantState>;
  readonly applicantStateReason?: Maybe<ApplicantStateReason>;
  readonly applicantStateReasons?: Maybe<ApplicantStateReasonPaginator>;
  readonly applicantStates?: Maybe<ApplicantStatePaginator>;
  readonly applicantStatus?: Maybe<ApplicantStatus>;
  readonly applicantStatuses?: Maybe<ApplicantStatusPaginator>;
  readonly applicantVerificationStatuses: ReadonlyArray<ApplicantVerificationStatus>;
  readonly applicant_module?: Maybe<ApplicantModules>;
  readonly applicant_modules?: Maybe<ApplicantModulesPaginator>;
  readonly authenticationLogs?: Maybe<AuthenticationLogs>;
  readonly authenticationMemberLogs?: Maybe<AuthenticationLogs>;
  readonly bankCorrespondent: BankCorrespondent;
  readonly bankCorrespondents?: Maybe<BankCorrespondentPaginator>;
  readonly businessActivities?: Maybe<BusinessActivityPaginator>;
  readonly businessActivity?: Maybe<BusinessActivity>;
  readonly clientList: ReadonlyArray<AccountClient>;
  readonly commissionPriceList?: Maybe<CommissionPriceList>;
  readonly commissionPriceLists?: Maybe<CommissionPriceListPaginator>;
  readonly commissionTemplate?: Maybe<CommissionTemplate>;
  readonly commissionTemplateLimit?: Maybe<CommissionTemplateLimit>;
  readonly commissionTemplateLimitActionType?: Maybe<CommissionTemplateLimitActionType>;
  readonly commissionTemplateLimitActionTypes?: Maybe<CommissionTemplateLimitActionTypePaginator>;
  readonly commissionTemplateLimitPeriod?: Maybe<CommissionTemplateLimitPeriod>;
  readonly commissionTemplateLimitPeriods?: Maybe<CommissionTemplateLimitPeriodPaginator>;
  readonly commissionTemplateLimitTransferDirection?: Maybe<CommissionTemplateLimitTransferDirection>;
  readonly commissionTemplateLimitTransferDirections?: Maybe<CommissionTemplateLimitTransferDirectionPaginator>;
  readonly commissionTemplateLimitType?: Maybe<CommissionTemplateLimitType>;
  readonly commissionTemplateLimitTypes?: Maybe<CommissionTemplateLimitTypePaginator>;
  readonly commissionTemplateLimits?: Maybe<CommissionTemplateLimitPaginator>;
  readonly commissionTemplates?: Maybe<CommissionTemplatePaginator>;
  readonly companies?: Maybe<CompanyPaginator>;
  readonly company?: Maybe<Company>;
  readonly companyModuleIbanProviderPassword?: Maybe<CompanyModuleIbanProviderPassword>;
  readonly companyModuleProviderPassword?: Maybe<CompanyModulePaymentProviderPassword>;
  readonly companyModules: ReadonlyArray<CompanyModule>;
  readonly countries?: Maybe<CountryPaginator>;
  readonly country?: Maybe<Country>;
  readonly currencies?: Maybe<CurrenciesPaginator>;
  readonly currency?: Maybe<Currencies>;
  readonly dashboardAccountsStatistic?: Maybe<ReadonlyArray<Maybe<DashboardAccountsStatistic>>>;
  readonly dashboardTicketsStatistic?: Maybe<ReadonlyArray<Maybe<DashboardTicketsStatistic>>>;
  readonly dashboardTransfersStatistic?: Maybe<ReadonlyArray<Maybe<DashboardTransfersStatistic>>>;
  readonly dashboardUsersStatistic?: Maybe<ReadonlyArray<Maybe<DashboardUsersStatistic>>>;
  readonly department?: Maybe<Department>;
  readonly departmentPosition?: Maybe<DepartmentPosition>;
  readonly departmentPositions?: Maybe<DepartmentPositionPaginator>;
  readonly departments?: Maybe<DepartmentPaginator>;
  readonly documentStates: ReadonlyArray<DocumentState>;
  readonly documentTypes: ReadonlyArray<DocumentType>;
  readonly downloadAccountStatementCsv?: Maybe<RawFile>;
  readonly downloadAccountStatementPdf?: Maybe<RawFile>;
  readonly downloadAccountStatementXls?: Maybe<RawFile>;
  readonly downloadApplicantRequisiteDetails?: Maybe<RawFile>;
  readonly downloadRequisiteDetails?: Maybe<RawFile>;
  readonly emailNotification?: Maybe<EmailNotification>;
  readonly emailNotifications?: Maybe<EmailNotificationPaginator>;
  readonly emailSmtp?: Maybe<EmailSmtp>;
  readonly emailSmtps: ReadonlyArray<EmailSmtp>;
  readonly emailTemplate?: Maybe<EmailTemplate>;
  readonly emailTemplateLayout?: Maybe<EmailTemplateLayout>;
  readonly emailTemplates: ReadonlyArray<EmailTemplate>;
  readonly employees: ReadonlyArray<Employee>;
  readonly feeDetails: Fee;
  readonly feeModes: ReadonlyArray<FeeMode>;
  readonly feePeriods: ReadonlyArray<FeePeriod>;
  readonly feeTypes: ReadonlyArray<FeeType>;
  readonly file?: Maybe<Files>;
  readonly files?: Maybe<FilesPaginator>;
  readonly getMatchedApplicantIndividuals: ReadonlyArray<ApplicantIndividualCompany>;
  readonly getMatchedUsers: ReadonlyArray<ApplicantIndividualCompany>;
  readonly getPaymentUrgencys: ReadonlyArray<PaymentUrgency>;
  readonly getTicketComments: ReadonlyArray<TicketComments>;
  readonly grantedBankingAccess?: Maybe<ApplicantBankingAccesses>;
  readonly groupList?: Maybe<GroupRoleViewPaginator>;
  readonly groupTypeList?: Maybe<GroupTypePaginator>;
  readonly group_type?: Maybe<GroupType>;
  readonly group_types: ReadonlyArray<GroupType>;
  readonly groups?: Maybe<GroupRolePaginator>;
  readonly kycTimeline?: Maybe<KycTimeline>;
  readonly kycTimelines?: Maybe<KycTimelines>;
  readonly language?: Maybe<Languages>;
  readonly languages?: Maybe<LanguagesPaginator>;
  readonly member?: Maybe<Members>;
  readonly memberAccessLimitation?: Maybe<MemberAccessLimitation>;
  readonly memberAccessLimitations?: Maybe<MemberAccessLimitationPaginator>;
  readonly memberProfile?: Maybe<MemberProfile>;
  readonly memberStatuses: ReadonlyArray<MemberStatus>;
  readonly members?: Maybe<MembersPaginator>;
  readonly module?: Maybe<Module>;
  readonly modules: ReadonlyArray<Module>;
  readonly modulesWithKyc?: Maybe<ReadonlyArray<Module>>;
  readonly operationTypes: ReadonlyArray<OperationType>;
  readonly owners: ReadonlyArray<ApplicantIndividual>;
  readonly payment?: Maybe<Payments>;
  readonly paymentBank?: Maybe<PaymentBank>;
  readonly paymentBanks?: Maybe<PaymentBankPaginator>;
  readonly paymentProvider?: Maybe<PaymentProvider>;
  readonly paymentProviderIban: PaymentProviderIban;
  readonly paymentProviderIbans?: Maybe<PaymentProviderIbanPaginator>;
  readonly paymentProviders?: Maybe<PaymentProviderPaginator>;
  readonly paymentStatuses: ReadonlyArray<PaymentStatus>;
  readonly paymentSystem?: Maybe<PaymentSystem>;
  readonly paymentSystems?: Maybe<PaymentSystemPaginator>;
  readonly paymentSystemsList: ReadonlyArray<PaymentSystem>;
  readonly payments?: Maybe<PaymentsPaginator>;
  readonly permission?: Maybe<Permissions>;
  readonly permissions?: Maybe<ReadonlyArray<Maybe<PermissionCategory>>>;
  readonly permissions_tree?: Maybe<Permissions>;
  readonly priceListFees: ReadonlyArray<PriceListFee>;
  readonly project?: Maybe<Project>;
  readonly projectApiSettingPassword?: Maybe<ProjectApiSettingPassword>;
  readonly projectApiSettings: ReadonlyArray<ProjectApiSetting>;
  readonly projects?: Maybe<ProjectPaginator>;
  readonly region: Region;
  readonly regions?: Maybe<RegionPaginator>;
  readonly requisite?: Maybe<Requisite>;
  readonly requisites: ReadonlyArray<Requisite>;
  readonly respondentFees: ReadonlyArray<RespondentFee>;
  readonly role?: Maybe<Role>;
  readonly roles?: Maybe<RolePaginator>;
  readonly sendApplicantRequisiteDetails?: Maybe<StatusType>;
  readonly sendRequisiteDetails?: Maybe<StatusType>;
  readonly senders?: Maybe<ReadonlyArray<Maybe<Sender>>>;
  readonly stateReasons: ReadonlyArray<StateReason>;
  readonly states: ReadonlyArray<State>;
  readonly ticket?: Maybe<Ticket>;
  readonly ticketComment?: Maybe<TicketComments>;
  readonly tickets?: Maybe<TicketPaginator>;
  readonly transferIncoming: TransferIncoming;
  readonly transferIncomingHistory?: Maybe<TransferIncomingHistoryPaginator>;
  readonly transferIncomings?: Maybe<TransferIncomingPaginator>;
  readonly transferIncomingsStatistic?: Maybe<ReadonlyArray<Maybe<TransferIncomingStatistic>>>;
  readonly transferOutgoing: TransferOutgoing;
  readonly transferOutgoingHistory?: Maybe<TransferOutgoingHistoryPaginator>;
  readonly transferOutgoings?: Maybe<TransferOutgoingPaginator>;
  readonly transferOutgoingsStatistic?: Maybe<ReadonlyArray<Maybe<TransferOutgoingStatistic>>>;
  readonly twoFactorAuth?: Maybe<TwoFactorAuthSettings>;
  readonly twoFactorsAuth?: Maybe<TwoFactorAuthSettingsPaginator>;
  readonly typeOfIndustries: ReadonlyArray<TypeOfIndustry>;
  readonly userAuthData: UserAuthResponse;
  readonly users?: Maybe<UsersPaginator>;
};

export type QueryAccountArgs = {
  id: Scalars['ID']['input'];
};

export type QueryAccountLimitArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryAccountLimitsArgs = {
  filter?: InputMaybe<QueryAccountLimitsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ReadonlyArray<QueryAccountLimitsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryAccountListArgs = {
  created_at?: InputMaybe<DateTimeRange>;
  filter?: InputMaybe<QueryAccountListFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ReadonlyArray<QueryAccountListOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryAccountReachedLimitArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryAccountReachedLimitsArgs = {
  filter?: InputMaybe<QueryAccountReachedLimitsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  hasAccount?: InputMaybe<QueryAccountReachedLimitsHasAccountWhereHasConditions>;
  orderBy?: InputMaybe<ReadonlyArray<QueryAccountReachedLimitsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<QueryAccountReachedLimitsWhereWhereConditions>;
};

export type QueryAccountStatementArgs = {
  account_id: Scalars['ID']['input'];
  created_at?: InputMaybe<DateTimeRange>;
};

export type QueryAccountStatesArgs = {
  orderBy?: InputMaybe<ReadonlyArray<QueryAccountStatesOrderByOrderByClause>>;
};

export type QueryActiveSessionsArgs = {
  count?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<QueryActiveSessionsStatic>;
};

export type QueryActivityLogsArgs = {
  count?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ReadonlyArray<OrderBy>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<QueryActivityLogsStatic>;
};

export type QueryApplicantAccountsArgs = {
  filter?: InputMaybe<QueryApplicantAccountsFilterFilterConditions>;
  orderBy?: InputMaybe<ReadonlyArray<QueryApplicantAccountsOrderByOrderByClause>>;
};

export type QueryApplicantBankingAccessArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryApplicantBankingAccessesArgs = {
  applicant_company_id: Scalars['ID']['input'];
  filter?: InputMaybe<QueryApplicantBankingAccessesFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ReadonlyArray<QueryApplicantBankingAccessesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryApplicantCompaniesArgs = {
  company?: InputMaybe<Sort>;
  created_at?: InputMaybe<DateTimeRange>;
  filter?: InputMaybe<QueryApplicantCompaniesFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<Sort>;
  hasBusinessType?: InputMaybe<QueryApplicantCompaniesHasBusinessTypeWhereHasConditions>;
  hasGroupRole?: InputMaybe<QueryApplicantCompaniesHasGroupRoleWhereHasConditions>;
  hasKycLevel?: InputMaybe<QueryApplicantCompaniesHasKycLevelWhereHasConditions>;
  hasOwner?: InputMaybe<QueryApplicantCompaniesHasOwnerWhereHasConditions>;
  hasRiskLevel?: InputMaybe<QueryApplicantCompaniesHasRiskLevelWhereHasConditions>;
  hasStateReason?: InputMaybe<QueryApplicantCompaniesHasStateReasonWhereHasConditions>;
  hasStatus?: InputMaybe<QueryApplicantCompaniesHasStatusWhereHasConditions>;
  orderBy?: InputMaybe<ReadonlyArray<QueryApplicantCompaniesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<QueryApplicantCompaniesWhereWhereConditions>;
};

export type QueryApplicantCompanyArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryApplicantCompanyBusinessTypeArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ReadonlyArray<QueryApplicantCompanyBusinessTypeOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<QueryApplicantCompanyBusinessTypeWhereWhereConditions>;
};

export type QueryApplicantCompanyLabelArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryApplicantCompanyLabelsArgs = {
  company_id?: InputMaybe<Scalars['ID']['input']>;
  orderBy?: InputMaybe<ReadonlyArray<QueryApplicantCompanyLabelsOrderByOrderByClause>>;
  where?: InputMaybe<QueryApplicantCompanyLabelsWhereWhereConditions>;
};

export type QueryApplicantCompanyLabelsAvailableArgs = {
  company_id?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ReadonlyArray<QueryApplicantCompanyLabelsAvailableOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryApplicantCompanyModulesArgs = {
  applicant_company_id: Scalars['ID']['input'];
};

export type QueryApplicantCompanyNoteArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryApplicantCompanyNotesArgs = {
  applicant_company_id?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ReadonlyArray<QueryApplicantCompanyNotesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryApplicantCompanyRiskLevelHistoryArgs = {
  applicant_company_id: Scalars['ID']['input'];
  filter?: InputMaybe<QueryApplicantCompanyRiskLevelHistoryFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ReadonlyArray<QueryApplicantCompanyRiskLevelHistoryOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<QueryApplicantCompanyRiskLevelHistoryWhereWhereConditions>;
};

export type QueryApplicantDocumentArgs = {
  id: Scalars['ID']['input'];
};

export type QueryApplicantDocumentInternalNotesArgs = {
  applicant_document_id: Scalars['ID']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryApplicantDocumentTagCategoriesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryApplicantDocumentTagsArgs = {
  filter?: InputMaybe<QueryApplicantDocumentTagsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ReadonlyArray<QueryApplicantDocumentTagsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryApplicantDocumentsArgs = {
  applicant_type: ApplicantType;
  created_at?: InputMaybe<DateTimeRange>;
  filter?: InputMaybe<QueryApplicantDocumentsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ReadonlyArray<QueryApplicantDocumentsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  update_at?: InputMaybe<DateTimeRange>;
};

export type QueryApplicantIndividualArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryApplicantIndividualCompanyPositionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryApplicantIndividualCompanyPositionsArgs = {
  filter?: InputMaybe<QueryApplicantIndividualCompanyPositionsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ReadonlyArray<QueryApplicantIndividualCompanyPositionsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryApplicantIndividualCompanyRelationArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryApplicantIndividualCompanyRelationsArgs = {
  filter?: InputMaybe<QueryApplicantIndividualCompanyRelationsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ReadonlyArray<QueryApplicantIndividualCompanyRelationsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryApplicantIndividualLabelArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryApplicantIndividualLabelsArgs = {
  applicant_id?: InputMaybe<Scalars['ID']['input']>;
  orderBy?: InputMaybe<ReadonlyArray<QueryApplicantIndividualLabelsOrderByOrderByClause>>;
  where?: InputMaybe<QueryApplicantIndividualLabelsWhereWhereConditions>;
};

export type QueryApplicantIndividualLabelsAvailableArgs = {
  applicant_id?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ReadonlyArray<QueryApplicantIndividualLabelsAvailableOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryApplicantIndividualModulesArgs = {
  applicant_individual_id: Scalars['ID']['input'];
};

export type QueryApplicantIndividualNoteArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryApplicantIndividualNotesArgs = {
  applicant_individual_id?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ReadonlyArray<QueryApplicantIndividualNotesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryApplicantIndividualsArgs = {
  company?: InputMaybe<Sort>;
  created_at?: InputMaybe<DateTimeRange>;
  filter?: InputMaybe<QueryApplicantIndividualsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<Sort>;
  orderBy?: InputMaybe<ReadonlyArray<QueryApplicantIndividualsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryApplicantKycLevelArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryApplicantKycLevelsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ReadonlyArray<QueryApplicantKycLevelsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<QueryApplicantKycLevelsWhereWhereConditions>;
};

export type QueryApplicantLinkedCompaniesArgs = {
  applicant_individual_id: Scalars['ID']['input'];
};

export type QueryApplicantRequisiteArgs = {
  account_number?: InputMaybe<Scalars['String']['input']>;
};

export type QueryApplicantRiskLevelArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryApplicantRiskLevelHistoryArgs = {
  applicant_id: Scalars['ID']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ReadonlyArray<QueryApplicantRiskLevelHistoryOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<QueryApplicantRiskLevelHistoryWhereWhereConditions>;
};

export type QueryApplicantRiskLevelsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ReadonlyArray<QueryApplicantRiskLevelsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<QueryApplicantRiskLevelsWhereWhereConditions>;
};

export type QueryApplicantStateArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryApplicantStateReasonArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryApplicantStateReasonsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ReadonlyArray<QueryApplicantStateReasonsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<QueryApplicantStateReasonsWhereWhereConditions>;
};

export type QueryApplicantStatesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ReadonlyArray<QueryApplicantStatesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<QueryApplicantStatesWhereWhereConditions>;
};

export type QueryApplicantStatusArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryApplicantStatusesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ReadonlyArray<QueryApplicantStatusesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<QueryApplicantStatusesWhereWhereConditions>;
};

export type QueryApplicant_ModuleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryApplicant_ModulesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ReadonlyArray<QueryApplicantModulesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<QueryApplicantModulesWhereWhereConditions>;
};

export type QueryAuthenticationLogsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ReadonlyArray<OrderBy>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<QueryAuthenticationLogsStatic>;
};

export type QueryAuthenticationMemberLogsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  member_id: Scalars['ID']['input'];
  orderBy?: InputMaybe<ReadonlyArray<OrderBy>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryBankCorrespondentArgs = {
  id: Scalars['ID']['input'];
};

export type QueryBankCorrespondentsArgs = {
  filter?: InputMaybe<QueryBankCorrespondentsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ReadonlyArray<QueryBankCorrespondentsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryBusinessActivitiesArgs = {
  filter?: InputMaybe<QueryBusinessActivitiesFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ReadonlyArray<QueryBusinessActivitiesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryBusinessActivityArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryClientListArgs = {
  group_type?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryCommissionPriceListArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryCommissionPriceListsArgs = {
  filter?: InputMaybe<QueryCommissionPriceListsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ReadonlyArray<QueryCommissionPriceListsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  paymentProviderName?: InputMaybe<Sort>;
};

export type QueryCommissionTemplateArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryCommissionTemplateLimitArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryCommissionTemplateLimitActionTypeArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryCommissionTemplateLimitActionTypesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ReadonlyArray<QueryCommissionTemplateLimitActionTypesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<QueryCommissionTemplateLimitActionTypesWhereWhereConditions>;
};

export type QueryCommissionTemplateLimitPeriodArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryCommissionTemplateLimitPeriodsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ReadonlyArray<QueryCommissionTemplateLimitPeriodsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<QueryCommissionTemplateLimitPeriodsWhereWhereConditions>;
};

export type QueryCommissionTemplateLimitTransferDirectionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryCommissionTemplateLimitTransferDirectionsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ReadonlyArray<QueryCommissionTemplateLimitTransferDirectionsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditions>;
};

export type QueryCommissionTemplateLimitTypeArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryCommissionTemplateLimitTypesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ReadonlyArray<QueryCommissionTemplateLimitTypesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<QueryCommissionTemplateLimitTypesWhereWhereConditions>;
};

export type QueryCommissionTemplateLimitsArgs = {
  filter?: InputMaybe<QueryCommissionTemplateLimitsFilterStatic>;
  first?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryCommissionTemplatesArgs = {
  filter?: InputMaybe<QueryCommissionTemplatesFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ReadonlyArray<QueryCommissionTemplatesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  paymentProviderName?: InputMaybe<Sort>;
};

export type QueryCompaniesArgs = {
  country?: InputMaybe<Sort>;
  created_at?: InputMaybe<DateTimeRange>;
  filter?: InputMaybe<QueryCompaniesFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  member_count?: InputMaybe<Sort>;
  orderBy?: InputMaybe<ReadonlyArray<QueryCompaniesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryCompanyArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryCompanyModuleIbanProviderPasswordArgs = {
  id: Scalars['ID']['input'];
};

export type QueryCompanyModuleProviderPasswordArgs = {
  id: Scalars['ID']['input'];
};

export type QueryCompanyModulesArgs = {
  company_id: Scalars['ID']['input'];
};

export type QueryCountriesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryCountryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryCurrenciesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryCurrencyArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryDashboardAccountsStatisticArgs = {
  created_at?: InputMaybe<DateTimeRange>;
  payment_provider_id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryDashboardTicketsStatisticArgs = {
  created_at?: InputMaybe<DateTimeRange>;
};

export type QueryDashboardTransfersStatisticArgs = {
  company_id?: InputMaybe<Scalars['ID']['input']>;
  created_at?: InputMaybe<DateTimeRange>;
  payment_bank_id?: InputMaybe<Scalars['ID']['input']>;
  payment_provider_id?: InputMaybe<Scalars['ID']['input']>;
  payment_system_id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryDashboardUsersStatisticArgs = {
  company_id?: InputMaybe<Scalars['ID']['input']>;
  created_at?: InputMaybe<DateTimeRange>;
  project_id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryDepartmentArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryDepartmentPositionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryDepartmentPositionsArgs = {
  company_id?: InputMaybe<Scalars['ID']['input']>;
  filter?: InputMaybe<QueryDepartmentPositionsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ReadonlyArray<QueryDepartmentPositionsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryDepartmentsArgs = {
  created_at?: InputMaybe<DateTimeRange>;
  filter?: InputMaybe<QueryDepartmentsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ReadonlyArray<QueryDepartmentsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryDownloadAccountStatementCsvArgs = {
  account_id: Scalars['ID']['input'];
  created_at?: InputMaybe<DateTimeRange>;
};

export type QueryDownloadAccountStatementPdfArgs = {
  account_id: Scalars['ID']['input'];
  created_at?: InputMaybe<DateTimeRange>;
};

export type QueryDownloadAccountStatementXlsArgs = {
  account_id: Scalars['ID']['input'];
  created_at?: InputMaybe<DateTimeRange>;
};

export type QueryDownloadApplicantRequisiteDetailsArgs = {
  account_id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryDownloadRequisiteDetailsArgs = {
  account_id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryEmailNotificationArgs = {
  client_id?: InputMaybe<Scalars['ID']['input']>;
  company_id: Scalars['ID']['input'];
  group_role_id: Scalars['ID']['input'];
  group_type_id: Scalars['ID']['input'];
};

export type QueryEmailNotificationsArgs = {
  created_at?: InputMaybe<DateTimeRange>;
  filter?: InputMaybe<QueryEmailNotificationsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ReadonlyArray<QueryEmailNotificationsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryEmailSmtpArgs = {
  id: Scalars['ID']['input'];
};

export type QueryEmailSmtpsArgs = {
  company_id: Scalars['ID']['input'];
  orderBy?: InputMaybe<ReadonlyArray<QueryEmailSmtpsOrderByOrderByClause>>;
};

export type QueryEmailTemplateArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryEmailTemplateLayoutArgs = {
  company_id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryEmailTemplatesArgs = {
  created_at?: InputMaybe<DateTimeRange>;
  filter?: InputMaybe<QueryEmailTemplatesFilterFilterConditions>;
  orderBy?: InputMaybe<ReadonlyArray<QueryEmailTemplatesOrderByOrderByClause>>;
};

export type QueryFeeDetailsArgs = {
  id: Scalars['ID']['input'];
};

export type QueryFeeTypesArgs = {
  filter?: InputMaybe<QueryFeeTypesFilterFilterConditions>;
};

export type QueryFileArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryFilesArgs = {
  filter?: InputMaybe<QueryFilesFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ReadonlyArray<QueryFilesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryGetMatchedApplicantIndividualsArgs = {
  applicant_company_id: Scalars['ID']['input'];
};

export type QueryGetMatchedUsersArgs = {
  applicant_company_id: Scalars['ID']['input'];
  filter?: InputMaybe<QueryGetMatchedUsersFilterFilterConditions>;
};

export type QueryGrantedBankingAccessArgs = {
  applicant_company_id: Scalars['ID']['input'];
  applicant_individual_id: Scalars['ID']['input'];
  filter?: InputMaybe<QueryGrantedBankingAccessFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ReadonlyArray<QueryGrantedBankingAccessOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryGroupListArgs = {
  filter?: InputMaybe<QueryGroupListFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ReadonlyArray<QueryGroupListOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryGroupTypeListArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  mode?: InputMaybe<GroupTypeMode>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryGroup_TypeArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryGroup_TypesArgs = {
  filter?: InputMaybe<QueryGroupTypesFilterFilterConditions>;
};

export type QueryGroupsArgs = {
  filter?: InputMaybe<QueryGroupsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ReadonlyArray<QueryGroupsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryKycTimelineArgs = {
  id: Scalars['ID']['input'];
};

export type QueryKycTimelinesArgs = {
  applicant_id: Scalars['ID']['input'];
  applicant_type: ApplicantType;
  company_id: Scalars['ID']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ReadonlyArray<QueryKycTimelinesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryLanguageArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryLanguagesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryMemberArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryMemberAccessLimitationArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryMemberAccessLimitationsArgs = {
  filter?: InputMaybe<QueryMemberAccessLimitationsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  member_id: Scalars['ID']['input'];
  orderBy?: InputMaybe<ReadonlyArray<QueryMemberAccessLimitationsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryMembersArgs = {
  companyName?: InputMaybe<Sort>;
  filter?: InputMaybe<QueryMembersFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ReadonlyArray<QueryMembersOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryModuleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryModulesArgs = {
  orderBy?: InputMaybe<ReadonlyArray<QueryModulesOrderByOrderByClause>>;
  where?: InputMaybe<QueryModulesWhereWhereConditions>;
};

export type QueryModulesWithKycArgs = {
  orderBy?: InputMaybe<ReadonlyArray<QueryModulesWithKycOrderByOrderByClause>>;
  where?: InputMaybe<QueryModulesWithKycWhereWhereConditions>;
};

export type QueryOperationTypesArgs = {
  filter?: InputMaybe<QueryOperationTypesFilterFilterConditions>;
};

export type QueryOwnersArgs = {
  orderBy?: InputMaybe<ReadonlyArray<QueryOwnersOrderByOrderByClause>>;
};

export type QueryPaymentArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryPaymentBankArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryPaymentBanksArgs = {
  filter?: InputMaybe<QueryPaymentBanksFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ReadonlyArray<QueryPaymentBanksOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<QueryPaymentBankCondition>;
};

export type QueryPaymentProviderArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryPaymentProviderIbanArgs = {
  id: Scalars['ID']['input'];
};

export type QueryPaymentProviderIbansArgs = {
  filter?: InputMaybe<QueryPaymentProviderIbansFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ReadonlyArray<QueryPaymentProviderIbansOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryPaymentProvidersArgs = {
  filter?: InputMaybe<QueryPaymentProvidersFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ReadonlyArray<QueryPaymentProvidersOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryPaymentStatusesArgs = {
  filter?: InputMaybe<QueryPaymentStatusesFilterFilterConditions>;
};

export type QueryPaymentSystemArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryPaymentSystemsArgs = {
  filter?: InputMaybe<QueryPaymentSystemsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ReadonlyArray<QueryPaymentSystemsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryPaymentsArgs = {
  AccountNumber?: InputMaybe<Sort>;
  created_at?: InputMaybe<DateTimeRange>;
  filter?: InputMaybe<QueryPaymentsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ReadonlyArray<QueryPaymentsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryPermissionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryPermissionsArgs = {
  where?: InputMaybe<QueryPermissionsWhereWhereConditions>;
};

export type QueryPriceListFeesArgs = {
  filter?: InputMaybe<QueryPriceListFeesFilterFilterConditions>;
};

export type QueryProjectArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryProjectApiSettingPasswordArgs = {
  id: Scalars['ID']['input'];
};

export type QueryProjectApiSettingsArgs = {
  project_id: Scalars['ID']['input'];
};

export type QueryProjectsArgs = {
  filter?: InputMaybe<QueryProjectsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryRegionArgs = {
  id: Scalars['ID']['input'];
};

export type QueryRegionsArgs = {
  filter?: InputMaybe<QueryRegionsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryRequisiteArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryRequisitesArgs = {
  filter?: InputMaybe<QueryRequisitesFilterFilterConditions>;
};

export type QueryRoleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryRolesArgs = {
  filter?: InputMaybe<QueryRolesFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groups_sort?: InputMaybe<Sort>;
  orderBy?: InputMaybe<ReadonlyArray<QueryRolesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type QuerySendApplicantRequisiteDetailsArgs = {
  account_id: Scalars['ID']['input'];
  email: Scalars['String']['input'];
};

export type QuerySendRequisiteDetailsArgs = {
  account_id: Scalars['ID']['input'];
  email: Scalars['String']['input'];
};

export type QueryTicketArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryTicketCommentArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryTicketsArgs = {
  created_at?: InputMaybe<DateTimeRange>;
  filter?: InputMaybe<QueryTicketsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ReadonlyArray<QueryTicketsOrderByRelationOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryTransferIncomingArgs = {
  id: Scalars['ID']['input'];
};

export type QueryTransferIncomingHistoryArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  transfer_id: Scalars['ID']['input'];
};

export type QueryTransferIncomingsArgs = {
  created_at?: InputMaybe<DateTimeRange>;
  filter?: InputMaybe<QueryTransferIncomingsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryTransferIncomingsStatisticArgs = {
  account_id?: InputMaybe<Scalars['ID']['input']>;
  company_id?: InputMaybe<Scalars['ID']['input']>;
  created_at?: InputMaybe<DateTimeRange>;
  payment_provider_id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryTransferOutgoingArgs = {
  id: Scalars['ID']['input'];
};

export type QueryTransferOutgoingHistoryArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  transfer_id: Scalars['ID']['input'];
};

export type QueryTransferOutgoingsArgs = {
  created_at?: InputMaybe<DateTimeRange>;
  filter?: InputMaybe<QueryTransferOutgoingsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryTransferOutgoingsStatisticArgs = {
  account_id?: InputMaybe<Scalars['ID']['input']>;
  company_id?: InputMaybe<Scalars['ID']['input']>;
  created_at?: InputMaybe<DateTimeRange>;
  payment_provider_id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryTwoFactorAuthArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryTwoFactorsAuthArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryUsersArgs = {
  filter?: InputMaybe<QueryUsersFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ReadonlyArray<QueryUsersOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryAccountLimitsFilterFilterConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<QueryAccountLimitsFilterFilterConditions>>;
  readonly OR?: InputMaybe<ReadonlyArray<QueryAccountLimitsFilterFilterConditions>>;
  readonly column?: InputMaybe<QueryAccountLimitsFilterStatic>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export const enum QueryAccountLimitsFilterStatic {
  AccountId = 'ACCOUNT_ID',
  HasCommissionTemplateLimitActionTypeMixedIdOrName = 'HAS_COMMISSION_TEMPLATE_LIMIT_ACTION_TYPE_MIXED_ID_OR_NAME',
  HasCommissionTemplateLimitPeriodMixedIdOrName = 'HAS_COMMISSION_TEMPLATE_LIMIT_PERIOD_MIXED_ID_OR_NAME',
  HasCommissionTemplateLimitTransferDirectionMixedIdOrName = 'HAS_COMMISSION_TEMPLATE_LIMIT_TRANSFER_DIRECTION_MIXED_ID_OR_NAME',
  HasCommissionTemplateLimitTypeMixedIdOrName = 'HAS_COMMISSION_TEMPLATE_LIMIT_TYPE_MIXED_ID_OR_NAME',
  HasCurrencyMixedIdOrName = 'HAS_CURRENCY_MIXED_ID_OR_NAME',
  PeriodCount = 'PERIOD_COUNT',
}

export type QueryAccountLimitsFilterStaticInput = {
  readonly account_id?: InputMaybe<Scalars['ID']['input']>;
  readonly hasCommissionTemplateLimitActionTypeMixedIdOrName?: InputMaybe<Scalars['Mixed']['input']>;
  readonly hasCommissionTemplateLimitPeriodMixedIdOrName?: InputMaybe<Scalars['Mixed']['input']>;
  readonly hasCommissionTemplateLimitTransferDirectionMixedIdOrName?: InputMaybe<Scalars['Mixed']['input']>;
  readonly hasCommissionTemplateLimitTypeMixedIdOrName?: InputMaybe<Scalars['Mixed']['input']>;
  readonly hasCurrencyMixedIdOrName?: InputMaybe<Scalars['Mixed']['input']>;
  readonly period_count?: InputMaybe<Scalars['ID']['input']>;
};

export const enum QueryAccountLimitsFilterStaticOperator {
  AccountId = 'account_id',
  HasCommissionTemplateLimitActionTypeMixedIdOrName = 'hasCommissionTemplateLimitActionTypeMixedIdOrName',
  HasCommissionTemplateLimitPeriodMixedIdOrName = 'hasCommissionTemplateLimitPeriodMixedIdOrName',
  HasCommissionTemplateLimitTransferDirectionMixedIdOrName = 'hasCommissionTemplateLimitTransferDirectionMixedIdOrName',
  HasCommissionTemplateLimitTypeMixedIdOrName = 'hasCommissionTemplateLimitTypeMixedIdOrName',
  HasCurrencyMixedIdOrName = 'hasCurrencyMixedIdOrName',
  PeriodCount = 'period_count',
}

export const enum QueryAccountLimitsFilterStaticType {
  AccountId = 'account_id',
  HasCommissionTemplateLimitActionTypeMixedIdOrName = 'hasCommissionTemplateLimitActionTypeMixedIdOrName',
  HasCommissionTemplateLimitPeriodMixedIdOrName = 'hasCommissionTemplateLimitPeriodMixedIdOrName',
  HasCommissionTemplateLimitTransferDirectionMixedIdOrName = 'hasCommissionTemplateLimitTransferDirectionMixedIdOrName',
  HasCommissionTemplateLimitTypeMixedIdOrName = 'hasCommissionTemplateLimitTypeMixedIdOrName',
  HasCurrencyMixedIdOrName = 'hasCurrencyMixedIdOrName',
  PeriodCount = 'period_count',
}

export const enum QueryAccountLimitsOrderByColumn {
  Id = 'ID',
}

export type QueryAccountLimitsOrderByOrderByClause = {
  readonly column: QueryAccountLimitsOrderByColumn;
  readonly order: SortOrder;
};

export type QueryAccountListFilterFilterConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<QueryAccountListFilterFilterConditions>>;
  readonly OR?: InputMaybe<ReadonlyArray<QueryAccountListFilterFilterConditions>>;
  readonly column?: InputMaybe<QueryAccountListFilterStatic>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export const enum QueryAccountListFilterStatic {
  AccountStateId = 'ACCOUNT_STATE_ID',
  CurrencyId = 'CURRENCY_ID',
  GroupTypeId = 'GROUP_TYPE_ID',
  HasClientableMixedIdOrFullname = 'HAS_CLIENTABLE_MIXED_ID_OR_FULLNAME',
  HasCommissionTemplateMixedIdOrFullname = 'HAS_COMMISSION_TEMPLATE_MIXED_ID_OR_FULLNAME',
  HasCompanyMixedIdOrName = 'HAS_COMPANY_MIXED_ID_OR_NAME',
  HasGroupRoleMixedIdOrName = 'HAS_GROUP_ROLE_MIXED_ID_OR_NAME',
  HasMemberMixedIdOrFullname = 'HAS_MEMBER_MIXED_ID_OR_FULLNAME',
  HasOwnerMixedIdOrFullname = 'HAS_OWNER_MIXED_ID_OR_FULLNAME',
  HasPaymentProviderMixedIdOrName = 'HAS_PAYMENT_PROVIDER_MIXED_ID_OR_NAME',
  HasPaymentSystemMixedIdOrName = 'HAS_PAYMENT_SYSTEM_MIXED_ID_OR_NAME',
  IsPrimary = 'IS_PRIMARY',
  MixedAccountNumberOrAccountName = 'MIXED_ACCOUNT_NUMBER_OR_ACCOUNT_NAME',
}

export type QueryAccountListFilterStaticInput = {
  readonly MixedAccountNumberOrAccountName?: InputMaybe<Scalars['String']['input']>;
  readonly account_state_id?: InputMaybe<Scalars['ID']['input']>;
  readonly currency_id?: InputMaybe<Scalars['ID']['input']>;
  readonly group_type_id?: InputMaybe<Scalars['ID']['input']>;
  readonly hasClientableMixedIdOrFullname?: InputMaybe<Scalars['Mixed']['input']>;
  readonly hasCommissionTemplateMixedIdOrFullname?: InputMaybe<Scalars['Mixed']['input']>;
  readonly hasCompanyMixedIdOrName?: InputMaybe<Scalars['Mixed']['input']>;
  readonly hasGroupRoleMixedIdOrName?: InputMaybe<Scalars['Mixed']['input']>;
  readonly hasMemberMixedIdOrFullname?: InputMaybe<Scalars['Mixed']['input']>;
  readonly hasOwnerMixedIdOrFullname?: InputMaybe<Scalars['Mixed']['input']>;
  readonly hasPaymentProviderMixedIdOrName?: InputMaybe<Scalars['Mixed']['input']>;
  readonly hasPaymentSystemMixedIdOrName?: InputMaybe<Scalars['Mixed']['input']>;
  readonly is_primary?: InputMaybe<Scalars['Boolean']['input']>;
};

export const enum QueryAccountListFilterStaticOperator {
  MixedAccountNumberOrAccountName = 'MixedAccountNumberOrAccountName',
  AccountStateId = 'account_state_id',
  CurrencyId = 'currency_id',
  GroupTypeId = 'group_type_id',
  HasClientableMixedIdOrFullname = 'hasClientableMixedIdOrFullname',
  HasCommissionTemplateMixedIdOrFullname = 'hasCommissionTemplateMixedIdOrFullname',
  HasCompanyMixedIdOrName = 'hasCompanyMixedIdOrName',
  HasGroupRoleMixedIdOrName = 'hasGroupRoleMixedIdOrName',
  HasMemberMixedIdOrFullname = 'hasMemberMixedIdOrFullname',
  HasOwnerMixedIdOrFullname = 'hasOwnerMixedIdOrFullname',
  HasPaymentProviderMixedIdOrName = 'hasPaymentProviderMixedIdOrName',
  HasPaymentSystemMixedIdOrName = 'hasPaymentSystemMixedIdOrName',
  IsPrimary = 'is_primary',
}

export const enum QueryAccountListFilterStaticType {
  MixedAccountNumberOrAccountName = 'MixedAccountNumberOrAccountName',
  AccountStateId = 'account_state_id',
  CurrencyId = 'currency_id',
  GroupTypeId = 'group_type_id',
  HasClientableMixedIdOrFullname = 'hasClientableMixedIdOrFullname',
  HasCommissionTemplateMixedIdOrFullname = 'hasCommissionTemplateMixedIdOrFullname',
  HasCompanyMixedIdOrName = 'hasCompanyMixedIdOrName',
  HasGroupRoleMixedIdOrName = 'hasGroupRoleMixedIdOrName',
  HasMemberMixedIdOrFullname = 'hasMemberMixedIdOrFullname',
  HasOwnerMixedIdOrFullname = 'hasOwnerMixedIdOrFullname',
  HasPaymentProviderMixedIdOrName = 'hasPaymentProviderMixedIdOrName',
  HasPaymentSystemMixedIdOrName = 'hasPaymentSystemMixedIdOrName',
  IsPrimary = 'is_primary',
}

export const enum QueryAccountListOrderByColumn {
  CreatedAt = 'CREATED_AT',
  Id = 'ID',
}

export type QueryAccountListOrderByOrderByClause = {
  readonly column: QueryAccountListOrderByColumn;
  readonly order: SortOrder;
};

export type QueryAccountReachedLimitsFilterFilterConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<QueryAccountReachedLimitsFilterFilterConditions>>;
  readonly OR?: InputMaybe<ReadonlyArray<QueryAccountReachedLimitsFilterFilterConditions>>;
  readonly column?: InputMaybe<QueryAccountReachedLimitsFilterStatic>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export const enum QueryAccountReachedLimitsFilterStatic {
  AccountId = 'ACCOUNT_ID',
  Amount = 'AMOUNT',
  LimitCurrency = 'LIMIT_CURRENCY',
  LimitType = 'LIMIT_TYPE',
  LimitValue = 'LIMIT_VALUE',
  Period = 'PERIOD',
  TransferDirection = 'TRANSFER_DIRECTION',
}

export type QueryAccountReachedLimitsFilterStaticInput = {
  readonly account_id?: InputMaybe<Scalars['ID']['input']>;
  readonly amount?: InputMaybe<Scalars['Float']['input']>;
  readonly limit_currency?: InputMaybe<Scalars['String']['input']>;
  readonly limit_type?: InputMaybe<Scalars['String']['input']>;
  readonly limit_value?: InputMaybe<Scalars['String']['input']>;
  readonly period?: InputMaybe<Scalars['Int']['input']>;
  readonly transfer_direction?: InputMaybe<Scalars['String']['input']>;
};

export const enum QueryAccountReachedLimitsFilterStaticOperator {
  AccountId = 'account_id',
  Amount = 'amount',
  LimitCurrency = 'limit_currency',
  LimitType = 'limit_type',
  LimitValue = 'limit_value',
  Period = 'period',
  TransferDirection = 'transfer_direction',
}

export const enum QueryAccountReachedLimitsFilterStaticType {
  AccountId = 'account_id',
  Amount = 'amount',
  LimitCurrency = 'limit_currency',
  LimitType = 'limit_type',
  LimitValue = 'limit_value',
  Period = 'period',
  TransferDirection = 'transfer_direction',
}

export const enum QueryAccountReachedLimitsHasAccountColumn {
  Id = 'ID',
  Name = 'NAME',
}

export type QueryAccountReachedLimitsHasAccountWhereHasConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<QueryAccountReachedLimitsHasAccountWhereHasConditions>>;
  readonly HAS?: InputMaybe<QueryAccountReachedLimitsHasAccountWhereHasConditionsRelation>;
  readonly OR?: InputMaybe<ReadonlyArray<QueryAccountReachedLimitsHasAccountWhereHasConditions>>;
  readonly column?: InputMaybe<QueryAccountReachedLimitsHasAccountColumn>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export type QueryAccountReachedLimitsHasAccountWhereHasConditionsRelation = {
  readonly amount?: InputMaybe<Scalars['Int']['input']>;
  readonly condition?: InputMaybe<QueryAccountReachedLimitsHasAccountWhereHasConditions>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly relation: Scalars['String']['input'];
};

export const enum QueryAccountReachedLimitsOrderByColumn {
  Id = 'ID',
}

export type QueryAccountReachedLimitsOrderByOrderByClause = {
  readonly column: QueryAccountReachedLimitsOrderByColumn;
  readonly order: SortOrder;
};

export const enum QueryAccountReachedLimitsWhereColumn {
  AccountId = 'ACCOUNT_ID',
  Amount = 'AMOUNT',
  ClientName = 'CLIENT_NAME',
  ClientType = 'CLIENT_TYPE',
  GroupType = 'GROUP_TYPE',
  LimitCurrency = 'LIMIT_CURRENCY',
  LimitType = 'LIMIT_TYPE',
  LimitValue = 'LIMIT_VALUE',
  Period = 'PERIOD',
  TransferDirection = 'TRANSFER_DIRECTION',
}

export type QueryAccountReachedLimitsWhereWhereConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<QueryAccountReachedLimitsWhereWhereConditions>>;
  readonly HAS?: InputMaybe<QueryAccountReachedLimitsWhereWhereConditionsRelation>;
  readonly OR?: InputMaybe<ReadonlyArray<QueryAccountReachedLimitsWhereWhereConditions>>;
  readonly column?: InputMaybe<QueryAccountReachedLimitsWhereColumn>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export type QueryAccountReachedLimitsWhereWhereConditionsRelation = {
  readonly amount?: InputMaybe<Scalars['Int']['input']>;
  readonly condition?: InputMaybe<QueryAccountReachedLimitsWhereWhereConditions>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly relation: Scalars['String']['input'];
};

export const enum QueryAccountStatesOrderByColumn {
  Id = 'ID',
  Name = 'NAME',
}

export type QueryAccountStatesOrderByOrderByClause = {
  readonly column: QueryAccountStatesOrderByColumn;
  readonly order: SortOrder;
};

export type QueryActiveSessionsStatic = {
  readonly company?: InputMaybe<Scalars['String']['input']>;
  readonly created_at?: InputMaybe<Scalars['Date']['input']>;
  readonly group?: InputMaybe<Scalars['String']['input']>;
  readonly provider?: InputMaybe<Scalars['String']['input']>;
};

export type QueryActivityLogsStatic = {
  readonly company?: InputMaybe<Scalars['String']['input']>;
  readonly created_at?: InputMaybe<Scalars['Date']['input']>;
  readonly domain?: InputMaybe<Scalars['String']['input']>;
  readonly group?: InputMaybe<Scalars['String']['input']>;
  readonly member?: InputMaybe<Scalars['String']['input']>;
};

export type QueryApplicantAccountsFilterFilterConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<QueryApplicantAccountsFilterFilterConditions>>;
  readonly OR?: InputMaybe<ReadonlyArray<QueryApplicantAccountsFilterFilterConditions>>;
  readonly column?: InputMaybe<QueryApplicantAccountsFilterStatic>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export const enum QueryApplicantAccountsFilterStatic {
  IsShow = 'IS_SHOW',
}

export type QueryApplicantAccountsFilterStaticInput = {
  readonly is_show?: InputMaybe<Scalars['Boolean']['input']>;
};

export const enum QueryApplicantAccountsFilterStaticOperator {
  IsShow = 'is_show',
}

export const enum QueryApplicantAccountsFilterStaticType {
  IsShow = 'is_show',
}

export const enum QueryApplicantAccountsOrderByColumn {
  CurrentBalance = 'CURRENT_BALANCE',
  Id = 'ID',
}

export type QueryApplicantAccountsOrderByOrderByClause = {
  readonly column: QueryApplicantAccountsOrderByColumn;
  readonly order: SortOrder;
};

export type QueryApplicantBankingAccessesFilterFilterConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<QueryApplicantBankingAccessesFilterFilterConditions>>;
  readonly OR?: InputMaybe<ReadonlyArray<QueryApplicantBankingAccessesFilterFilterConditions>>;
  readonly column?: InputMaybe<QueryApplicantBankingAccessesFilterStatic>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export const enum QueryApplicantBankingAccessesFilterStatic {
  GrantAccess = 'GRANT_ACCESS',
  MemberId = 'MEMBER_ID',
}

export type QueryApplicantBankingAccessesFilterStaticInput = {
  readonly grant_access?: InputMaybe<Scalars['Boolean']['input']>;
  readonly member_id?: InputMaybe<Scalars['ID']['input']>;
};

export const enum QueryApplicantBankingAccessesFilterStaticOperator {
  GrantAccess = 'grant_access',
  MemberId = 'member_id',
}

export const enum QueryApplicantBankingAccessesFilterStaticType {
  GrantAccess = 'grant_access',
  MemberId = 'member_id',
}

export const enum QueryApplicantBankingAccessesOrderByColumn {
  ApplicantCompanyId = 'APPLICANT_COMPANY_ID',
  ApplicantIndividualId = 'APPLICANT_INDIVIDUAL_ID',
  Id = 'ID',
  MemberId = 'MEMBER_ID',
}

export type QueryApplicantBankingAccessesOrderByOrderByClause = {
  readonly column: QueryApplicantBankingAccessesOrderByColumn;
  readonly order: SortOrder;
};

export type QueryApplicantCompaniesFilterFilterConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<QueryApplicantCompaniesFilterFilterConditions>>;
  readonly OR?: InputMaybe<ReadonlyArray<QueryApplicantCompaniesFilterFilterConditions>>;
  readonly column?: InputMaybe<QueryApplicantCompaniesFilterStatic>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export const enum QueryApplicantCompaniesFilterStatic {
  AccountManagerMemberId = 'ACCOUNT_MANAGER_MEMBER_ID',
  CompanyId = 'COMPANY_ID',
  Email = 'EMAIL',
  HasBusinessTypeMixedIdOrName = 'HAS_BUSINESS_TYPE_MIXED_ID_OR_NAME',
  HasGroupRoleMixedIdOrName = 'HAS_GROUP_ROLE_MIXED_ID_OR_NAME',
  HasKycLevelMixedIdOrName = 'HAS_KYC_LEVEL_MIXED_ID_OR_NAME',
  HasModulesFilterById = 'HAS_MODULES_FILTER_BY_ID',
  HasOwnerMixedIdOrFullname = 'HAS_OWNER_MIXED_ID_OR_FULLNAME',
  HasRiskLevelMixedIdOrName = 'HAS_RISK_LEVEL_MIXED_ID_OR_NAME',
  HasStateReasonMixedIdOrName = 'HAS_STATE_REASON_MIXED_ID_OR_NAME',
  HasStatusFilterById = 'HAS_STATUS_FILTER_BY_ID',
  HasStatusMixedIdOrName = 'HAS_STATUS_MIXED_ID_OR_NAME',
  Id = 'ID',
  Name = 'NAME',
  ProjectId = 'PROJECT_ID',
  Url = 'URL',
}

export type QueryApplicantCompaniesFilterStaticInput = {
  readonly account_manager_member_id?: InputMaybe<Scalars['ID']['input']>;
  readonly company_id?: InputMaybe<Scalars['ID']['input']>;
  readonly email?: InputMaybe<Scalars['String']['input']>;
  readonly hasBusinessTypeMixedIdOrName?: InputMaybe<Scalars['Mixed']['input']>;
  readonly hasGroupRoleMixedIdOrName?: InputMaybe<Scalars['Mixed']['input']>;
  readonly hasKycLevelMixedIdOrName?: InputMaybe<Scalars['Mixed']['input']>;
  readonly hasModulesFilterById?: InputMaybe<Scalars['ID']['input']>;
  readonly hasOwnerMixedIdOrFullname?: InputMaybe<Scalars['Mixed']['input']>;
  readonly hasRiskLevelMixedIdOrName?: InputMaybe<Scalars['Mixed']['input']>;
  readonly hasStateReasonMixedIdOrName?: InputMaybe<Scalars['Mixed']['input']>;
  readonly hasStatusFilterById?: InputMaybe<Scalars['ID']['input']>;
  readonly hasStatusMixedIdOrName?: InputMaybe<Scalars['Mixed']['input']>;
  readonly id?: InputMaybe<Scalars['ID']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
  readonly project_id?: InputMaybe<Scalars['ID']['input']>;
  readonly url?: InputMaybe<Scalars['String']['input']>;
};

export const enum QueryApplicantCompaniesFilterStaticOperator {
  AccountManagerMemberId = 'account_manager_member_id',
  CompanyId = 'company_id',
  Email = 'email',
  HasBusinessTypeMixedIdOrName = 'hasBusinessTypeMixedIdOrName',
  HasGroupRoleMixedIdOrName = 'hasGroupRoleMixedIdOrName',
  HasKycLevelMixedIdOrName = 'hasKycLevelMixedIdOrName',
  HasModulesFilterById = 'hasModulesFilterById',
  HasOwnerMixedIdOrFullname = 'hasOwnerMixedIdOrFullname',
  HasRiskLevelMixedIdOrName = 'hasRiskLevelMixedIdOrName',
  HasStateReasonMixedIdOrName = 'hasStateReasonMixedIdOrName',
  HasStatusFilterById = 'hasStatusFilterById',
  HasStatusMixedIdOrName = 'hasStatusMixedIdOrName',
  Id = 'id',
  Name = 'name',
  ProjectId = 'project_id',
  Url = 'url',
}

export const enum QueryApplicantCompaniesFilterStaticType {
  AccountManagerMemberId = 'account_manager_member_id',
  CompanyId = 'company_id',
  Email = 'email',
  HasBusinessTypeMixedIdOrName = 'hasBusinessTypeMixedIdOrName',
  HasGroupRoleMixedIdOrName = 'hasGroupRoleMixedIdOrName',
  HasKycLevelMixedIdOrName = 'hasKycLevelMixedIdOrName',
  HasModulesFilterById = 'hasModulesFilterById',
  HasOwnerMixedIdOrFullname = 'hasOwnerMixedIdOrFullname',
  HasRiskLevelMixedIdOrName = 'hasRiskLevelMixedIdOrName',
  HasStateReasonMixedIdOrName = 'hasStateReasonMixedIdOrName',
  HasStatusFilterById = 'hasStatusFilterById',
  HasStatusMixedIdOrName = 'hasStatusMixedIdOrName',
  Id = 'id',
  Name = 'name',
  ProjectId = 'project_id',
  Url = 'url',
}

export const enum QueryApplicantCompaniesHasBusinessTypeColumn {
  Id = 'ID',
  Name = 'NAME',
}

export type QueryApplicantCompaniesHasBusinessTypeWhereHasConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<QueryApplicantCompaniesHasBusinessTypeWhereHasConditions>>;
  readonly HAS?: InputMaybe<QueryApplicantCompaniesHasBusinessTypeWhereHasConditionsRelation>;
  readonly OR?: InputMaybe<ReadonlyArray<QueryApplicantCompaniesHasBusinessTypeWhereHasConditions>>;
  readonly column?: InputMaybe<QueryApplicantCompaniesHasBusinessTypeColumn>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export type QueryApplicantCompaniesHasBusinessTypeWhereHasConditionsRelation = {
  readonly amount?: InputMaybe<Scalars['Int']['input']>;
  readonly condition?: InputMaybe<QueryApplicantCompaniesHasBusinessTypeWhereHasConditions>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly relation: Scalars['String']['input'];
};

export const enum QueryApplicantCompaniesHasGroupRoleColumn {
  Id = 'ID',
  Name = 'NAME',
}

export type QueryApplicantCompaniesHasGroupRoleWhereHasConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<QueryApplicantCompaniesHasGroupRoleWhereHasConditions>>;
  readonly HAS?: InputMaybe<QueryApplicantCompaniesHasGroupRoleWhereHasConditionsRelation>;
  readonly OR?: InputMaybe<ReadonlyArray<QueryApplicantCompaniesHasGroupRoleWhereHasConditions>>;
  readonly column?: InputMaybe<QueryApplicantCompaniesHasGroupRoleColumn>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export type QueryApplicantCompaniesHasGroupRoleWhereHasConditionsRelation = {
  readonly amount?: InputMaybe<Scalars['Int']['input']>;
  readonly condition?: InputMaybe<QueryApplicantCompaniesHasGroupRoleWhereHasConditions>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly relation: Scalars['String']['input'];
};

export const enum QueryApplicantCompaniesHasKycLevelColumn {
  Id = 'ID',
  Name = 'NAME',
}

export type QueryApplicantCompaniesHasKycLevelWhereHasConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<QueryApplicantCompaniesHasKycLevelWhereHasConditions>>;
  readonly HAS?: InputMaybe<QueryApplicantCompaniesHasKycLevelWhereHasConditionsRelation>;
  readonly OR?: InputMaybe<ReadonlyArray<QueryApplicantCompaniesHasKycLevelWhereHasConditions>>;
  readonly column?: InputMaybe<QueryApplicantCompaniesHasKycLevelColumn>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export type QueryApplicantCompaniesHasKycLevelWhereHasConditionsRelation = {
  readonly amount?: InputMaybe<Scalars['Int']['input']>;
  readonly condition?: InputMaybe<QueryApplicantCompaniesHasKycLevelWhereHasConditions>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly relation: Scalars['String']['input'];
};

export const enum QueryApplicantCompaniesHasOwnerColumn {
  Fullname = 'FULLNAME',
  Id = 'ID',
}

export type QueryApplicantCompaniesHasOwnerWhereHasConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<QueryApplicantCompaniesHasOwnerWhereHasConditions>>;
  readonly HAS?: InputMaybe<QueryApplicantCompaniesHasOwnerWhereHasConditionsRelation>;
  readonly OR?: InputMaybe<ReadonlyArray<QueryApplicantCompaniesHasOwnerWhereHasConditions>>;
  readonly column?: InputMaybe<QueryApplicantCompaniesHasOwnerColumn>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export type QueryApplicantCompaniesHasOwnerWhereHasConditionsRelation = {
  readonly amount?: InputMaybe<Scalars['Int']['input']>;
  readonly condition?: InputMaybe<QueryApplicantCompaniesHasOwnerWhereHasConditions>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly relation: Scalars['String']['input'];
};

export const enum QueryApplicantCompaniesHasRiskLevelColumn {
  Id = 'ID',
  Name = 'NAME',
}

export type QueryApplicantCompaniesHasRiskLevelWhereHasConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<QueryApplicantCompaniesHasRiskLevelWhereHasConditions>>;
  readonly HAS?: InputMaybe<QueryApplicantCompaniesHasRiskLevelWhereHasConditionsRelation>;
  readonly OR?: InputMaybe<ReadonlyArray<QueryApplicantCompaniesHasRiskLevelWhereHasConditions>>;
  readonly column?: InputMaybe<QueryApplicantCompaniesHasRiskLevelColumn>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export type QueryApplicantCompaniesHasRiskLevelWhereHasConditionsRelation = {
  readonly amount?: InputMaybe<Scalars['Int']['input']>;
  readonly condition?: InputMaybe<QueryApplicantCompaniesHasRiskLevelWhereHasConditions>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly relation: Scalars['String']['input'];
};

export const enum QueryApplicantCompaniesHasStateReasonColumn {
  Id = 'ID',
  Name = 'NAME',
}

export type QueryApplicantCompaniesHasStateReasonWhereHasConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<QueryApplicantCompaniesHasStateReasonWhereHasConditions>>;
  readonly HAS?: InputMaybe<QueryApplicantCompaniesHasStateReasonWhereHasConditionsRelation>;
  readonly OR?: InputMaybe<ReadonlyArray<QueryApplicantCompaniesHasStateReasonWhereHasConditions>>;
  readonly column?: InputMaybe<QueryApplicantCompaniesHasStateReasonColumn>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export type QueryApplicantCompaniesHasStateReasonWhereHasConditionsRelation = {
  readonly amount?: InputMaybe<Scalars['Int']['input']>;
  readonly condition?: InputMaybe<QueryApplicantCompaniesHasStateReasonWhereHasConditions>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly relation: Scalars['String']['input'];
};

export const enum QueryApplicantCompaniesHasStatusColumn {
  Id = 'ID',
  Name = 'NAME',
}

export type QueryApplicantCompaniesHasStatusWhereHasConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<QueryApplicantCompaniesHasStatusWhereHasConditions>>;
  readonly HAS?: InputMaybe<QueryApplicantCompaniesHasStatusWhereHasConditionsRelation>;
  readonly OR?: InputMaybe<ReadonlyArray<QueryApplicantCompaniesHasStatusWhereHasConditions>>;
  readonly column?: InputMaybe<QueryApplicantCompaniesHasStatusColumn>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export type QueryApplicantCompaniesHasStatusWhereHasConditionsRelation = {
  readonly amount?: InputMaybe<Scalars['Int']['input']>;
  readonly condition?: InputMaybe<QueryApplicantCompaniesHasStatusWhereHasConditions>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly relation: Scalars['String']['input'];
};

export const enum QueryApplicantCompaniesOrderByColumn {
  CompanyId = 'COMPANY_ID',
  CreatedAt = 'CREATED_AT',
  Email = 'EMAIL',
  Id = 'ID',
  Name = 'NAME',
  OwnerId = 'OWNER_ID',
  Url = 'URL',
}

export type QueryApplicantCompaniesOrderByOrderByClause = {
  readonly column: QueryApplicantCompaniesOrderByColumn;
  readonly order: SortOrder;
};

export const enum QueryApplicantCompaniesWhereColumn {
  AccountManagerMemberId = 'ACCOUNT_MANAGER_MEMBER_ID',
  ApplicantStateId = 'APPLICANT_STATE_ID',
  ApplicantStateReasonId = 'APPLICANT_STATE_REASON_ID',
  CompanyId = 'COMPANY_ID',
  CreatedAt = 'CREATED_AT',
  Email = 'EMAIL',
  GroupId = 'GROUP_ID',
  Id = 'ID',
  Name = 'NAME',
  Url = 'URL',
}

export type QueryApplicantCompaniesWhereWhereConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<QueryApplicantCompaniesWhereWhereConditions>>;
  readonly HAS?: InputMaybe<QueryApplicantCompaniesWhereWhereConditionsRelation>;
  readonly OR?: InputMaybe<ReadonlyArray<QueryApplicantCompaniesWhereWhereConditions>>;
  readonly column?: InputMaybe<QueryApplicantCompaniesWhereColumn>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export type QueryApplicantCompaniesWhereWhereConditionsRelation = {
  readonly amount?: InputMaybe<Scalars['Int']['input']>;
  readonly condition?: InputMaybe<QueryApplicantCompaniesWhereWhereConditions>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly relation: Scalars['String']['input'];
};

export const enum QueryApplicantCompanyBusinessTypeOrderByColumn {
  Id = 'ID',
  Name = 'NAME',
}

export type QueryApplicantCompanyBusinessTypeOrderByOrderByClause = {
  readonly column: QueryApplicantCompanyBusinessTypeOrderByColumn;
  readonly order: SortOrder;
};

export const enum QueryApplicantCompanyBusinessTypeWhereColumn {
  Name = 'NAME',
}

export type QueryApplicantCompanyBusinessTypeWhereWhereConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<QueryApplicantCompanyBusinessTypeWhereWhereConditions>>;
  readonly HAS?: InputMaybe<QueryApplicantCompanyBusinessTypeWhereWhereConditionsRelation>;
  readonly OR?: InputMaybe<ReadonlyArray<QueryApplicantCompanyBusinessTypeWhereWhereConditions>>;
  readonly column?: InputMaybe<QueryApplicantCompanyBusinessTypeWhereColumn>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export type QueryApplicantCompanyBusinessTypeWhereWhereConditionsRelation = {
  readonly amount?: InputMaybe<Scalars['Int']['input']>;
  readonly condition?: InputMaybe<QueryApplicantCompanyBusinessTypeWhereWhereConditions>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly relation: Scalars['String']['input'];
};

export const enum QueryApplicantCompanyLabelsAvailableOrderByColumn {
  Id = 'ID',
  Name = 'NAME',
}

export type QueryApplicantCompanyLabelsAvailableOrderByOrderByClause = {
  readonly column: QueryApplicantCompanyLabelsAvailableOrderByColumn;
  readonly order: SortOrder;
};

export const enum QueryApplicantCompanyLabelsOrderByColumn {
  Id = 'ID',
  Name = 'NAME',
}

export type QueryApplicantCompanyLabelsOrderByOrderByClause = {
  readonly column: QueryApplicantCompanyLabelsOrderByColumn;
  readonly order: SortOrder;
};

export const enum QueryApplicantCompanyLabelsWhereColumn {
  Name = 'NAME',
}

export type QueryApplicantCompanyLabelsWhereWhereConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<QueryApplicantCompanyLabelsWhereWhereConditions>>;
  readonly HAS?: InputMaybe<QueryApplicantCompanyLabelsWhereWhereConditionsRelation>;
  readonly OR?: InputMaybe<ReadonlyArray<QueryApplicantCompanyLabelsWhereWhereConditions>>;
  readonly column?: InputMaybe<QueryApplicantCompanyLabelsWhereColumn>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export type QueryApplicantCompanyLabelsWhereWhereConditionsRelation = {
  readonly amount?: InputMaybe<Scalars['Int']['input']>;
  readonly condition?: InputMaybe<QueryApplicantCompanyLabelsWhereWhereConditions>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly relation: Scalars['String']['input'];
};

export const enum QueryApplicantCompanyNotesOrderByColumn {
  CreatedAt = 'CREATED_AT',
  Id = 'ID',
}

export type QueryApplicantCompanyNotesOrderByOrderByClause = {
  readonly column: QueryApplicantCompanyNotesOrderByColumn;
  readonly order: SortOrder;
};

export type QueryApplicantCompanyRiskLevelHistoryFilterFilterConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<QueryApplicantCompanyRiskLevelHistoryFilterFilterConditions>>;
  readonly OR?: InputMaybe<ReadonlyArray<QueryApplicantCompanyRiskLevelHistoryFilterFilterConditions>>;
  readonly column?: InputMaybe<QueryApplicantCompanyRiskLevelHistoryFilterStatic>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export const enum QueryApplicantCompanyRiskLevelHistoryFilterStatic {
  ApplicantCompanyId = 'APPLICANT_COMPANY_ID',
  RiskLevelId = 'RISK_LEVEL_ID',
}

export type QueryApplicantCompanyRiskLevelHistoryFilterStaticInput = {
  readonly applicant_company_id: Scalars['ID']['input'];
  readonly risk_level_id?: InputMaybe<Scalars['ID']['input']>;
};

export const enum QueryApplicantCompanyRiskLevelHistoryFilterStaticOperator {
  ApplicantCompanyId = 'applicant_company_id',
  RiskLevelId = 'risk_level_id',
}

export const enum QueryApplicantCompanyRiskLevelHistoryFilterStaticRequired {
  ApplicantCompanyId = 'applicant_company_id',
}

export const enum QueryApplicantCompanyRiskLevelHistoryFilterStaticType {
  ApplicantCompanyId = 'applicant_company_id',
  RiskLevelId = 'risk_level_id',
}

export const enum QueryApplicantCompanyRiskLevelHistoryOrderByColumn {
  Id = 'ID',
}

export type QueryApplicantCompanyRiskLevelHistoryOrderByOrderByClause = {
  readonly column: QueryApplicantCompanyRiskLevelHistoryOrderByColumn;
  readonly order: SortOrder;
};

export const enum QueryApplicantCompanyRiskLevelHistoryWhereColumn {
  RiskLevelId = 'RISK_LEVEL_ID',
}

export type QueryApplicantCompanyRiskLevelHistoryWhereWhereConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<QueryApplicantCompanyRiskLevelHistoryWhereWhereConditions>>;
  readonly HAS?: InputMaybe<QueryApplicantCompanyRiskLevelHistoryWhereWhereConditionsRelation>;
  readonly OR?: InputMaybe<ReadonlyArray<QueryApplicantCompanyRiskLevelHistoryWhereWhereConditions>>;
  readonly column?: InputMaybe<QueryApplicantCompanyRiskLevelHistoryWhereColumn>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export type QueryApplicantCompanyRiskLevelHistoryWhereWhereConditionsRelation = {
  readonly amount?: InputMaybe<Scalars['Int']['input']>;
  readonly condition?: InputMaybe<QueryApplicantCompanyRiskLevelHistoryWhereWhereConditions>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly relation: Scalars['String']['input'];
};

export type QueryApplicantDocumentTagsFilterFilterConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<QueryApplicantDocumentTagsFilterFilterConditions>>;
  readonly OR?: InputMaybe<ReadonlyArray<QueryApplicantDocumentTagsFilterFilterConditions>>;
  readonly column?: InputMaybe<QueryApplicantDocumentTagsFilterStatic>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export const enum QueryApplicantDocumentTagsFilterStatic {
  HasCategoryFilterByName = 'HAS_CATEGORY_FILTER_BY_NAME',
  Name = 'NAME',
}

export type QueryApplicantDocumentTagsFilterStaticInput = {
  readonly hasCategoryFilterByName?: InputMaybe<Scalars['String']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
};

export const enum QueryApplicantDocumentTagsFilterStaticOperator {
  HasCategoryFilterByName = 'hasCategoryFilterByName',
  Name = 'name',
}

export const enum QueryApplicantDocumentTagsFilterStaticType {
  HasCategoryFilterByName = 'hasCategoryFilterByName',
  Name = 'name',
}

export const enum QueryApplicantDocumentTagsOrderByColumn {
  CreatedAt = 'CREATED_AT',
  Id = 'ID',
}

export type QueryApplicantDocumentTagsOrderByOrderByClause = {
  readonly column: QueryApplicantDocumentTagsOrderByColumn;
  readonly order: SortOrder;
};

export type QueryApplicantDocumentsFilterFilterConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<QueryApplicantDocumentsFilterFilterConditions>>;
  readonly OR?: InputMaybe<ReadonlyArray<QueryApplicantDocumentsFilterFilterConditions>>;
  readonly column?: InputMaybe<QueryApplicantDocumentsFilterStatic>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export const enum QueryApplicantDocumentsFilterStatic {
  ApplicantId = 'APPLICANT_ID',
  DocumentStateId = 'DOCUMENT_STATE_ID',
  DocumentTypeId = 'DOCUMENT_TYPE_ID',
  Id = 'ID',
}

export type QueryApplicantDocumentsFilterStaticInput = {
  readonly applicant_id?: InputMaybe<Scalars['ID']['input']>;
  readonly document_state_id?: InputMaybe<Scalars['ID']['input']>;
  readonly document_type_id?: InputMaybe<Scalars['ID']['input']>;
  readonly id?: InputMaybe<Scalars['ID']['input']>;
};

export const enum QueryApplicantDocumentsFilterStaticOperator {
  ApplicantId = 'applicant_id',
  DocumentStateId = 'document_state_id',
  DocumentTypeId = 'document_type_id',
  Id = 'id',
}

export const enum QueryApplicantDocumentsFilterStaticType {
  ApplicantId = 'applicant_id',
  DocumentStateId = 'document_state_id',
  DocumentTypeId = 'document_type_id',
  Id = 'id',
}

export const enum QueryApplicantDocumentsOrderByColumn {
  CreatedAt = 'CREATED_AT',
  Id = 'ID',
}

export type QueryApplicantDocumentsOrderByOrderByClause = {
  readonly column: QueryApplicantDocumentsOrderByColumn;
  readonly order: SortOrder;
};

export type QueryApplicantIndividualCompanyPositionsFilterFilterConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<QueryApplicantIndividualCompanyPositionsFilterFilterConditions>>;
  readonly OR?: InputMaybe<ReadonlyArray<QueryApplicantIndividualCompanyPositionsFilterFilterConditions>>;
  readonly column?: InputMaybe<QueryApplicantIndividualCompanyPositionsFilterStatic>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export const enum QueryApplicantIndividualCompanyPositionsFilterStatic {
  CompanyId = 'COMPANY_ID',
  Name = 'NAME',
}

export type QueryApplicantIndividualCompanyPositionsFilterStaticInput = {
  readonly company_id?: InputMaybe<Scalars['ID']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
};

export const enum QueryApplicantIndividualCompanyPositionsFilterStaticOperator {
  CompanyId = 'company_id',
  Name = 'name',
}

export const enum QueryApplicantIndividualCompanyPositionsFilterStaticType {
  CompanyId = 'company_id',
  Name = 'name',
}

export const enum QueryApplicantIndividualCompanyPositionsOrderByColumn {
  CompanyId = 'COMPANY_ID',
  Id = 'ID',
  Name = 'NAME',
}

export type QueryApplicantIndividualCompanyPositionsOrderByOrderByClause = {
  readonly column: QueryApplicantIndividualCompanyPositionsOrderByColumn;
  readonly order: SortOrder;
};

export type QueryApplicantIndividualCompanyRelationsFilterFilterConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<QueryApplicantIndividualCompanyRelationsFilterFilterConditions>>;
  readonly OR?: InputMaybe<ReadonlyArray<QueryApplicantIndividualCompanyRelationsFilterFilterConditions>>;
  readonly column?: InputMaybe<QueryApplicantIndividualCompanyRelationsFilterStatic>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export const enum QueryApplicantIndividualCompanyRelationsFilterStatic {
  CompanyId = 'COMPANY_ID',
  Name = 'NAME',
}

export type QueryApplicantIndividualCompanyRelationsFilterStaticInput = {
  readonly company_id?: InputMaybe<Scalars['ID']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
};

export const enum QueryApplicantIndividualCompanyRelationsFilterStaticOperator {
  CompanyId = 'company_id',
  Name = 'name',
}

export const enum QueryApplicantIndividualCompanyRelationsFilterStaticType {
  CompanyId = 'company_id',
  Name = 'name',
}

export const enum QueryApplicantIndividualCompanyRelationsOrderByColumn {
  CompanyId = 'COMPANY_ID',
  Id = 'ID',
  Name = 'NAME',
}

export type QueryApplicantIndividualCompanyRelationsOrderByOrderByClause = {
  readonly column: QueryApplicantIndividualCompanyRelationsOrderByColumn;
  readonly order: SortOrder;
};

export const enum QueryApplicantIndividualLabelsAvailableOrderByColumn {
  Id = 'ID',
  Name = 'NAME',
}

export type QueryApplicantIndividualLabelsAvailableOrderByOrderByClause = {
  readonly column: QueryApplicantIndividualLabelsAvailableOrderByColumn;
  readonly order: SortOrder;
};

export const enum QueryApplicantIndividualLabelsOrderByColumn {
  ApplicantId = 'APPLICANT_ID',
  Name = 'NAME',
}

export type QueryApplicantIndividualLabelsOrderByOrderByClause = {
  readonly column: QueryApplicantIndividualLabelsOrderByColumn;
  readonly order: SortOrder;
};

export const enum QueryApplicantIndividualLabelsWhereColumn {
  ApplicantId = 'APPLICANT_ID',
  Name = 'NAME',
}

export type QueryApplicantIndividualLabelsWhereWhereConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<QueryApplicantIndividualLabelsWhereWhereConditions>>;
  readonly HAS?: InputMaybe<QueryApplicantIndividualLabelsWhereWhereConditionsRelation>;
  readonly OR?: InputMaybe<ReadonlyArray<QueryApplicantIndividualLabelsWhereWhereConditions>>;
  readonly column?: InputMaybe<QueryApplicantIndividualLabelsWhereColumn>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export type QueryApplicantIndividualLabelsWhereWhereConditionsRelation = {
  readonly amount?: InputMaybe<Scalars['Int']['input']>;
  readonly condition?: InputMaybe<QueryApplicantIndividualLabelsWhereWhereConditions>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly relation: Scalars['String']['input'];
};

export type QueryApplicantIndividualModulesFilterStatic = {
  readonly applicant_individual_id?: InputMaybe<Scalars['ID']['input']>;
};

export const enum QueryApplicantIndividualNotesOrderByColumn {
  CreatedAt = 'CREATED_AT',
  Id = 'ID',
}

export type QueryApplicantIndividualNotesOrderByOrderByClause = {
  readonly column: QueryApplicantIndividualNotesOrderByColumn;
  readonly order: SortOrder;
};

export type QueryApplicantIndividualsFilterFilterConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<QueryApplicantIndividualsFilterFilterConditions>>;
  readonly OR?: InputMaybe<ReadonlyArray<QueryApplicantIndividualsFilterFilterConditions>>;
  readonly column?: InputMaybe<QueryApplicantIndividualsFilterStatic>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export const enum QueryApplicantIndividualsFilterStatic {
  CompanyId = 'COMPANY_ID',
  Email = 'EMAIL',
  Fullname = 'FULLNAME',
  HasGroupRoleMixedIdOrName = 'HAS_GROUP_ROLE_MIXED_ID_OR_NAME',
  HasModulesFilterById = 'HAS_MODULES_FILTER_BY_ID',
  HasRiskLevelFilterById = 'HAS_RISK_LEVEL_FILTER_BY_ID',
  HasStateReasonFilterById = 'HAS_STATE_REASON_FILTER_BY_ID',
  HasStatusFilterById = 'HAS_STATUS_FILTER_BY_ID',
  Id = 'ID',
  KycLevelId = 'KYC_LEVEL_ID',
  ProjectId = 'PROJECT_ID',
}

export type QueryApplicantIndividualsFilterStaticInput = {
  readonly company_id?: InputMaybe<Scalars['ID']['input']>;
  readonly email?: InputMaybe<Scalars['String']['input']>;
  readonly fullname?: InputMaybe<Scalars['String']['input']>;
  readonly hasGroupRoleMixedIdOrName?: InputMaybe<Scalars['Mixed']['input']>;
  readonly hasModulesFilterById?: InputMaybe<Scalars['ID']['input']>;
  readonly hasRiskLevelFilterById?: InputMaybe<Scalars['ID']['input']>;
  readonly hasStateReasonFilterById?: InputMaybe<Scalars['ID']['input']>;
  readonly hasStatusFilterById?: InputMaybe<Scalars['ID']['input']>;
  readonly id?: InputMaybe<Scalars['ID']['input']>;
  readonly kyc_level_id?: InputMaybe<Scalars['ID']['input']>;
  readonly project_id?: InputMaybe<Scalars['ID']['input']>;
};

export const enum QueryApplicantIndividualsFilterStaticOperator {
  CompanyId = 'company_id',
  Email = 'email',
  Fullname = 'fullname',
  HasGroupRoleMixedIdOrName = 'hasGroupRoleMixedIdOrName',
  HasModulesFilterById = 'hasModulesFilterById',
  HasRiskLevelFilterById = 'hasRiskLevelFilterById',
  HasStateReasonFilterById = 'hasStateReasonFilterById',
  HasStatusFilterById = 'hasStatusFilterById',
  Id = 'id',
  KycLevelId = 'kyc_level_id',
  ProjectId = 'project_id',
}

export const enum QueryApplicantIndividualsFilterStaticType {
  CompanyId = 'company_id',
  Email = 'email',
  Fullname = 'fullname',
  HasGroupRoleMixedIdOrName = 'hasGroupRoleMixedIdOrName',
  HasModulesFilterById = 'hasModulesFilterById',
  HasRiskLevelFilterById = 'hasRiskLevelFilterById',
  HasStateReasonFilterById = 'hasStateReasonFilterById',
  HasStatusFilterById = 'hasStatusFilterById',
  Id = 'id',
  KycLevelId = 'kyc_level_id',
  ProjectId = 'project_id',
}

export const enum QueryApplicantIndividualsOrderByColumn {
  CompanyId = 'COMPANY_ID',
  CreatedAt = 'CREATED_AT',
  Email = 'EMAIL',
  FirstName = 'FIRST_NAME',
  Fullname = 'FULLNAME',
  Id = 'ID',
  LastName = 'LAST_NAME',
}

export type QueryApplicantIndividualsOrderByOrderByClause = {
  readonly column: QueryApplicantIndividualsOrderByColumn;
  readonly order: SortOrder;
};

export const enum QueryApplicantKycLevelsOrderByColumn {
  Id = 'ID',
  Name = 'NAME',
}

export type QueryApplicantKycLevelsOrderByOrderByClause = {
  readonly column: QueryApplicantKycLevelsOrderByColumn;
  readonly order: SortOrder;
};

export const enum QueryApplicantKycLevelsWhereColumn {
  Name = 'NAME',
}

export type QueryApplicantKycLevelsWhereWhereConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<QueryApplicantKycLevelsWhereWhereConditions>>;
  readonly HAS?: InputMaybe<QueryApplicantKycLevelsWhereWhereConditionsRelation>;
  readonly OR?: InputMaybe<ReadonlyArray<QueryApplicantKycLevelsWhereWhereConditions>>;
  readonly column?: InputMaybe<QueryApplicantKycLevelsWhereColumn>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export type QueryApplicantKycLevelsWhereWhereConditionsRelation = {
  readonly amount?: InputMaybe<Scalars['Int']['input']>;
  readonly condition?: InputMaybe<QueryApplicantKycLevelsWhereWhereConditions>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly relation: Scalars['String']['input'];
};

export const enum QueryApplicantModulesOrderByColumn {
  Id = 'ID',
}

export type QueryApplicantModulesOrderByOrderByClause = {
  readonly column: QueryApplicantModulesOrderByColumn;
  readonly order: SortOrder;
};

export const enum QueryApplicantModulesWhereColumn {
  Name = 'NAME',
}

export type QueryApplicantModulesWhereWhereConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<QueryApplicantModulesWhereWhereConditions>>;
  readonly HAS?: InputMaybe<QueryApplicantModulesWhereWhereConditionsRelation>;
  readonly OR?: InputMaybe<ReadonlyArray<QueryApplicantModulesWhereWhereConditions>>;
  readonly column?: InputMaybe<QueryApplicantModulesWhereColumn>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export type QueryApplicantModulesWhereWhereConditionsRelation = {
  readonly amount?: InputMaybe<Scalars['Int']['input']>;
  readonly condition?: InputMaybe<QueryApplicantModulesWhereWhereConditions>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly relation: Scalars['String']['input'];
};

export const enum QueryApplicantRiskLevelHistoryOrderByColumn {
  Id = 'ID',
}

export type QueryApplicantRiskLevelHistoryOrderByOrderByClause = {
  readonly column: QueryApplicantRiskLevelHistoryOrderByColumn;
  readonly order: SortOrder;
};

export const enum QueryApplicantRiskLevelHistoryWhereColumn {
  RiskLevelId = 'RISK_LEVEL_ID',
}

export type QueryApplicantRiskLevelHistoryWhereWhereConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<QueryApplicantRiskLevelHistoryWhereWhereConditions>>;
  readonly HAS?: InputMaybe<QueryApplicantRiskLevelHistoryWhereWhereConditionsRelation>;
  readonly OR?: InputMaybe<ReadonlyArray<QueryApplicantRiskLevelHistoryWhereWhereConditions>>;
  readonly column?: InputMaybe<QueryApplicantRiskLevelHistoryWhereColumn>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export type QueryApplicantRiskLevelHistoryWhereWhereConditionsRelation = {
  readonly amount?: InputMaybe<Scalars['Int']['input']>;
  readonly condition?: InputMaybe<QueryApplicantRiskLevelHistoryWhereWhereConditions>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly relation: Scalars['String']['input'];
};

export const enum QueryApplicantRiskLevelsOrderByColumn {
  Id = 'ID',
  Name = 'NAME',
}

export type QueryApplicantRiskLevelsOrderByOrderByClause = {
  readonly column: QueryApplicantRiskLevelsOrderByColumn;
  readonly order: SortOrder;
};

export const enum QueryApplicantRiskLevelsWhereColumn {
  Name = 'NAME',
}

export type QueryApplicantRiskLevelsWhereWhereConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<QueryApplicantRiskLevelsWhereWhereConditions>>;
  readonly HAS?: InputMaybe<QueryApplicantRiskLevelsWhereWhereConditionsRelation>;
  readonly OR?: InputMaybe<ReadonlyArray<QueryApplicantRiskLevelsWhereWhereConditions>>;
  readonly column?: InputMaybe<QueryApplicantRiskLevelsWhereColumn>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export type QueryApplicantRiskLevelsWhereWhereConditionsRelation = {
  readonly amount?: InputMaybe<Scalars['Int']['input']>;
  readonly condition?: InputMaybe<QueryApplicantRiskLevelsWhereWhereConditions>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly relation: Scalars['String']['input'];
};

export const enum QueryApplicantStateReasonsOrderByColumn {
  Id = 'ID',
  Name = 'NAME',
}

export type QueryApplicantStateReasonsOrderByOrderByClause = {
  readonly column: QueryApplicantStateReasonsOrderByColumn;
  readonly order: SortOrder;
};

export const enum QueryApplicantStateReasonsWhereColumn {
  Name = 'NAME',
}

export type QueryApplicantStateReasonsWhereWhereConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<QueryApplicantStateReasonsWhereWhereConditions>>;
  readonly HAS?: InputMaybe<QueryApplicantStateReasonsWhereWhereConditionsRelation>;
  readonly OR?: InputMaybe<ReadonlyArray<QueryApplicantStateReasonsWhereWhereConditions>>;
  readonly column?: InputMaybe<QueryApplicantStateReasonsWhereColumn>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export type QueryApplicantStateReasonsWhereWhereConditionsRelation = {
  readonly amount?: InputMaybe<Scalars['Int']['input']>;
  readonly condition?: InputMaybe<QueryApplicantStateReasonsWhereWhereConditions>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly relation: Scalars['String']['input'];
};

export const enum QueryApplicantStatesOrderByColumn {
  Id = 'ID',
  Name = 'NAME',
}

export type QueryApplicantStatesOrderByOrderByClause = {
  readonly column: QueryApplicantStatesOrderByColumn;
  readonly order: SortOrder;
};

export const enum QueryApplicantStatesWhereColumn {
  Name = 'NAME',
}

export type QueryApplicantStatesWhereWhereConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<QueryApplicantStatesWhereWhereConditions>>;
  readonly HAS?: InputMaybe<QueryApplicantStatesWhereWhereConditionsRelation>;
  readonly OR?: InputMaybe<ReadonlyArray<QueryApplicantStatesWhereWhereConditions>>;
  readonly column?: InputMaybe<QueryApplicantStatesWhereColumn>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export type QueryApplicantStatesWhereWhereConditionsRelation = {
  readonly amount?: InputMaybe<Scalars['Int']['input']>;
  readonly condition?: InputMaybe<QueryApplicantStatesWhereWhereConditions>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly relation: Scalars['String']['input'];
};

export const enum QueryApplicantStatusesOrderByColumn {
  Id = 'ID',
  Name = 'NAME',
}

export type QueryApplicantStatusesOrderByOrderByClause = {
  readonly column: QueryApplicantStatusesOrderByColumn;
  readonly order: SortOrder;
};

export const enum QueryApplicantStatusesWhereColumn {
  Name = 'NAME',
}

export type QueryApplicantStatusesWhereWhereConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<QueryApplicantStatusesWhereWhereConditions>>;
  readonly HAS?: InputMaybe<QueryApplicantStatusesWhereWhereConditionsRelation>;
  readonly OR?: InputMaybe<ReadonlyArray<QueryApplicantStatusesWhereWhereConditions>>;
  readonly column?: InputMaybe<QueryApplicantStatusesWhereColumn>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export type QueryApplicantStatusesWhereWhereConditionsRelation = {
  readonly amount?: InputMaybe<Scalars['Int']['input']>;
  readonly condition?: InputMaybe<QueryApplicantStatusesWhereWhereConditions>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly relation: Scalars['String']['input'];
};

export type QueryAuthenticationLogsStatic = {
  readonly browser?: InputMaybe<Scalars['String']['input']>;
  readonly city?: InputMaybe<Scalars['String']['input']>;
  readonly client_type?: InputMaybe<Scalars['String']['input']>;
  readonly company?: InputMaybe<Scalars['String']['input']>;
  readonly country?: InputMaybe<Scalars['String']['input']>;
  readonly created_at?: InputMaybe<Scalars['Date']['input']>;
  readonly device_type?: InputMaybe<Scalars['String']['input']>;
  readonly domain?: InputMaybe<Scalars['String']['input']>;
  readonly email?: InputMaybe<Scalars['String']['input']>;
  readonly expired_at?: InputMaybe<Scalars['Date']['input']>;
  readonly group?: InputMaybe<Scalars['String']['input']>;
  readonly ip?: InputMaybe<Scalars['String']['input']>;
  readonly member?: InputMaybe<Scalars['String']['input']>;
  readonly model?: InputMaybe<Scalars['String']['input']>;
  readonly platform?: InputMaybe<Scalars['String']['input']>;
  readonly provider?: InputMaybe<Scalars['String']['input']>;
  readonly status?: InputMaybe<Scalars['String']['input']>;
};

export type QueryBankCorrespondentsFilterFilterConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<QueryBankCorrespondentsFilterFilterConditions>>;
  readonly OR?: InputMaybe<ReadonlyArray<QueryBankCorrespondentsFilterFilterConditions>>;
  readonly column?: InputMaybe<QueryBankCorrespondentsFilterStatic>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export const enum QueryBankCorrespondentsFilterStatic {
  HasBankCorrespondentCurrenciesFilterByCurrencyId = 'HAS_BANK_CORRESPONDENT_CURRENCIES_FILTER_BY_CURRENCY_ID',
  HasBankCorrespondentRegionsFilterByRegionId = 'HAS_BANK_CORRESPONDENT_REGIONS_FILTER_BY_REGION_ID',
  Name = 'NAME',
}

export type QueryBankCorrespondentsFilterStaticInput = {
  readonly hasBankCorrespondentCurrenciesFilterByCurrencyId?: InputMaybe<Scalars['ID']['input']>;
  readonly hasBankCorrespondentRegionsFilterByRegionId?: InputMaybe<Scalars['ID']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
};

export const enum QueryBankCorrespondentsFilterStaticOperator {
  HasBankCorrespondentCurrenciesFilterByCurrencyId = 'hasBankCorrespondentCurrenciesFilterByCurrencyId',
  HasBankCorrespondentRegionsFilterByRegionId = 'hasBankCorrespondentRegionsFilterByRegionId',
  Name = 'name',
}

export const enum QueryBankCorrespondentsFilterStaticType {
  HasBankCorrespondentCurrenciesFilterByCurrencyId = 'hasBankCorrespondentCurrenciesFilterByCurrencyId',
  HasBankCorrespondentRegionsFilterByRegionId = 'hasBankCorrespondentRegionsFilterByRegionId',
  Name = 'name',
}

export const enum QueryBankCorrespondentsOrderByColumn {
  Id = 'ID',
}

export type QueryBankCorrespondentsOrderByOrderByClause = {
  readonly column: QueryBankCorrespondentsOrderByColumn;
  readonly order: SortOrder;
};

export type QueryBusinessActivitiesFilterFilterConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<QueryBusinessActivitiesFilterFilterConditions>>;
  readonly OR?: InputMaybe<ReadonlyArray<QueryBusinessActivitiesFilterFilterConditions>>;
  readonly column?: InputMaybe<QueryBusinessActivitiesFilterStatic>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export const enum QueryBusinessActivitiesFilterStatic {
  HasCommissionTemplateFilterById = 'HAS_COMMISSION_TEMPLATE_FILTER_BY_ID',
  Id = 'ID',
  Name = 'NAME',
}

export type QueryBusinessActivitiesFilterStaticInput = {
  readonly hasCommissionTemplateFilterById?: InputMaybe<Scalars['ID']['input']>;
  readonly id?: InputMaybe<Scalars['ID']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
};

export const enum QueryBusinessActivitiesFilterStaticOperator {
  HasCommissionTemplateFilterById = 'hasCommissionTemplateFilterById',
  Id = 'id',
  Name = 'name',
}

export const enum QueryBusinessActivitiesFilterStaticType {
  HasCommissionTemplateFilterById = 'hasCommissionTemplateFilterById',
  Id = 'id',
  Name = 'name',
}

export const enum QueryBusinessActivitiesOrderByColumn {
  Id = 'ID',
  Name = 'NAME',
}

export type QueryBusinessActivitiesOrderByOrderByClause = {
  readonly column: QueryBusinessActivitiesOrderByColumn;
  readonly order: SortOrder;
};

export type QueryClientCondition = {
  readonly id: Scalars['ID']['input'];
};

export type QueryCommissionPriceListsFilterFilterConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<QueryCommissionPriceListsFilterFilterConditions>>;
  readonly OR?: InputMaybe<ReadonlyArray<QueryCommissionPriceListsFilterFilterConditions>>;
  readonly column?: InputMaybe<QueryCommissionPriceListsFilterStatic>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export const enum QueryCommissionPriceListsFilterStatic {
  CompanyId = 'COMPANY_ID',
  HasCommissionTemplateFilterById = 'HAS_COMMISSION_TEMPLATE_FILTER_BY_ID',
  HasPaymentProviderFilterById = 'HAS_PAYMENT_PROVIDER_FILTER_BY_ID',
  HasPaymentSystemFilterById = 'HAS_PAYMENT_SYSTEM_FILTER_BY_ID',
  Id = 'ID',
  RegionId = 'REGION_ID',
}

export type QueryCommissionPriceListsFilterStaticInput = {
  readonly company_id?: InputMaybe<Scalars['ID']['input']>;
  readonly hasCommissionTemplateFilterById?: InputMaybe<Scalars['ID']['input']>;
  readonly hasPaymentProviderFilterById?: InputMaybe<Scalars['ID']['input']>;
  readonly hasPaymentSystemFilterById?: InputMaybe<Scalars['ID']['input']>;
  readonly id?: InputMaybe<Scalars['ID']['input']>;
  readonly region_id?: InputMaybe<Scalars['ID']['input']>;
};

export const enum QueryCommissionPriceListsFilterStaticOperator {
  CompanyId = 'company_id',
  HasCommissionTemplateFilterById = 'hasCommissionTemplateFilterById',
  HasPaymentProviderFilterById = 'hasPaymentProviderFilterById',
  HasPaymentSystemFilterById = 'hasPaymentSystemFilterById',
  Id = 'id',
  RegionId = 'region_id',
}

export const enum QueryCommissionPriceListsFilterStaticType {
  CompanyId = 'company_id',
  HasCommissionTemplateFilterById = 'hasCommissionTemplateFilterById',
  HasPaymentProviderFilterById = 'hasPaymentProviderFilterById',
  HasPaymentSystemFilterById = 'hasPaymentSystemFilterById',
  Id = 'id',
  RegionId = 'region_id',
}

export const enum QueryCommissionPriceListsOrderByColumn {
  Id = 'ID',
  Name = 'NAME',
}

export type QueryCommissionPriceListsOrderByOrderByClause = {
  readonly column: QueryCommissionPriceListsOrderByColumn;
  readonly order: SortOrder;
};

export const enum QueryCommissionTemplateLimitActionTypesOrderByColumn {
  Id = 'ID',
  Name = 'NAME',
}

export type QueryCommissionTemplateLimitActionTypesOrderByOrderByClause = {
  readonly column: QueryCommissionTemplateLimitActionTypesOrderByColumn;
  readonly order: SortOrder;
};

export const enum QueryCommissionTemplateLimitActionTypesWhereColumn {
  Name = 'NAME',
}

export type QueryCommissionTemplateLimitActionTypesWhereWhereConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<QueryCommissionTemplateLimitActionTypesWhereWhereConditions>>;
  readonly HAS?: InputMaybe<QueryCommissionTemplateLimitActionTypesWhereWhereConditionsRelation>;
  readonly OR?: InputMaybe<ReadonlyArray<QueryCommissionTemplateLimitActionTypesWhereWhereConditions>>;
  readonly column?: InputMaybe<QueryCommissionTemplateLimitActionTypesWhereColumn>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export type QueryCommissionTemplateLimitActionTypesWhereWhereConditionsRelation = {
  readonly amount?: InputMaybe<Scalars['Int']['input']>;
  readonly condition?: InputMaybe<QueryCommissionTemplateLimitActionTypesWhereWhereConditions>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly relation: Scalars['String']['input'];
};

export const enum QueryCommissionTemplateLimitPeriodsOrderByColumn {
  Id = 'ID',
  Name = 'NAME',
}

export type QueryCommissionTemplateLimitPeriodsOrderByOrderByClause = {
  readonly column: QueryCommissionTemplateLimitPeriodsOrderByColumn;
  readonly order: SortOrder;
};

export const enum QueryCommissionTemplateLimitPeriodsWhereColumn {
  Name = 'NAME',
}

export type QueryCommissionTemplateLimitPeriodsWhereWhereConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<QueryCommissionTemplateLimitPeriodsWhereWhereConditions>>;
  readonly HAS?: InputMaybe<QueryCommissionTemplateLimitPeriodsWhereWhereConditionsRelation>;
  readonly OR?: InputMaybe<ReadonlyArray<QueryCommissionTemplateLimitPeriodsWhereWhereConditions>>;
  readonly column?: InputMaybe<QueryCommissionTemplateLimitPeriodsWhereColumn>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export type QueryCommissionTemplateLimitPeriodsWhereWhereConditionsRelation = {
  readonly amount?: InputMaybe<Scalars['Int']['input']>;
  readonly condition?: InputMaybe<QueryCommissionTemplateLimitPeriodsWhereWhereConditions>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly relation: Scalars['String']['input'];
};

export const enum QueryCommissionTemplateLimitTransferDirectionsOrderByColumn {
  Id = 'ID',
  Name = 'NAME',
}

export type QueryCommissionTemplateLimitTransferDirectionsOrderByOrderByClause = {
  readonly column: QueryCommissionTemplateLimitTransferDirectionsOrderByColumn;
  readonly order: SortOrder;
};

export const enum QueryCommissionTemplateLimitTransferDirectionsWhereColumn {
  Name = 'NAME',
}

export type QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditions>>;
  readonly HAS?: InputMaybe<QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditionsRelation>;
  readonly OR?: InputMaybe<ReadonlyArray<QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditions>>;
  readonly column?: InputMaybe<QueryCommissionTemplateLimitTransferDirectionsWhereColumn>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export type QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditionsRelation = {
  readonly amount?: InputMaybe<Scalars['Int']['input']>;
  readonly condition?: InputMaybe<QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditions>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly relation: Scalars['String']['input'];
};

export const enum QueryCommissionTemplateLimitTypesOrderByColumn {
  Id = 'ID',
  Name = 'NAME',
}

export type QueryCommissionTemplateLimitTypesOrderByOrderByClause = {
  readonly column: QueryCommissionTemplateLimitTypesOrderByColumn;
  readonly order: SortOrder;
};

export const enum QueryCommissionTemplateLimitTypesWhereColumn {
  Name = 'NAME',
}

export type QueryCommissionTemplateLimitTypesWhereWhereConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<QueryCommissionTemplateLimitTypesWhereWhereConditions>>;
  readonly HAS?: InputMaybe<QueryCommissionTemplateLimitTypesWhereWhereConditionsRelation>;
  readonly OR?: InputMaybe<ReadonlyArray<QueryCommissionTemplateLimitTypesWhereWhereConditions>>;
  readonly column?: InputMaybe<QueryCommissionTemplateLimitTypesWhereColumn>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export type QueryCommissionTemplateLimitTypesWhereWhereConditionsRelation = {
  readonly amount?: InputMaybe<Scalars['Int']['input']>;
  readonly condition?: InputMaybe<QueryCommissionTemplateLimitTypesWhereWhereConditions>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly relation: Scalars['String']['input'];
};

export type QueryCommissionTemplateLimitsFilterStatic = {
  readonly account_id?: InputMaybe<Scalars['ID']['input']>;
  readonly amount?: InputMaybe<Scalars['Decimal']['input']>;
  readonly commission_template_id?: InputMaybe<Scalars['ID']['input']>;
  readonly commission_template_limit_action_type_id?: InputMaybe<Scalars['ID']['input']>;
  readonly commission_template_limit_period_id?: InputMaybe<Scalars['ID']['input']>;
  readonly commission_template_limit_transfer_direction_id?: InputMaybe<Scalars['ID']['input']>;
  readonly commission_template_limit_type_id?: InputMaybe<Scalars['ID']['input']>;
  readonly currency_id?: InputMaybe<Scalars['ID']['input']>;
  readonly payment_system_id?: InputMaybe<Scalars['ID']['input']>;
  readonly period_count?: InputMaybe<Scalars['Int']['input']>;
  readonly region_id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryCommissionTemplatesFilterFilterConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<QueryCommissionTemplatesFilterFilterConditions>>;
  readonly OR?: InputMaybe<ReadonlyArray<QueryCommissionTemplatesFilterFilterConditions>>;
  readonly column?: InputMaybe<QueryCommissionTemplatesFilterStatic>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export const enum QueryCommissionTemplatesFilterStatic {
  HasBusinessActivityFilterById = 'HAS_BUSINESS_ACTIVITY_FILTER_BY_ID',
  HasCompanyFilterById = 'HAS_COMPANY_FILTER_BY_ID',
  HasPaymentProviderFilterById = 'HAS_PAYMENT_PROVIDER_FILTER_BY_ID',
  Id = 'ID',
  IsActive = 'IS_ACTIVE',
  Name = 'NAME',
}

export type QueryCommissionTemplatesFilterStaticInput = {
  readonly hasBusinessActivityFilterById?: InputMaybe<Scalars['ID']['input']>;
  readonly hasCompanyFilterById?: InputMaybe<Scalars['ID']['input']>;
  readonly hasPaymentProviderFilterById?: InputMaybe<Scalars['ID']['input']>;
  readonly id?: InputMaybe<Scalars['ID']['input']>;
  readonly is_active?: InputMaybe<Scalars['Boolean']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
};

export const enum QueryCommissionTemplatesFilterStaticOperator {
  HasBusinessActivityFilterById = 'hasBusinessActivityFilterById',
  HasCompanyFilterById = 'hasCompanyFilterById',
  HasPaymentProviderFilterById = 'hasPaymentProviderFilterById',
  Id = 'id',
  IsActive = 'is_active',
  Name = 'name',
}

export const enum QueryCommissionTemplatesFilterStaticType {
  HasBusinessActivityFilterById = 'hasBusinessActivityFilterById',
  HasCompanyFilterById = 'hasCompanyFilterById',
  HasPaymentProviderFilterById = 'hasPaymentProviderFilterById',
  Id = 'id',
  IsActive = 'is_active',
  Name = 'name',
}

export const enum QueryCommissionTemplatesOrderByColumn {
  Description = 'DESCRIPTION',
  Id = 'ID',
  IsActive = 'IS_ACTIVE',
  Name = 'NAME',
}

export type QueryCommissionTemplatesOrderByOrderByClause = {
  readonly column: QueryCommissionTemplatesOrderByColumn;
  readonly order: SortOrder;
};

export type QueryCompaniesFilterFilterConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<QueryCompaniesFilterFilterConditions>>;
  readonly OR?: InputMaybe<ReadonlyArray<QueryCompaniesFilterFilterConditions>>;
  readonly column?: InputMaybe<QueryCompaniesFilterStatic>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export const enum QueryCompaniesFilterStatic {
  CountryId = 'COUNTRY_ID',
  Email = 'EMAIL',
  EntityType = 'ENTITY_TYPE',
  HasPaymentProvidersFilterById = 'HAS_PAYMENT_PROVIDERS_FILTER_BY_ID',
  HasPaymentSystemFilterById = 'HAS_PAYMENT_SYSTEM_FILTER_BY_ID',
  HasRegionsFilterById = 'HAS_REGIONS_FILTER_BY_ID',
  Name = 'NAME',
  RegNumber = 'REG_NUMBER',
  Url = 'URL',
}

export type QueryCompaniesFilterStaticInput = {
  readonly country_id?: InputMaybe<Scalars['ID']['input']>;
  readonly email?: InputMaybe<Scalars['String']['input']>;
  readonly entity_type?: InputMaybe<Scalars['String']['input']>;
  readonly hasPaymentProvidersFilterById?: InputMaybe<Scalars['ID']['input']>;
  readonly hasPaymentSystemFilterById?: InputMaybe<Scalars['ID']['input']>;
  readonly hasRegionsFilterById?: InputMaybe<Scalars['ID']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
  readonly reg_number?: InputMaybe<Scalars['String']['input']>;
  readonly url?: InputMaybe<Scalars['String']['input']>;
};

export const enum QueryCompaniesFilterStaticOperator {
  CountryId = 'country_id',
  Email = 'email',
  EntityType = 'entity_type',
  HasPaymentProvidersFilterById = 'hasPaymentProvidersFilterById',
  HasPaymentSystemFilterById = 'hasPaymentSystemFilterById',
  HasRegionsFilterById = 'hasRegionsFilterById',
  Name = 'name',
  RegNumber = 'reg_number',
  Url = 'url',
}

export const enum QueryCompaniesFilterStaticType {
  CountryId = 'country_id',
  Email = 'email',
  EntityType = 'entity_type',
  HasPaymentProvidersFilterById = 'hasPaymentProvidersFilterById',
  HasPaymentSystemFilterById = 'hasPaymentSystemFilterById',
  HasRegionsFilterById = 'hasRegionsFilterById',
  Name = 'name',
  RegNumber = 'reg_number',
  Url = 'url',
}

export const enum QueryCompaniesOrderByColumn {
  CreatedAt = 'CREATED_AT',
  Email = 'EMAIL',
  Id = 'ID',
  Name = 'NAME',
  Url = 'URL',
}

export type QueryCompaniesOrderByOrderByClause = {
  readonly column: QueryCompaniesOrderByColumn;
  readonly order: SortOrder;
};

export type QueryDepartmentPositionsFilterFilterConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<QueryDepartmentPositionsFilterFilterConditions>>;
  readonly OR?: InputMaybe<ReadonlyArray<QueryDepartmentPositionsFilterFilterConditions>>;
  readonly column?: InputMaybe<QueryDepartmentPositionsFilterStatic>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export const enum QueryDepartmentPositionsFilterStatic {
  HasDepartmentFilterById = 'HAS_DEPARTMENT_FILTER_BY_ID',
  IsActive = 'IS_ACTIVE',
  Name = 'NAME',
}

export type QueryDepartmentPositionsFilterStaticInput = {
  readonly hasDepartmentFilterById?: InputMaybe<Scalars['ID']['input']>;
  readonly is_active?: InputMaybe<Scalars['Boolean']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
};

export const enum QueryDepartmentPositionsFilterStaticOperator {
  HasDepartmentFilterById = 'hasDepartmentFilterById',
  IsActive = 'is_active',
  Name = 'name',
}

export const enum QueryDepartmentPositionsFilterStaticType {
  HasDepartmentFilterById = 'hasDepartmentFilterById',
  IsActive = 'is_active',
  Name = 'name',
}

export const enum QueryDepartmentPositionsOrderByColumn {
  Id = 'ID',
  IsActive = 'IS_ACTIVE',
  Name = 'NAME',
}

export type QueryDepartmentPositionsOrderByOrderByClause = {
  readonly column: QueryDepartmentPositionsOrderByColumn;
  readonly order: SortOrder;
};

export type QueryDepartmentsFilterFilterConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<QueryDepartmentsFilterFilterConditions>>;
  readonly OR?: InputMaybe<ReadonlyArray<QueryDepartmentsFilterFilterConditions>>;
  readonly column?: InputMaybe<QueryDepartmentsFilterStatic>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export const enum QueryDepartmentsFilterStatic {
  HasCompanyFilterById = 'HAS_COMPANY_FILTER_BY_ID',
  Name = 'NAME',
}

export type QueryDepartmentsFilterStaticInput = {
  readonly hasCompanyFilterById?: InputMaybe<Scalars['ID']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
};

export const enum QueryDepartmentsFilterStaticOperator {
  HasCompanyFilterById = 'hasCompanyFilterById',
  Name = 'name',
}

export const enum QueryDepartmentsFilterStaticType {
  HasCompanyFilterById = 'hasCompanyFilterById',
  Name = 'name',
}

export const enum QueryDepartmentsOrderByColumn {
  Id = 'ID',
  Name = 'NAME',
}

export type QueryDepartmentsOrderByOrderByClause = {
  readonly column: QueryDepartmentsOrderByColumn;
  readonly order: SortOrder;
};

export type QueryEmailNotificationsFilterFilterConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<QueryEmailNotificationsFilterFilterConditions>>;
  readonly OR?: InputMaybe<ReadonlyArray<QueryEmailNotificationsFilterFilterConditions>>;
  readonly column?: InputMaybe<QueryEmailNotificationsFilterStatic>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export const enum QueryEmailNotificationsFilterStatic {
  CompanyId = 'COMPANY_ID',
  HasApplicantCompanyMixedIdOrName = 'HAS_APPLICANT_COMPANY_MIXED_ID_OR_NAME',
  HasApplicantIndividualMixedIdOrFullname = 'HAS_APPLICANT_INDIVIDUAL_MIXED_ID_OR_FULLNAME',
  HasGroupRoleMixedIdOrName = 'HAS_GROUP_ROLE_MIXED_ID_OR_NAME',
  HasGroupTypeMixedIdOrName = 'HAS_GROUP_TYPE_MIXED_ID_OR_NAME',
  HasMemberMixedIdOrFullname = 'HAS_MEMBER_MIXED_ID_OR_FULLNAME',
  HasTemplatesFilterBySubject = 'HAS_TEMPLATES_FILTER_BY_SUBJECT',
  RecipientType = 'RECIPIENT_TYPE',
  Type = 'TYPE',
}

export const enum QueryEmailNotificationsFilterStaticEnumNotifyType {
  Administration = 'ADMINISTRATION',
  Client = 'CLIENT',
}

export const enum QueryEmailNotificationsFilterStaticEnumRecipientType {
  Group = 'GROUP',
  Person = 'PERSON',
}

export type QueryEmailNotificationsFilterStaticInput = {
  readonly company_id?: InputMaybe<Scalars['ID']['input']>;
  readonly hasApplicantCompanyMixedIdOrName?: InputMaybe<Scalars['Mixed']['input']>;
  readonly hasApplicantIndividualMixedIdOrFullname?: InputMaybe<Scalars['Mixed']['input']>;
  readonly hasGroupRoleMixedIdOrName?: InputMaybe<Scalars['Mixed']['input']>;
  readonly hasGroupTypeMixedIdOrName?: InputMaybe<Scalars['Mixed']['input']>;
  readonly hasMemberMixedIdOrFullname?: InputMaybe<Scalars['Mixed']['input']>;
  readonly hasTemplatesFilterBySubject?: InputMaybe<Scalars['String']['input']>;
  readonly recipient_type?: InputMaybe<RecipientType>;
  readonly type?: InputMaybe<NotifyType>;
};

export const enum QueryEmailNotificationsFilterStaticOperator {
  CompanyId = 'company_id',
  HasApplicantCompanyMixedIdOrName = 'hasApplicantCompanyMixedIdOrName',
  HasApplicantIndividualMixedIdOrFullname = 'hasApplicantIndividualMixedIdOrFullname',
  HasGroupRoleMixedIdOrName = 'hasGroupRoleMixedIdOrName',
  HasGroupTypeMixedIdOrName = 'hasGroupTypeMixedIdOrName',
  HasMemberMixedIdOrFullname = 'hasMemberMixedIdOrFullname',
  HasTemplatesFilterBySubject = 'hasTemplatesFilterBySubject',
  RecipientType = 'recipient_type',
  Type = 'type',
}

export const enum QueryEmailNotificationsFilterStaticType {
  CompanyId = 'company_id',
  HasApplicantCompanyMixedIdOrName = 'hasApplicantCompanyMixedIdOrName',
  HasApplicantIndividualMixedIdOrFullname = 'hasApplicantIndividualMixedIdOrFullname',
  HasGroupRoleMixedIdOrName = 'hasGroupRoleMixedIdOrName',
  HasGroupTypeMixedIdOrName = 'hasGroupTypeMixedIdOrName',
  HasMemberMixedIdOrFullname = 'hasMemberMixedIdOrFullname',
  HasTemplatesFilterBySubject = 'hasTemplatesFilterBySubject',
  RecipientType = 'recipient_type',
  Type = 'type',
}

export const enum QueryEmailNotificationsOrderByColumn {
  Id = 'ID',
}

export type QueryEmailNotificationsOrderByOrderByClause = {
  readonly column: QueryEmailNotificationsOrderByColumn;
  readonly order: SortOrder;
};

export const enum QueryEmailSmtpsOrderByColumn {
  Id = 'ID',
  Name = 'NAME',
}

export type QueryEmailSmtpsOrderByOrderByClause = {
  readonly column: QueryEmailSmtpsOrderByColumn;
  readonly order: SortOrder;
};

export type QueryEmailTemplatesFilterFilterConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<QueryEmailTemplatesFilterFilterConditions>>;
  readonly OR?: InputMaybe<ReadonlyArray<QueryEmailTemplatesFilterFilterConditions>>;
  readonly column?: InputMaybe<QueryEmailTemplatesFilterStatic>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export const enum QueryEmailTemplatesFilterStatic {
  CompanyId = 'COMPANY_ID',
  HasCompanyFilterByName = 'HAS_COMPANY_FILTER_BY_NAME',
  Name = 'NAME',
  ServiceType = 'SERVICE_TYPE',
  Type = 'TYPE',
}

export const enum QueryEmailTemplatesFilterStaticEnumClientType {
  Administration = 'ADMINISTRATION',
  Client = 'CLIENT',
}

export const enum QueryEmailTemplatesFilterStaticEnumServiceType {
  AdminNotify = 'ADMIN_NOTIFY',
  Banking = 'BANKING',
  BankingCommon = 'BANKING_COMMON',
  BankingSystem = 'BANKING_SYSTEM',
  Common = 'COMMON',
  System = 'SYSTEM',
}

export type QueryEmailTemplatesFilterStaticInput = {
  readonly company_id?: InputMaybe<Scalars['ID']['input']>;
  readonly hasCompanyFilterByName?: InputMaybe<Scalars['String']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
  readonly service_type?: InputMaybe<ServiceType>;
  readonly type?: InputMaybe<ClientType>;
};

export const enum QueryEmailTemplatesFilterStaticOperator {
  CompanyId = 'company_id',
  HasCompanyFilterByName = 'hasCompanyFilterByName',
  Name = 'name',
  ServiceType = 'service_type',
  Type = 'type',
}

export const enum QueryEmailTemplatesFilterStaticType {
  CompanyId = 'company_id',
  HasCompanyFilterByName = 'hasCompanyFilterByName',
  Name = 'name',
  ServiceType = 'service_type',
  Type = 'type',
}

export const enum QueryEmailTemplatesOrderByColumn {
  Id = 'ID',
}

export type QueryEmailTemplatesOrderByOrderByClause = {
  readonly column: QueryEmailTemplatesOrderByColumn;
  readonly order: SortOrder;
};

export type QueryFeeTypesFilterFilterConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<QueryFeeTypesFilterFilterConditions>>;
  readonly OR?: InputMaybe<ReadonlyArray<QueryFeeTypesFilterFilterConditions>>;
  readonly column?: InputMaybe<QueryFeeTypesFilterStatic>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export const enum QueryFeeTypesFilterStatic {
  HasOperationTypeFilterById = 'HAS_OPERATION_TYPE_FILTER_BY_ID',
}

export type QueryFeeTypesFilterStaticInput = {
  readonly hasOperationTypeFilterById?: InputMaybe<Scalars['ID']['input']>;
};

export const enum QueryFeeTypesFilterStaticOperator {
  HasOperationTypeFilterById = 'hasOperationTypeFilterById',
}

export const enum QueryFeeTypesFilterStaticType {
  HasOperationTypeFilterById = 'hasOperationTypeFilterById',
}

export type QueryFilesFilterFilterConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<QueryFilesFilterFilterConditions>>;
  readonly OR?: InputMaybe<ReadonlyArray<QueryFilesFilterFilterConditions>>;
  readonly column?: InputMaybe<QueryFilesFilterStatic>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export const enum QueryFilesFilterStatic {
  AuthorId = 'AUTHOR_ID',
  EntityType = 'ENTITY_TYPE',
}

export type QueryFilesFilterStaticInput = {
  readonly author_id?: InputMaybe<Scalars['ID']['input']>;
  readonly entity_type?: InputMaybe<Scalars['String']['input']>;
};

export const enum QueryFilesFilterStaticOperator {
  AuthorId = 'author_id',
  EntityType = 'entity_type',
}

export const enum QueryFilesFilterStaticType {
  AuthorId = 'author_id',
  EntityType = 'entity_type',
}

export const enum QueryFilesOrderByColumn {
  AuthorId = 'AUTHOR_ID',
  Id = 'ID',
}

export type QueryFilesOrderByOrderByClause = {
  readonly column: QueryFilesOrderByColumn;
  readonly order: SortOrder;
};

export type QueryGetMatchedUsersFilterFilterConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<QueryGetMatchedUsersFilterFilterConditions>>;
  readonly OR?: InputMaybe<ReadonlyArray<QueryGetMatchedUsersFilterFilterConditions>>;
  readonly column?: InputMaybe<QueryGetMatchedUsersFilterStatic>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export const enum QueryGetMatchedUsersFilterStatic {
  ApplicantType = 'APPLICANT_TYPE',
}

export const enum QueryGetMatchedUsersFilterStaticEnumApplicantType {
  ApplicantCompany = 'APPLICANT_COMPANY',
  ApplicantIndividual = 'APPLICANT_INDIVIDUAL',
}

export type QueryGetMatchedUsersFilterStaticInput = {
  readonly applicant_type?: InputMaybe<ApplicantType>;
};

export const enum QueryGetMatchedUsersFilterStaticOperator {
  ApplicantType = 'applicant_type',
}

export const enum QueryGetMatchedUsersFilterStaticType {
  ApplicantType = 'applicant_type',
}

export type QueryGrantedBankingAccessFilterFilterConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<QueryGrantedBankingAccessFilterFilterConditions>>;
  readonly OR?: InputMaybe<ReadonlyArray<QueryGrantedBankingAccessFilterFilterConditions>>;
  readonly column?: InputMaybe<QueryGrantedBankingAccessFilterStatic>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export const enum QueryGrantedBankingAccessFilterStatic {
  GrantAccess = 'GRANT_ACCESS',
  MemberId = 'MEMBER_ID',
}

export type QueryGrantedBankingAccessFilterStaticInput = {
  readonly grant_access?: InputMaybe<Scalars['Boolean']['input']>;
  readonly member_id?: InputMaybe<Scalars['ID']['input']>;
};

export const enum QueryGrantedBankingAccessFilterStaticOperator {
  GrantAccess = 'grant_access',
  MemberId = 'member_id',
}

export const enum QueryGrantedBankingAccessFilterStaticType {
  GrantAccess = 'grant_access',
  MemberId = 'member_id',
}

export const enum QueryGrantedBankingAccessOrderByColumn {
  ApplicantCompanyId = 'APPLICANT_COMPANY_ID',
  ApplicantIndividualId = 'APPLICANT_INDIVIDUAL_ID',
  Id = 'ID',
  MemberId = 'MEMBER_ID',
}

export type QueryGrantedBankingAccessOrderByOrderByClause = {
  readonly column: QueryGrantedBankingAccessOrderByColumn;
  readonly order: SortOrder;
};

export type QueryGroupListFilterFilterConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<QueryGroupListFilterFilterConditions>>;
  readonly OR?: InputMaybe<ReadonlyArray<QueryGroupListFilterFilterConditions>>;
  readonly column?: InputMaybe<QueryGroupListFilterStatic>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export const enum QueryGroupListFilterStatic {
  CommissionTemplateId = 'COMMISSION_TEMPLATE_ID',
  CompanyId = 'COMPANY_ID',
  GroupTypeId = 'GROUP_TYPE_ID',
  Id = 'ID',
  IsActive = 'IS_ACTIVE',
  ModuleId = 'MODULE_ID',
  Name = 'NAME',
  PaymentProviderId = 'PAYMENT_PROVIDER_ID',
  RoleId = 'ROLE_ID',
}

export type QueryGroupListFilterStaticInput = {
  readonly commission_template_id?: InputMaybe<Scalars['ID']['input']>;
  readonly company_id?: InputMaybe<Scalars['ID']['input']>;
  readonly group_type_id?: InputMaybe<Scalars['ID']['input']>;
  readonly id?: InputMaybe<Scalars['ID']['input']>;
  readonly is_active?: InputMaybe<Scalars['Boolean']['input']>;
  readonly module_id?: InputMaybe<Scalars['ID']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
  readonly payment_provider_id?: InputMaybe<Scalars['ID']['input']>;
  readonly role_id?: InputMaybe<Scalars['ID']['input']>;
};

export const enum QueryGroupListFilterStaticOperator {
  CommissionTemplateId = 'commission_template_id',
  CompanyId = 'company_id',
  GroupTypeId = 'group_type_id',
  Id = 'id',
  IsActive = 'is_active',
  ModuleId = 'module_id',
  Name = 'name',
  PaymentProviderId = 'payment_provider_id',
  RoleId = 'role_id',
}

export const enum QueryGroupListFilterStaticType {
  CommissionTemplateId = 'commission_template_id',
  CompanyId = 'company_id',
  GroupTypeId = 'group_type_id',
  Id = 'id',
  IsActive = 'is_active',
  ModuleId = 'module_id',
  Name = 'name',
  PaymentProviderId = 'payment_provider_id',
  RoleId = 'role_id',
}

export const enum QueryGroupListOrderByColumn {
  Id = 'ID',
  IsActive = 'IS_ACTIVE',
  Name = 'NAME',
}

export type QueryGroupListOrderByOrderByClause = {
  readonly column: QueryGroupListOrderByColumn;
  readonly order: SortOrder;
};

export type QueryGroupTypesFilterFilterConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<QueryGroupTypesFilterFilterConditions>>;
  readonly OR?: InputMaybe<ReadonlyArray<QueryGroupTypesFilterFilterConditions>>;
  readonly column?: InputMaybe<QueryGroupTypesFilterStatic>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export const enum QueryGroupTypesFilterStatic {
  HasGroupsFilterByCompanyId = 'HAS_GROUPS_FILTER_BY_COMPANY_ID',
  HasGroupsFilterByRoleId = 'HAS_GROUPS_FILTER_BY_ROLE_ID',
  HasRolesFilterById = 'HAS_ROLES_FILTER_BY_ID',
}

export type QueryGroupTypesFilterStaticInput = {
  readonly hasGroupsFilterByCompanyId?: InputMaybe<Scalars['ID']['input']>;
  readonly hasGroupsFilterByRoleId?: InputMaybe<Scalars['ID']['input']>;
  readonly hasRolesFilterById?: InputMaybe<Scalars['ID']['input']>;
};

export const enum QueryGroupTypesFilterStaticOperator {
  HasGroupsFilterByCompanyId = 'hasGroupsFilterByCompanyId',
  HasGroupsFilterByRoleId = 'hasGroupsFilterByRoleId',
  HasRolesFilterById = 'hasRolesFilterById',
}

export const enum QueryGroupTypesFilterStaticType {
  HasGroupsFilterByCompanyId = 'hasGroupsFilterByCompanyId',
  HasGroupsFilterByRoleId = 'hasGroupsFilterByRoleId',
  HasRolesFilterById = 'hasRolesFilterById',
}

export type QueryGroupsFilterFilterConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<QueryGroupsFilterFilterConditions>>;
  readonly OR?: InputMaybe<ReadonlyArray<QueryGroupsFilterFilterConditions>>;
  readonly column?: InputMaybe<QueryGroupsFilterStatic>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export const enum QueryGroupsFilterStatic {
  CompanyId = 'COMPANY_ID',
  GroupTypeId = 'GROUP_TYPE_ID',
  Id = 'ID',
  IsActive = 'IS_ACTIVE',
  Name = 'NAME',
  RoleId = 'ROLE_ID',
}

export type QueryGroupsFilterStaticInput = {
  readonly company_id?: InputMaybe<Scalars['ID']['input']>;
  readonly group_type_id?: InputMaybe<Scalars['ID']['input']>;
  readonly id?: InputMaybe<Scalars['ID']['input']>;
  readonly is_active?: InputMaybe<Scalars['Boolean']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
  readonly role_id?: InputMaybe<Scalars['ID']['input']>;
};

export const enum QueryGroupsFilterStaticOperator {
  CompanyId = 'company_id',
  GroupTypeId = 'group_type_id',
  Id = 'id',
  IsActive = 'is_active',
  Name = 'name',
  RoleId = 'role_id',
}

export const enum QueryGroupsFilterStaticType {
  CompanyId = 'company_id',
  GroupTypeId = 'group_type_id',
  Id = 'id',
  IsActive = 'is_active',
  Name = 'name',
  RoleId = 'role_id',
}

export const enum QueryGroupsOrderByColumn {
  Id = 'ID',
  IsActive = 'IS_ACTIVE',
  Name = 'NAME',
}

export type QueryGroupsOrderByOrderByClause = {
  readonly column: QueryGroupsOrderByColumn;
  readonly order: SortOrder;
};

export const enum QueryKycTimelinesOrderByColumn {
  CreatedAt = 'CREATED_AT',
  Id = 'ID',
}

export type QueryKycTimelinesOrderByOrderByClause = {
  readonly column: QueryKycTimelinesOrderByColumn;
  readonly order: SortOrder;
};

export type QueryMemberAccessLimitationsFilterFilterConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<QueryMemberAccessLimitationsFilterFilterConditions>>;
  readonly OR?: InputMaybe<ReadonlyArray<QueryMemberAccessLimitationsFilterFilterConditions>>;
  readonly column?: InputMaybe<QueryMemberAccessLimitationsFilterStatic>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export const enum QueryMemberAccessLimitationsFilterStatic {
  DoesntHaveGroupRoles = 'DOESNT_HAVE_GROUP_ROLES',
  GroupTypeId = 'GROUP_TYPE_ID',
  HasGroupRolesFilterById = 'HAS_GROUP_ROLES_FILTER_BY_ID',
  ModuleId = 'MODULE_ID',
  PaymentProviderId = 'PAYMENT_PROVIDER_ID',
  ProjectId = 'PROJECT_ID',
}

export type QueryMemberAccessLimitationsFilterStaticInput = {
  readonly doesntHaveGroupRoles?: InputMaybe<Scalars['Boolean']['input']>;
  readonly group_type_id?: InputMaybe<Scalars['ID']['input']>;
  readonly hasGroupRolesFilterById?: InputMaybe<Scalars['ID']['input']>;
  readonly module_id?: InputMaybe<Scalars['ID']['input']>;
  readonly payment_provider_id?: InputMaybe<Scalars['ID']['input']>;
  readonly project_id?: InputMaybe<Scalars['ID']['input']>;
};

export const enum QueryMemberAccessLimitationsFilterStaticOperator {
  DoesntHaveGroupRoles = 'doesntHaveGroupRoles',
  GroupTypeId = 'group_type_id',
  HasGroupRolesFilterById = 'hasGroupRolesFilterById',
  ModuleId = 'module_id',
  PaymentProviderId = 'payment_provider_id',
  ProjectId = 'project_id',
}

export const enum QueryMemberAccessLimitationsFilterStaticType {
  DoesntHaveGroupRoles = 'doesntHaveGroupRoles',
  GroupTypeId = 'group_type_id',
  HasGroupRolesFilterById = 'hasGroupRolesFilterById',
  ModuleId = 'module_id',
  PaymentProviderId = 'payment_provider_id',
  ProjectId = 'project_id',
}

export const enum QueryMemberAccessLimitationsOrderByColumn {
  Id = 'ID',
}

export type QueryMemberAccessLimitationsOrderByOrderByClause = {
  readonly column: QueryMemberAccessLimitationsOrderByColumn;
  readonly order: SortOrder;
};

export type QueryMembersFilterFilterConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<QueryMembersFilterFilterConditions>>;
  readonly OR?: InputMaybe<ReadonlyArray<QueryMembersFilterFilterConditions>>;
  readonly column?: InputMaybe<QueryMembersFilterStatic>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export const enum QueryMembersFilterStatic {
  CompanyId = 'COMPANY_ID',
  DepartmentId = 'DEPARTMENT_ID',
  DepartmentPositionId = 'DEPARTMENT_POSITION_ID',
  Email = 'EMAIL',
  Fullname = 'FULLNAME',
  HasGroupRoleFilterById = 'HAS_GROUP_ROLE_FILTER_BY_ID',
  HasRoleFilterById = 'HAS_ROLE_FILTER_BY_ID',
  Id = 'ID',
  IsShowOwnerApplicants = 'IS_SHOW_OWNER_APPLICANTS',
  LastLoginAt = 'LAST_LOGIN_AT',
  MemberStatusId = 'MEMBER_STATUS_ID',
}

export type QueryMembersFilterStaticInput = {
  readonly company_id?: InputMaybe<Scalars['ID']['input']>;
  readonly department_id?: InputMaybe<Scalars['ID']['input']>;
  readonly department_position_id?: InputMaybe<Scalars['ID']['input']>;
  readonly email?: InputMaybe<Scalars['String']['input']>;
  readonly fullname?: InputMaybe<Scalars['String']['input']>;
  readonly hasGroupRoleFilterById?: InputMaybe<Scalars['ID']['input']>;
  readonly hasRoleFilterById?: InputMaybe<Scalars['ID']['input']>;
  readonly id?: InputMaybe<Scalars['ID']['input']>;
  readonly is_show_owner_applicants?: InputMaybe<Scalars['Boolean']['input']>;
  readonly last_login_at?: InputMaybe<Scalars['String']['input']>;
  readonly member_status_id?: InputMaybe<Scalars['ID']['input']>;
};

export const enum QueryMembersFilterStaticOperator {
  CompanyId = 'company_id',
  DepartmentId = 'department_id',
  DepartmentPositionId = 'department_position_id',
  Email = 'email',
  Fullname = 'fullname',
  HasGroupRoleFilterById = 'hasGroupRoleFilterById',
  HasRoleFilterById = 'hasRoleFilterById',
  Id = 'id',
  IsShowOwnerApplicants = 'is_show_owner_applicants',
  LastLoginAt = 'last_login_at',
  MemberStatusId = 'member_status_id',
}

export const enum QueryMembersFilterStaticType {
  CompanyId = 'company_id',
  DepartmentId = 'department_id',
  DepartmentPositionId = 'department_position_id',
  Email = 'email',
  Fullname = 'fullname',
  HasGroupRoleFilterById = 'hasGroupRoleFilterById',
  HasRoleFilterById = 'hasRoleFilterById',
  Id = 'id',
  IsShowOwnerApplicants = 'is_show_owner_applicants',
  LastLoginAt = 'last_login_at',
  MemberStatusId = 'member_status_id',
}

export const enum QueryMembersOrderByColumn {
  Email = 'EMAIL',
  Id = 'ID',
  IsActive = 'IS_ACTIVE',
  LastLoginAt = 'LAST_LOGIN_AT',
}

export type QueryMembersOrderByOrderByClause = {
  readonly column: QueryMembersOrderByColumn;
  readonly order: SortOrder;
};

export const enum QueryModulesOrderByColumn {
  Id = 'ID',
}

export type QueryModulesOrderByOrderByClause = {
  readonly column: QueryModulesOrderByColumn;
  readonly order: SortOrder;
};

export const enum QueryModulesWhereColumn {
  Name = 'NAME',
}

export type QueryModulesWhereWhereConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<QueryModulesWhereWhereConditions>>;
  readonly HAS?: InputMaybe<QueryModulesWhereWhereConditionsRelation>;
  readonly OR?: InputMaybe<ReadonlyArray<QueryModulesWhereWhereConditions>>;
  readonly column?: InputMaybe<QueryModulesWhereColumn>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export type QueryModulesWhereWhereConditionsRelation = {
  readonly amount?: InputMaybe<Scalars['Int']['input']>;
  readonly condition?: InputMaybe<QueryModulesWhereWhereConditions>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly relation: Scalars['String']['input'];
};

export const enum QueryModulesWithKycOrderByColumn {
  Id = 'ID',
}

export type QueryModulesWithKycOrderByOrderByClause = {
  readonly column: QueryModulesWithKycOrderByColumn;
  readonly order: SortOrder;
};

export const enum QueryModulesWithKycWhereColumn {
  Name = 'NAME',
}

export type QueryModulesWithKycWhereWhereConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<QueryModulesWithKycWhereWhereConditions>>;
  readonly HAS?: InputMaybe<QueryModulesWithKycWhereWhereConditionsRelation>;
  readonly OR?: InputMaybe<ReadonlyArray<QueryModulesWithKycWhereWhereConditions>>;
  readonly column?: InputMaybe<QueryModulesWithKycWhereColumn>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export type QueryModulesWithKycWhereWhereConditionsRelation = {
  readonly amount?: InputMaybe<Scalars['Int']['input']>;
  readonly condition?: InputMaybe<QueryModulesWithKycWhereWhereConditions>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly relation: Scalars['String']['input'];
};

export type QueryOperationTypesFilterFilterConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<QueryOperationTypesFilterFilterConditions>>;
  readonly OR?: InputMaybe<ReadonlyArray<QueryOperationTypesFilterFilterConditions>>;
  readonly column?: InputMaybe<QueryOperationTypesFilterStatic>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export const enum QueryOperationTypesFilterStatic {
  FeeTypeId = 'FEE_TYPE_ID',
  PaymentSystemId = 'PAYMENT_SYSTEM_ID',
  TransferType = 'TRANSFER_TYPE',
}

export const enum QueryOperationTypesFilterStaticEnumTransferType {
  Incoming = 'INCOMING',
  Outgoing = 'OUTGOING',
}

export type QueryOperationTypesFilterStaticInput = {
  readonly fee_type_id?: InputMaybe<Scalars['ID']['input']>;
  readonly payment_system_id?: InputMaybe<Scalars['ID']['input']>;
  readonly transfer_type?: InputMaybe<TransferType>;
};

export const enum QueryOperationTypesFilterStaticOperator {
  FeeTypeId = 'fee_type_id',
  PaymentSystemId = 'payment_system_id',
  TransferType = 'transfer_type',
}

export const enum QueryOperationTypesFilterStaticType {
  FeeTypeId = 'fee_type_id',
  PaymentSystemId = 'payment_system_id',
  TransferType = 'transfer_type',
}

export const enum QueryOwnersOrderByColumn {
  CreatedAt = 'CREATED_AT',
  Email = 'EMAIL',
  Fullname = 'FULLNAME',
  Id = 'ID',
}

export type QueryOwnersOrderByOrderByClause = {
  readonly column: QueryOwnersOrderByColumn;
  readonly order: SortOrder;
};

export type QueryPaymentBankCondition = {
  readonly address?: InputMaybe<Scalars['String']['input']>;
  readonly bank_code?: InputMaybe<Scalars['String']['input']>;
  readonly country_id?: InputMaybe<Scalars['ID']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
  readonly payment_provider_id: Scalars['ID']['input'];
  readonly payment_system_code?: InputMaybe<Scalars['String']['input']>;
  readonly payment_system_id: Scalars['ID']['input'];
};

export type QueryPaymentBanksFilterFilterConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<QueryPaymentBanksFilterFilterConditions>>;
  readonly OR?: InputMaybe<ReadonlyArray<QueryPaymentBanksFilterFilterConditions>>;
  readonly column?: InputMaybe<QueryPaymentBanksFilterStatic>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export const enum QueryPaymentBanksFilterStatic {
  Address = 'ADDRESS',
  BankCode = 'BANK_CODE',
  CountryId = 'COUNTRY_ID',
  Id = 'ID',
  Name = 'NAME',
  PaymentProviderId = 'PAYMENT_PROVIDER_ID',
  PaymentSystemCode = 'PAYMENT_SYSTEM_CODE',
  PaymentSystemId = 'PAYMENT_SYSTEM_ID',
}

export type QueryPaymentBanksFilterStaticInput = {
  readonly address?: InputMaybe<Scalars['String']['input']>;
  readonly bank_code?: InputMaybe<Scalars['String']['input']>;
  readonly country_id?: InputMaybe<Scalars['ID']['input']>;
  readonly id?: InputMaybe<Scalars['ID']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
  readonly payment_provider_id?: InputMaybe<Scalars['ID']['input']>;
  readonly payment_system_code?: InputMaybe<Scalars['String']['input']>;
  readonly payment_system_id?: InputMaybe<Scalars['ID']['input']>;
};

export const enum QueryPaymentBanksFilterStaticOperator {
  Address = 'address',
  BankCode = 'bank_code',
  CountryId = 'country_id',
  Id = 'id',
  Name = 'name',
  PaymentProviderId = 'payment_provider_id',
  PaymentSystemCode = 'payment_system_code',
  PaymentSystemId = 'payment_system_id',
}

export const enum QueryPaymentBanksFilterStaticType {
  Address = 'address',
  BankCode = 'bank_code',
  CountryId = 'country_id',
  Id = 'id',
  Name = 'name',
  PaymentProviderId = 'payment_provider_id',
  PaymentSystemCode = 'payment_system_code',
  PaymentSystemId = 'payment_system_id',
}

export const enum QueryPaymentBanksOrderByColumn {
  Id = 'ID',
  IsActive = 'IS_ACTIVE',
  Name = 'NAME',
}

export type QueryPaymentBanksOrderByOrderByClause = {
  readonly column: QueryPaymentBanksOrderByColumn;
  readonly order: SortOrder;
};

export type QueryPaymentProviderIbansFilterFilterConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<QueryPaymentProviderIbansFilterFilterConditions>>;
  readonly OR?: InputMaybe<ReadonlyArray<QueryPaymentProviderIbansFilterFilterConditions>>;
  readonly column?: InputMaybe<QueryPaymentProviderIbansFilterStatic>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export const enum QueryPaymentProviderIbansFilterStatic {
  CompanyId = 'COMPANY_ID',
  CurrencyId = 'CURRENCY_ID',
  Name = 'NAME',
}

export type QueryPaymentProviderIbansFilterStaticInput = {
  readonly company_id?: InputMaybe<Scalars['ID']['input']>;
  readonly currency_id?: InputMaybe<Scalars['ID']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
};

export const enum QueryPaymentProviderIbansFilterStaticOperator {
  CompanyId = 'company_id',
  CurrencyId = 'currency_id',
  Name = 'name',
}

export const enum QueryPaymentProviderIbansFilterStaticType {
  CompanyId = 'company_id',
  CurrencyId = 'currency_id',
  Name = 'name',
}

export const enum QueryPaymentProviderIbansOrderByColumn {
  Id = 'ID',
}

export type QueryPaymentProviderIbansOrderByOrderByClause = {
  readonly column: QueryPaymentProviderIbansOrderByColumn;
  readonly order: SortOrder;
};

export type QueryPaymentProvidersFilterFilterConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<QueryPaymentProvidersFilterFilterConditions>>;
  readonly OR?: InputMaybe<ReadonlyArray<QueryPaymentProvidersFilterFilterConditions>>;
  readonly column?: InputMaybe<QueryPaymentProvidersFilterStatic>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export const enum QueryPaymentProvidersFilterStatic {
  CompanyId = 'COMPANY_ID',
  HasAccountFilterById = 'HAS_ACCOUNT_FILTER_BY_ID',
  HasCommissionTemplateFilterById = 'HAS_COMMISSION_TEMPLATE_FILTER_BY_ID',
  HasPaymentSystemsFilterById = 'HAS_PAYMENT_SYSTEMS_FILTER_BY_ID',
  Id = 'ID',
  Name = 'NAME',
}

export type QueryPaymentProvidersFilterStaticInput = {
  readonly company_id?: InputMaybe<Scalars['ID']['input']>;
  readonly hasAccountFilterById?: InputMaybe<Scalars['ID']['input']>;
  readonly hasCommissionTemplateFilterById?: InputMaybe<Scalars['ID']['input']>;
  readonly hasPaymentSystemsFilterById?: InputMaybe<Scalars['ID']['input']>;
  readonly id?: InputMaybe<Scalars['ID']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
};

export const enum QueryPaymentProvidersFilterStaticOperator {
  CompanyId = 'company_id',
  HasAccountFilterById = 'hasAccountFilterById',
  HasCommissionTemplateFilterById = 'hasCommissionTemplateFilterById',
  HasPaymentSystemsFilterById = 'hasPaymentSystemsFilterById',
  Id = 'id',
  Name = 'name',
}

export const enum QueryPaymentProvidersFilterStaticType {
  CompanyId = 'company_id',
  HasAccountFilterById = 'hasAccountFilterById',
  HasCommissionTemplateFilterById = 'hasCommissionTemplateFilterById',
  HasPaymentSystemsFilterById = 'hasPaymentSystemsFilterById',
  Id = 'id',
  Name = 'name',
}

export const enum QueryPaymentProvidersOrderByColumn {
  Id = 'ID',
  IsActive = 'IS_ACTIVE',
  Name = 'NAME',
}

export type QueryPaymentProvidersOrderByOrderByClause = {
  readonly column: QueryPaymentProvidersOrderByColumn;
  readonly order: SortOrder;
};

export type QueryPaymentStatusesFilterFilterConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<QueryPaymentStatusesFilterFilterConditions>>;
  readonly OR?: InputMaybe<ReadonlyArray<QueryPaymentStatusesFilterFilterConditions>>;
  readonly column?: InputMaybe<QueryPaymentStatusesFilterStatic>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export const enum QueryPaymentStatusesFilterStatic {
  OperationType = 'OPERATION_TYPE',
}

export const enum QueryPaymentStatusesFilterStaticEnumOperationTypeEnum {
  BetweenAccount = 'BETWEEN_ACCOUNT',
  BetweenUsers = 'BETWEEN_USERS',
  Credit = 'CREDIT',
  Debit = 'DEBIT',
  Exchange = 'EXCHANGE',
  IncomingTransfer = 'INCOMING_TRANSFER',
  OutgoingTransfer = 'OUTGOING_TRANSFER',
  ScheduledFee = 'SCHEDULED_FEE',
}

export type QueryPaymentStatusesFilterStaticInput = {
  readonly operation_type?: InputMaybe<OperationTypeEnum>;
};

export const enum QueryPaymentStatusesFilterStaticOperator {
  OperationType = 'operation_type',
}

export const enum QueryPaymentStatusesFilterStaticType {
  OperationType = 'operation_type',
}

export type QueryPaymentSystemsFilterFilterConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<QueryPaymentSystemsFilterFilterConditions>>;
  readonly OR?: InputMaybe<ReadonlyArray<QueryPaymentSystemsFilterFilterConditions>>;
  readonly column?: InputMaybe<QueryPaymentSystemsFilterStatic>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export const enum QueryPaymentSystemsFilterStatic {
  HasCompaniesFilterById = 'HAS_COMPANIES_FILTER_BY_ID',
  HasProvidersFilterById = 'HAS_PROVIDERS_FILTER_BY_ID',
  HasProvidersFilterByName = 'HAS_PROVIDERS_FILTER_BY_NAME',
  HasRegionsFilterById = 'HAS_REGIONS_FILTER_BY_ID',
  Id = 'ID',
  Name = 'NAME',
}

export type QueryPaymentSystemsFilterStaticInput = {
  readonly hasCompaniesFilterById?: InputMaybe<Scalars['ID']['input']>;
  readonly hasProvidersFilterById?: InputMaybe<Scalars['ID']['input']>;
  readonly hasProvidersFilterByName?: InputMaybe<Scalars['String']['input']>;
  readonly hasRegionsFilterById?: InputMaybe<Scalars['ID']['input']>;
  readonly id?: InputMaybe<Scalars['Mixed']['input']>;
  readonly name?: InputMaybe<Scalars['Mixed']['input']>;
};

export const enum QueryPaymentSystemsFilterStaticOperator {
  HasCompaniesFilterById = 'hasCompaniesFilterById',
  HasProvidersFilterById = 'hasProvidersFilterById',
  HasProvidersFilterByName = 'hasProvidersFilterByName',
  HasRegionsFilterById = 'hasRegionsFilterById',
  Id = 'id',
  Name = 'name',
}

export const enum QueryPaymentSystemsFilterStaticType {
  HasCompaniesFilterById = 'hasCompaniesFilterById',
  HasProvidersFilterById = 'hasProvidersFilterById',
  HasProvidersFilterByName = 'hasProvidersFilterByName',
  HasRegionsFilterById = 'hasRegionsFilterById',
  Id = 'id',
  Name = 'name',
}

export const enum QueryPaymentSystemsOrderByColumn {
  Id = 'ID',
  IsActive = 'IS_ACTIVE',
  Name = 'NAME',
}

export type QueryPaymentSystemsOrderByOrderByClause = {
  readonly column: QueryPaymentSystemsOrderByColumn;
  readonly order: SortOrder;
};

export type QueryPaymentsFilterFilterConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<QueryPaymentsFilterFilterConditions>>;
  readonly OR?: InputMaybe<ReadonlyArray<QueryPaymentsFilterFilterConditions>>;
  readonly column?: InputMaybe<QueryPaymentsFilterStatic>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export const enum QueryPaymentsFilterStatic {
  CompanyId = 'COMPANY_ID',
  HasAccountFilterByAccountNumber = 'HAS_ACCOUNT_FILTER_BY_ACCOUNT_NUMBER',
  Id = 'ID',
  OperationTypeId = 'OPERATION_TYPE_ID',
  PaymentProviderId = 'PAYMENT_PROVIDER_ID',
  SenderName = 'SENDER_NAME',
  StatusId = 'STATUS_ID',
  UrgencyId = 'URGENCY_ID',
}

export type QueryPaymentsFilterStaticInput = {
  readonly company_id?: InputMaybe<Scalars['ID']['input']>;
  readonly hasAccountFilterByAccountNumber?: InputMaybe<Scalars['String']['input']>;
  readonly id?: InputMaybe<Scalars['ID']['input']>;
  readonly operation_type_id?: InputMaybe<Scalars['ID']['input']>;
  readonly payment_provider_id?: InputMaybe<Scalars['ID']['input']>;
  readonly sender_name?: InputMaybe<Scalars['String']['input']>;
  readonly status_id?: InputMaybe<Scalars['ID']['input']>;
  readonly urgency_id?: InputMaybe<Scalars['ID']['input']>;
};

export const enum QueryPaymentsFilterStaticOperator {
  CompanyId = 'company_id',
  HasAccountFilterByAccountNumber = 'hasAccountFilterByAccountNumber',
  Id = 'id',
  OperationTypeId = 'operation_type_id',
  PaymentProviderId = 'payment_provider_id',
  SenderName = 'sender_name',
  StatusId = 'status_id',
  UrgencyId = 'urgency_id',
}

export const enum QueryPaymentsFilterStaticType {
  CompanyId = 'company_id',
  HasAccountFilterByAccountNumber = 'hasAccountFilterByAccountNumber',
  Id = 'id',
  OperationTypeId = 'operation_type_id',
  PaymentProviderId = 'payment_provider_id',
  SenderName = 'sender_name',
  StatusId = 'status_id',
  UrgencyId = 'urgency_id',
}

export const enum QueryPaymentsOrderByColumn {
  Amount = 'AMOUNT',
  CreatedAt = 'CREATED_AT',
  Fee = 'FEE',
  Id = 'ID',
  PaymentNumber = 'PAYMENT_NUMBER',
}

export type QueryPaymentsOrderByOrderByClause = {
  readonly column: QueryPaymentsOrderByColumn;
  readonly order: SortOrder;
};

export const enum QueryPermissionsWhereColumn {
  Id = 'ID',
  Name = 'NAME',
}

export type QueryPermissionsWhereWhereConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<QueryPermissionsWhereWhereConditions>>;
  readonly HAS?: InputMaybe<QueryPermissionsWhereWhereConditionsRelation>;
  readonly OR?: InputMaybe<ReadonlyArray<QueryPermissionsWhereWhereConditions>>;
  readonly column?: InputMaybe<QueryPermissionsWhereColumn>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export type QueryPermissionsWhereWhereConditionsRelation = {
  readonly amount?: InputMaybe<Scalars['Int']['input']>;
  readonly condition?: InputMaybe<QueryPermissionsWhereWhereConditions>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly relation: Scalars['String']['input'];
};

export type QueryPriceListFeesFilterFilterConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<QueryPriceListFeesFilterFilterConditions>>;
  readonly OR?: InputMaybe<ReadonlyArray<QueryPriceListFeesFilterFilterConditions>>;
  readonly column?: InputMaybe<QueryPriceListFeesFilterStatic>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export const enum QueryPriceListFeesFilterStatic {
  HasCompanyFilterById = 'HAS_COMPANY_FILTER_BY_ID',
  HasFeesFilterById = 'HAS_FEES_FILTER_BY_ID',
  HasPaymentProviderFilterById = 'HAS_PAYMENT_PROVIDER_FILTER_BY_ID',
  HasPaymentSystemFilterById = 'HAS_PAYMENT_SYSTEM_FILTER_BY_ID',
  Id = 'ID',
  OperationTypeId = 'OPERATION_TYPE_ID',
  PeriodId = 'PERIOD_ID',
  PriceListId = 'PRICE_LIST_ID',
  TypeId = 'TYPE_ID',
}

export type QueryPriceListFeesFilterStaticInput = {
  readonly hasCompanyFilterById?: InputMaybe<Scalars['ID']['input']>;
  readonly hasFeesFilterById?: InputMaybe<Scalars['ID']['input']>;
  readonly hasPaymentProviderFilterById?: InputMaybe<Scalars['ID']['input']>;
  readonly hasPaymentSystemFilterById?: InputMaybe<Scalars['ID']['input']>;
  readonly id?: InputMaybe<Scalars['ID']['input']>;
  readonly operation_type_id?: InputMaybe<Scalars['ID']['input']>;
  readonly period_id?: InputMaybe<Scalars['ID']['input']>;
  readonly price_list_id?: InputMaybe<Scalars['ID']['input']>;
  readonly type_id?: InputMaybe<Scalars['ID']['input']>;
};

export const enum QueryPriceListFeesFilterStaticOperator {
  HasCompanyFilterById = 'hasCompanyFilterById',
  HasFeesFilterById = 'hasFeesFilterById',
  HasPaymentProviderFilterById = 'hasPaymentProviderFilterById',
  HasPaymentSystemFilterById = 'hasPaymentSystemFilterById',
  Id = 'id',
  OperationTypeId = 'operation_type_id',
  PeriodId = 'period_id',
  PriceListId = 'price_list_id',
  TypeId = 'type_id',
}

export const enum QueryPriceListFeesFilterStaticType {
  HasCompanyFilterById = 'hasCompanyFilterById',
  HasFeesFilterById = 'hasFeesFilterById',
  HasPaymentProviderFilterById = 'hasPaymentProviderFilterById',
  HasPaymentSystemFilterById = 'hasPaymentSystemFilterById',
  Id = 'id',
  OperationTypeId = 'operation_type_id',
  PeriodId = 'period_id',
  PriceListId = 'price_list_id',
  TypeId = 'type_id',
}

export type QueryProjectsFilterFilterConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<QueryProjectsFilterFilterConditions>>;
  readonly OR?: InputMaybe<ReadonlyArray<QueryProjectsFilterFilterConditions>>;
  readonly column?: InputMaybe<QueryProjectsFilterStatic>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export const enum QueryProjectsFilterStatic {
  CompanyId = 'COMPANY_ID',
  Id = 'ID',
  ModuleId = 'MODULE_ID',
}

export type QueryProjectsFilterStaticInput = {
  readonly company_id?: InputMaybe<Scalars['ID']['input']>;
  readonly id?: InputMaybe<Scalars['ID']['input']>;
  readonly module_id?: InputMaybe<Scalars['ID']['input']>;
};

export const enum QueryProjectsFilterStaticOperator {
  CompanyId = 'company_id',
  Id = 'id',
  ModuleId = 'module_id',
}

export const enum QueryProjectsFilterStaticType {
  CompanyId = 'company_id',
  Id = 'id',
  ModuleId = 'module_id',
}

export type QueryRegionsFilterFilterConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<QueryRegionsFilterFilterConditions>>;
  readonly OR?: InputMaybe<ReadonlyArray<QueryRegionsFilterFilterConditions>>;
  readonly column?: InputMaybe<QueryRegionsFilterStatic>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export const enum QueryRegionsFilterStatic {
  CompanyId = 'COMPANY_ID',
  HasCountriesFilterById = 'HAS_COUNTRIES_FILTER_BY_ID',
  HasCountriesFilterByName = 'HAS_COUNTRIES_FILTER_BY_NAME',
  HasPaymentSystemMixedIdOrName = 'HAS_PAYMENT_SYSTEM_MIXED_ID_OR_NAME',
}

export type QueryRegionsFilterStaticInput = {
  readonly company_id?: InputMaybe<Scalars['ID']['input']>;
  readonly hasCountriesFilterById?: InputMaybe<Scalars['ID']['input']>;
  readonly hasCountriesFilterByName?: InputMaybe<Scalars['String']['input']>;
  readonly hasPaymentSystemMixedIdOrName?: InputMaybe<Scalars['Mixed']['input']>;
};

export const enum QueryRegionsFilterStaticOperator {
  CompanyId = 'company_id',
  HasCountriesFilterById = 'hasCountriesFilterById',
  HasCountriesFilterByName = 'hasCountriesFilterByName',
  HasPaymentSystemMixedIdOrName = 'hasPaymentSystemMixedIdOrName',
}

export const enum QueryRegionsFilterStaticType {
  CompanyId = 'company_id',
  HasCountriesFilterById = 'hasCountriesFilterById',
  HasCountriesFilterByName = 'hasCountriesFilterByName',
  HasPaymentSystemMixedIdOrName = 'hasPaymentSystemMixedIdOrName',
}

export type QueryRequisitesFilterFilterConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<QueryRequisitesFilterFilterConditions>>;
  readonly OR?: InputMaybe<ReadonlyArray<QueryRequisitesFilterFilterConditions>>;
  readonly column?: InputMaybe<QueryRequisitesFilterStatic>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export const enum QueryRequisitesFilterStatic {
  AccountNumber = 'ACCOUNT_NUMBER',
  CompanyId = 'COMPANY_ID',
  PaymentBankId = 'PAYMENT_BANK_ID',
  PaymentProviderId = 'PAYMENT_PROVIDER_ID',
  PaymentSystemId = 'PAYMENT_SYSTEM_ID',
}

export type QueryRequisitesFilterStaticInput = {
  readonly account_number?: InputMaybe<Scalars['String']['input']>;
  readonly company_id?: InputMaybe<Scalars['ID']['input']>;
  readonly payment_bank_id?: InputMaybe<Scalars['ID']['input']>;
  readonly payment_provider_id?: InputMaybe<Scalars['ID']['input']>;
  readonly payment_system_id?: InputMaybe<Scalars['ID']['input']>;
};

export const enum QueryRequisitesFilterStaticOperator {
  AccountNumber = 'account_number',
  CompanyId = 'company_id',
  PaymentBankId = 'payment_bank_id',
  PaymentProviderId = 'payment_provider_id',
  PaymentSystemId = 'payment_system_id',
}

export const enum QueryRequisitesFilterStaticType {
  AccountNumber = 'account_number',
  CompanyId = 'company_id',
  PaymentBankId = 'payment_bank_id',
  PaymentProviderId = 'payment_provider_id',
  PaymentSystemId = 'payment_system_id',
}

export type QueryRolesFilterFilterConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<QueryRolesFilterFilterConditions>>;
  readonly OR?: InputMaybe<ReadonlyArray<QueryRolesFilterFilterConditions>>;
  readonly column?: InputMaybe<QueryRolesFilterStatic>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export const enum QueryRolesFilterStatic {
  CompanyId = 'COMPANY_ID',
  HasGroupsMixedIdOrName = 'HAS_GROUPS_MIXED_ID_OR_NAME',
  HasGroupTypeMixedIdOrName = 'HAS_GROUP_TYPE_MIXED_ID_OR_NAME',
  Name = 'NAME',
}

export type QueryRolesFilterStaticInput = {
  readonly company_id?: InputMaybe<Scalars['ID']['input']>;
  readonly hasGroupTypeMixedIdOrName?: InputMaybe<Scalars['Mixed']['input']>;
  readonly hasGroupsMixedIdOrName?: InputMaybe<Scalars['Mixed']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
};

export const enum QueryRolesFilterStaticOperator {
  CompanyId = 'company_id',
  HasGroupTypeMixedIdOrName = 'hasGroupTypeMixedIdOrName',
  HasGroupsMixedIdOrName = 'hasGroupsMixedIdOrName',
  Name = 'name',
}

export const enum QueryRolesFilterStaticType {
  CompanyId = 'company_id',
  HasGroupTypeMixedIdOrName = 'hasGroupTypeMixedIdOrName',
  HasGroupsMixedIdOrName = 'hasGroupsMixedIdOrName',
  Name = 'name',
}

export const enum QueryRolesOrderByColumn {
  Description = 'DESCRIPTION',
  Id = 'ID',
  Name = 'NAME',
}

export type QueryRolesOrderByOrderByClause = {
  readonly column: QueryRolesOrderByColumn;
  readonly order: SortOrder;
};

export type QueryTicketsFilterFilterConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<QueryTicketsFilterFilterConditions>>;
  readonly OR?: InputMaybe<ReadonlyArray<QueryTicketsFilterFilterConditions>>;
  readonly column?: InputMaybe<QueryTicketsFilterStatic>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export const enum QueryTicketsFilterStatic {
  ClientId = 'CLIENT_ID',
  HasCompanyFilterById = 'HAS_COMPANY_FILTER_BY_ID',
  Id = 'ID',
  MemberId = 'MEMBER_ID',
}

export type QueryTicketsFilterStaticInput = {
  readonly client_id?: InputMaybe<Scalars['ID']['input']>;
  readonly hasCompanyFilterById?: InputMaybe<Scalars['ID']['input']>;
  readonly id?: InputMaybe<Scalars['ID']['input']>;
  readonly member_id?: InputMaybe<Scalars['ID']['input']>;
};

export const enum QueryTicketsFilterStaticOperator {
  ClientId = 'client_id',
  HasCompanyFilterById = 'hasCompanyFilterById',
  Id = 'id',
  MemberId = 'member_id',
}

export const enum QueryTicketsFilterStaticType {
  ClientId = 'client_id',
  HasCompanyFilterById = 'hasCompanyFilterById',
  Id = 'id',
  MemberId = 'member_id',
}

export const enum QueryTicketsOrderByColumn {
  Id = 'ID',
}

export type QueryTicketsOrderByCompany = {
  readonly aggregate: OrderByRelationAggregateFunction;
};

export type QueryTicketsOrderByDepartment = {
  readonly aggregate: OrderByRelationAggregateFunction;
};

export type QueryTicketsOrderByRelationOrderByClause = {
  readonly column?: InputMaybe<QueryTicketsOrderByColumn>;
  readonly company?: InputMaybe<QueryTicketsOrderByCompany>;
  readonly department?: InputMaybe<QueryTicketsOrderByDepartment>;
  readonly order: SortOrder;
};

export type QueryTransferIncomingsFilterFilterConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<QueryTransferIncomingsFilterFilterConditions>>;
  readonly OR?: InputMaybe<ReadonlyArray<QueryTransferIncomingsFilterFilterConditions>>;
  readonly column?: InputMaybe<QueryTransferIncomingsFilterStatic>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export const enum QueryTransferIncomingsFilterStatic {
  HasAccountFilterByAccountNumber = 'HAS_ACCOUNT_FILTER_BY_ACCOUNT_NUMBER',
  HasFeeFilterByFee = 'HAS_FEE_FILTER_BY_FEE',
  HasFeeFilterByFeeAmount = 'HAS_FEE_FILTER_BY_FEE_AMOUNT',
  Id = 'ID',
  OperationTypeId = 'OPERATION_TYPE_ID',
  SenderName = 'SENDER_NAME',
  StatusId = 'STATUS_ID',
  UrgencyId = 'URGENCY_ID',
}

export type QueryTransferIncomingsFilterStaticInput = {
  readonly hasAccountFilterByAccountNumber?: InputMaybe<Scalars['String']['input']>;
  readonly hasFeeFilterByFee?: InputMaybe<Scalars['String']['input']>;
  readonly hasFeeFilterByFeeAmount?: InputMaybe<Scalars['String']['input']>;
  readonly id?: InputMaybe<Scalars['ID']['input']>;
  readonly operation_type_id?: InputMaybe<Scalars['ID']['input']>;
  readonly sender_name?: InputMaybe<Scalars['String']['input']>;
  readonly status_id?: InputMaybe<Scalars['ID']['input']>;
  readonly urgency_id?: InputMaybe<Scalars['ID']['input']>;
};

export const enum QueryTransferIncomingsFilterStaticOperator {
  HasAccountFilterByAccountNumber = 'hasAccountFilterByAccountNumber',
  HasFeeFilterByFee = 'hasFeeFilterByFee',
  HasFeeFilterByFeeAmount = 'hasFeeFilterByFeeAmount',
  Id = 'id',
  OperationTypeId = 'operation_type_id',
  SenderName = 'sender_name',
  StatusId = 'status_id',
  UrgencyId = 'urgency_id',
}

export const enum QueryTransferIncomingsFilterStaticType {
  HasAccountFilterByAccountNumber = 'hasAccountFilterByAccountNumber',
  HasFeeFilterByFee = 'hasFeeFilterByFee',
  HasFeeFilterByFeeAmount = 'hasFeeFilterByFeeAmount',
  Id = 'id',
  OperationTypeId = 'operation_type_id',
  SenderName = 'sender_name',
  StatusId = 'status_id',
  UrgencyId = 'urgency_id',
}

export type QueryTransferOutgoingsFilterFilterConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<QueryTransferOutgoingsFilterFilterConditions>>;
  readonly OR?: InputMaybe<ReadonlyArray<QueryTransferOutgoingsFilterFilterConditions>>;
  readonly column?: InputMaybe<QueryTransferOutgoingsFilterStatic>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export const enum QueryTransferOutgoingsFilterStatic {
  HasAccountFilterByAccountNumber = 'HAS_ACCOUNT_FILTER_BY_ACCOUNT_NUMBER',
  HasFeeFilterByFee = 'HAS_FEE_FILTER_BY_FEE',
  HasFeeFilterByFeeAmount = 'HAS_FEE_FILTER_BY_FEE_AMOUNT',
  HasSenderMixedNameOrFullname = 'HAS_SENDER_MIXED_NAME_OR_FULLNAME',
  Id = 'ID',
  OperationTypeId = 'OPERATION_TYPE_ID',
  RecipientName = 'RECIPIENT_NAME',
  StatusId = 'STATUS_ID',
  UrgencyId = 'URGENCY_ID',
  UserType = 'USER_TYPE',
}

export const enum QueryTransferOutgoingsFilterStaticEnumUserType {
  ApplicantCompany = 'APPLICANT_COMPANY',
  ApplicantIndividual = 'APPLICANT_INDIVIDUAL',
  Members = 'MEMBERS',
}

export type QueryTransferOutgoingsFilterStaticInput = {
  readonly hasAccountFilterByAccountNumber?: InputMaybe<Scalars['String']['input']>;
  readonly hasFeeFilterByFee?: InputMaybe<Scalars['String']['input']>;
  readonly hasFeeFilterByFeeAmount?: InputMaybe<Scalars['String']['input']>;
  readonly hasSenderMixedNameOrFullname?: InputMaybe<Scalars['Mixed']['input']>;
  readonly id?: InputMaybe<Scalars['ID']['input']>;
  readonly operation_type_id?: InputMaybe<Scalars['ID']['input']>;
  readonly recipient_name?: InputMaybe<Scalars['String']['input']>;
  readonly status_id?: InputMaybe<Scalars['ID']['input']>;
  readonly urgency_id?: InputMaybe<Scalars['ID']['input']>;
  readonly user_type?: InputMaybe<UserType>;
};

export const enum QueryTransferOutgoingsFilterStaticOperator {
  HasAccountFilterByAccountNumber = 'hasAccountFilterByAccountNumber',
  HasFeeFilterByFee = 'hasFeeFilterByFee',
  HasFeeFilterByFeeAmount = 'hasFeeFilterByFeeAmount',
  HasSenderMixedNameOrFullname = 'hasSenderMixedNameOrFullname',
  Id = 'id',
  OperationTypeId = 'operation_type_id',
  RecipientName = 'recipient_name',
  StatusId = 'status_id',
  UrgencyId = 'urgency_id',
  UserType = 'user_type',
}

export const enum QueryTransferOutgoingsFilterStaticType {
  HasAccountFilterByAccountNumber = 'hasAccountFilterByAccountNumber',
  HasFeeFilterByFee = 'hasFeeFilterByFee',
  HasFeeFilterByFeeAmount = 'hasFeeFilterByFeeAmount',
  HasSenderMixedNameOrFullname = 'hasSenderMixedNameOrFullname',
  Id = 'id',
  OperationTypeId = 'operation_type_id',
  RecipientName = 'recipient_name',
  StatusId = 'status_id',
  UrgencyId = 'urgency_id',
  UserType = 'user_type',
}

export type QueryUsersFilterFilterConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<QueryUsersFilterFilterConditions>>;
  readonly OR?: InputMaybe<ReadonlyArray<QueryUsersFilterFilterConditions>>;
  readonly column?: InputMaybe<QueryUsersFilterStatic>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export const enum QueryUsersFilterStatic {
  CompanyId = 'COMPANY_ID',
  Email = 'EMAIL',
  Fullname = 'FULLNAME',
  GroupId = 'GROUP_ID',
  GroupTypeId = 'GROUP_TYPE_ID',
  Id = 'ID',
  RoleId = 'ROLE_ID',
}

export type QueryUsersFilterStaticInput = {
  readonly company_id?: InputMaybe<Scalars['ID']['input']>;
  readonly email?: InputMaybe<Scalars['String']['input']>;
  readonly fullname?: InputMaybe<Scalars['String']['input']>;
  readonly group_id?: InputMaybe<Scalars['ID']['input']>;
  readonly group_type_id?: InputMaybe<Scalars['ID']['input']>;
  readonly id?: InputMaybe<Scalars['ID']['input']>;
  readonly role_id?: InputMaybe<Scalars['ID']['input']>;
};

export const enum QueryUsersFilterStaticOperator {
  CompanyId = 'company_id',
  Email = 'email',
  Fullname = 'fullname',
  GroupId = 'group_id',
  GroupTypeId = 'group_type_id',
  Id = 'id',
  RoleId = 'role_id',
}

export const enum QueryUsersFilterStaticType {
  CompanyId = 'company_id',
  Email = 'email',
  Fullname = 'fullname',
  GroupId = 'group_id',
  GroupTypeId = 'group_type_id',
  Id = 'id',
  RoleId = 'role_id',
}

export const enum QueryUsersOrderByColumn {
  Email = 'EMAIL',
  Fullname = 'FULLNAME',
  Id = 'ID',
}

export type QueryUsersOrderByOrderByClause = {
  readonly column: QueryUsersOrderByColumn;
  readonly order: SortOrder;
};

export type RawFile = {
  readonly __typename?: 'RawFile';
  readonly base64: Scalars['String']['output'];
};

export const enum RecipientType {
  Group = 'GROUP',
  Person = 'PERSON',
}

export type Region = {
  readonly __typename?: 'Region';
  readonly company?: Maybe<Company>;
  readonly countries?: Maybe<ReadonlyArray<Maybe<Country>>>;
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
};

export type RegionPaginator = {
  readonly __typename?: 'RegionPaginator';
  readonly data: ReadonlyArray<Region>;
  readonly paginatorInfo: PaginatorInfo;
};

export type Requisite = {
  readonly __typename?: 'Requisite';
  readonly account_number?: Maybe<Scalars['String']['output']>;
  readonly bank?: Maybe<PaymentBank>;
  readonly currency?: Maybe<Currencies>;
  readonly id?: Maybe<Scalars['ID']['output']>;
  readonly owner?: Maybe<ApplicantIndividual>;
};

export type RespondentFee = {
  readonly __typename?: 'RespondentFee';
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
};

export type Role = {
  readonly __typename?: 'Role';
  readonly company?: Maybe<Company>;
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly group_type?: Maybe<GroupType>;
  readonly groups?: Maybe<ReadonlyArray<Maybe<GroupRole>>>;
  readonly groups_count?: Maybe<Scalars['Int']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly is_all_companies?: Maybe<Scalars['Boolean']['output']>;
  readonly name: Scalars['String']['output'];
  readonly permission_category_all_member?: Maybe<ReadonlyArray<Maybe<PermissionCategory>>>;
  readonly permissions?: Maybe<ReadonlyArray<Maybe<Permissions>>>;
  readonly permissions_tree?: Maybe<Scalars['JSON']['output']>;
};

export type RolePaginator = {
  readonly __typename?: 'RolePaginator';
  readonly data: ReadonlyArray<Role>;
  readonly paginatorInfo: PaginatorInfo;
};

export const enum SqlOperator {
  Between = 'BETWEEN',
  Eq = 'EQ',
  Gt = 'GT',
  Gte = 'GTE',
  Ilike = 'ILIKE',
  In = 'IN',
  IsNotNull = 'IS_NOT_NULL',
  IsNull = 'IS_NULL',
  Like = 'LIKE',
  Lt = 'LT',
  Lte = 'LTE',
  Neq = 'NEQ',
  NotBetween = 'NOT_BETWEEN',
  NotIn = 'NOT_IN',
  NotLike = 'NOT_LIKE',
}

export const enum Securities {
  Auto = 'Auto',
  Ssl = 'Ssl',
  Starttls = 'Starttls',
}

export type Sender = {
  readonly __typename?: 'Sender';
  readonly sender_name: Scalars['String']['output'];
};

export const enum ServiceType {
  AdminNotify = 'AdminNotify',
  Banking = 'Banking',
  BankingCommon = 'BankingCommon',
  BankingSystem = 'BankingSystem',
  Common = 'Common',
  System = 'System',
}

export const enum Sex {
  Female = 'Female',
  Male = 'Male',
}

export type SimplePaginatorInfo = {
  readonly __typename?: 'SimplePaginatorInfo';
  readonly count: Scalars['Int']['output'];
  readonly currentPage: Scalars['Int']['output'];
  readonly firstItem?: Maybe<Scalars['Int']['output']>;
  readonly hasMorePages: Scalars['Boolean']['output'];
  readonly lastItem?: Maybe<Scalars['Int']['output']>;
  readonly perPage: Scalars['Int']['output'];
};

export const enum Sort {
  Asc = 'ASC',
  Desc = 'DESC',
}

export const enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type State = {
  readonly __typename?: 'State';
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
};

export type StateReason = {
  readonly __typename?: 'StateReason';
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
};

export type StatusType = {
  readonly __typename?: 'StatusType';
  readonly message?: Maybe<Scalars['String']['output']>;
  readonly status: Scalars['String']['output'];
};

export type Ticket = {
  readonly __typename?: 'Ticket';
  readonly client?: Maybe<ApplicantIndividual>;
  readonly comments?: Maybe<ReadonlyArray<Maybe<TicketComments>>>;
  readonly company?: Maybe<Company>;
  readonly created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  readonly department?: Maybe<Department>;
  readonly file_object?: Maybe<Files>;
  readonly id: Scalars['ID']['output'];
  readonly member?: Maybe<Members>;
  readonly message: Scalars['String']['output'];
  readonly position?: Maybe<DepartmentPosition>;
  readonly status?: Maybe<TicketStatus>;
  readonly title: Scalars['String']['output'];
  readonly updated_at?: Maybe<Scalars['DateTimeUtc']['output']>;
};

export type TicketComments = {
  readonly __typename?: 'TicketComments';
  readonly client?: Maybe<ApplicantIndividual>;
  readonly created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  readonly file_object?: Maybe<Files>;
  readonly id: Scalars['ID']['output'];
  readonly message: Scalars['String']['output'];
  readonly ticket?: Maybe<Ticket>;
  readonly updated_at?: Maybe<Scalars['DateTimeUtc']['output']>;
};

export type TicketPaginator = {
  readonly __typename?: 'TicketPaginator';
  readonly data: ReadonlyArray<Ticket>;
  readonly paginatorInfo: PaginatorInfo;
};

export type TicketStatus = {
  readonly __typename?: 'TicketStatus';
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
};

export type TransferIncoming = {
  readonly __typename?: 'TransferIncoming';
  readonly account?: Maybe<Account>;
  readonly amount: Scalars['Decimal']['output'];
  readonly amount_debt: Scalars['Decimal']['output'];
  readonly bank_message?: Maybe<Scalars['String']['output']>;
  readonly channel?: Maybe<Scalars['String']['output']>;
  readonly company?: Maybe<Company>;
  readonly created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  readonly currency?: Maybe<Currencies>;
  readonly execution_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  readonly fee?: Maybe<Fee>;
  readonly fees?: Maybe<ReadonlyArray<Maybe<Fee>>>;
  readonly files?: Maybe<ReadonlyArray<Maybe<Files>>>;
  readonly id: Scalars['ID']['output'];
  readonly payment_bank?: Maybe<PaymentBank>;
  readonly payment_number: Scalars['String']['output'];
  readonly payment_operation_type?: Maybe<OperationType>;
  readonly payment_provider?: Maybe<PaymentProvider>;
  readonly payment_provider_history?: Maybe<PaymentProviderHistory>;
  readonly payment_system?: Maybe<PaymentSystem>;
  readonly payment_urgency?: Maybe<PaymentUrgency>;
  readonly reason?: Maybe<Scalars['String']['output']>;
  readonly recipient?: Maybe<Client>;
  readonly respondent_fee?: Maybe<RespondentFee>;
  readonly sender_account?: Maybe<Scalars['String']['output']>;
  readonly sender_address?: Maybe<Scalars['String']['output']>;
  readonly sender_bank_address?: Maybe<Scalars['String']['output']>;
  readonly sender_bank_country?: Maybe<Country>;
  readonly sender_bank_name?: Maybe<Scalars['String']['output']>;
  readonly sender_bank_swift?: Maybe<Scalars['String']['output']>;
  readonly sender_city?: Maybe<Scalars['String']['output']>;
  readonly sender_country?: Maybe<Country>;
  readonly sender_name?: Maybe<Scalars['String']['output']>;
  readonly sender_state?: Maybe<Scalars['String']['output']>;
  readonly sender_zip?: Maybe<Scalars['String']['output']>;
  readonly status?: Maybe<PaymentStatus>;
  readonly system_message?: Maybe<Scalars['String']['output']>;
  readonly transfer_type?: Maybe<TypeOfTransfer>;
  readonly updated_at?: Maybe<Scalars['DateTimeUtc']['output']>;
};

export type TransferIncomingHistory = {
  readonly __typename?: 'TransferIncomingHistory';
  readonly action?: Maybe<Scalars['String']['output']>;
  readonly comment?: Maybe<Scalars['String']['output']>;
  readonly created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly status?: Maybe<PaymentStatus>;
};

export type TransferIncomingHistoryPaginator = {
  readonly __typename?: 'TransferIncomingHistoryPaginator';
  readonly data: ReadonlyArray<TransferIncomingHistory>;
  readonly paginatorInfo: PaginatorInfo;
};

export type TransferIncomingPaginator = {
  readonly __typename?: 'TransferIncomingPaginator';
  readonly data: ReadonlyArray<TransferIncoming>;
  readonly paginatorInfo: PaginatorInfo;
};

export type TransferIncomingStatistic = {
  readonly __typename?: 'TransferIncomingStatistic';
  readonly count: Scalars['Int']['output'];
  readonly name: Scalars['String']['output'];
  readonly status_id: Scalars['ID']['output'];
};

export type TransferOutgoing = {
  readonly __typename?: 'TransferOutgoing';
  readonly account?: Maybe<Account>;
  readonly amount: Scalars['Decimal']['output'];
  readonly amount_debt: Scalars['Decimal']['output'];
  readonly bank_message?: Maybe<Scalars['String']['output']>;
  readonly channel?: Maybe<Scalars['String']['output']>;
  readonly company?: Maybe<Company>;
  readonly created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  readonly currency?: Maybe<Currencies>;
  readonly execution_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  readonly fee?: Maybe<Fee>;
  readonly fees?: Maybe<ReadonlyArray<Maybe<Fee>>>;
  readonly files?: Maybe<ReadonlyArray<Maybe<Files>>>;
  readonly id: Scalars['ID']['output'];
  readonly payment_bank?: Maybe<PaymentBank>;
  readonly payment_number: Scalars['String']['output'];
  readonly payment_operation_type?: Maybe<OperationType>;
  readonly payment_provider?: Maybe<PaymentProvider>;
  readonly payment_provider_history?: Maybe<PaymentProviderHistory>;
  readonly payment_system?: Maybe<PaymentSystem>;
  readonly payment_urgency?: Maybe<PaymentUrgency>;
  readonly reason?: Maybe<Scalars['String']['output']>;
  readonly recipient_account: Scalars['String']['output'];
  readonly recipient_address: Scalars['String']['output'];
  readonly recipient_bank_address: Scalars['String']['output'];
  readonly recipient_bank_country?: Maybe<Country>;
  readonly recipient_bank_name: Scalars['String']['output'];
  readonly recipient_bank_swift?: Maybe<Scalars['String']['output']>;
  readonly recipient_city: Scalars['String']['output'];
  readonly recipient_country?: Maybe<Country>;
  readonly recipient_name: Scalars['String']['output'];
  readonly recipient_state: Scalars['String']['output'];
  readonly recipient_zip: Scalars['String']['output'];
  readonly requested_by?: Maybe<Clientable>;
  readonly respondent_fee?: Maybe<RespondentFee>;
  readonly sender?: Maybe<Client>;
  readonly status?: Maybe<PaymentStatus>;
  readonly system_message?: Maybe<Scalars['String']['output']>;
  readonly transfer_type?: Maybe<TypeOfTransfer>;
  readonly updated_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  readonly user_type?: Maybe<UserType>;
};

export type TransferOutgoingHistory = {
  readonly __typename?: 'TransferOutgoingHistory';
  readonly action?: Maybe<Scalars['String']['output']>;
  readonly comment?: Maybe<Scalars['String']['output']>;
  readonly created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly status?: Maybe<PaymentStatus>;
};

export type TransferOutgoingHistoryPaginator = {
  readonly __typename?: 'TransferOutgoingHistoryPaginator';
  readonly data: ReadonlyArray<TransferOutgoingHistory>;
  readonly paginatorInfo: PaginatorInfo;
};

export type TransferOutgoingPaginator = {
  readonly __typename?: 'TransferOutgoingPaginator';
  readonly data: ReadonlyArray<TransferOutgoing>;
  readonly paginatorInfo: PaginatorInfo;
};

export type TransferOutgoingStatistic = {
  readonly __typename?: 'TransferOutgoingStatistic';
  readonly count: Scalars['Int']['output'];
  readonly name: Scalars['String']['output'];
  readonly status_id: Scalars['ID']['output'];
};

export const enum TransferType {
  Incoming = 'INCOMING',
  Outgoing = 'OUTGOING',
}

export type TwoFactorAuthSettings = {
  readonly __typename?: 'TwoFactorAuthSettings';
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
};

export type TwoFactorAuthSettingsPaginator = {
  readonly __typename?: 'TwoFactorAuthSettingsPaginator';
  readonly data: ReadonlyArray<TwoFactorAuthSettings>;
  readonly paginatorInfo: PaginatorInfo;
};

export type TwoFactorAuthToken = {
  readonly __typename?: 'TwoFactorAuthToken';
  readonly auth_token?: Maybe<Scalars['String']['output']>;
  readonly two_factor?: Maybe<Scalars['Boolean']['output']>;
};

export type TypeOfIndustry = {
  readonly __typename?: 'TypeOfIndustry';
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
};

export type TypeOfTransfer = {
  readonly __typename?: 'TypeOfTransfer';
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
};

export const enum UserType {
  ApplicantCompany = 'ApplicantCompany',
  ApplicantIndividual = 'ApplicantIndividual',
  Members = 'Members',
}

export type Users = {
  readonly __typename?: 'Users';
  readonly company?: Maybe<Company>;
  readonly email?: Maybe<Scalars['EMAIL']['output']>;
  readonly first_name?: Maybe<Scalars['String']['output']>;
  readonly fullname?: Maybe<Scalars['String']['output']>;
  readonly group?: Maybe<GroupRole>;
  readonly id?: Maybe<Scalars['ID']['output']>;
  readonly last_name?: Maybe<Scalars['String']['output']>;
};

export type UsersPaginator = {
  readonly __typename?: 'UsersPaginator';
  readonly data: ReadonlyArray<Users>;
  readonly paginatorInfo: PaginatorInfo;
};

export type WhereConditions = {
  readonly AND?: InputMaybe<ReadonlyArray<WhereConditions>>;
  readonly HAS?: InputMaybe<WhereConditionsRelation>;
  readonly OR?: InputMaybe<ReadonlyArray<WhereConditions>>;
  readonly column?: InputMaybe<Scalars['String']['input']>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly value?: InputMaybe<Scalars['Mixed']['input']>;
};

export type WhereConditionsRelation = {
  readonly amount?: InputMaybe<Scalars['Int']['input']>;
  readonly condition?: InputMaybe<WhereConditions>;
  readonly operator?: InputMaybe<SqlOperator>;
  readonly relation: Scalars['String']['input'];
};

export type DashboardAccountsStatistic = {
  readonly __typename?: 'dashboardAccountsStatistic';
  readonly account_state_id: Scalars['ID']['output'];
  readonly account_state_name: Scalars['String']['output'];
  readonly count: Scalars['Int']['output'];
  readonly payment_provider_id: Scalars['ID']['output'];
  readonly payment_provider_name: Scalars['String']['output'];
};

export type DashboardTicketsStatistic = {
  readonly __typename?: 'dashboardTicketsStatistic';
  readonly count: Scalars['Int']['output'];
  readonly status_id: Scalars['ID']['output'];
  readonly status_name: Scalars['String']['output'];
};

export type DashboardTransfersStatistic = {
  readonly __typename?: 'dashboardTransfersStatistic';
  readonly count: Scalars['Int']['output'];
  readonly status_name: Scalars['String']['output'];
  readonly transfer_type: Scalars['String']['output'];
};

export type DashboardUsersStatistic = {
  readonly __typename?: 'dashboardUsersStatistic';
  readonly applicant_type: Scalars['String']['output'];
  readonly count: Scalars['Int']['output'];
  readonly status_name: Scalars['String']['output'];
};

export type PriceList = {
  readonly commission_template_id?: InputMaybe<Scalars['ID']['input']>;
  readonly company_id?: InputMaybe<Scalars['ID']['input']>;
  readonly payment_provider_id?: InputMaybe<Scalars['ID']['input']>;
  readonly payment_system_id?: InputMaybe<Scalars['ID']['input']>;
};

export type UserAuthResponse = {
  readonly __typename?: 'userAuthResponse';
  readonly data?: Maybe<Users>;
  readonly permissions: PermissionAuth;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping of union types */
export type ResolversUnionTypes<RefType extends Record<string, unknown>> = {
  Client: ApplicantCompany | ApplicantIndividual;
  Clientable: ApplicantCompany | ApplicantIndividual | Members;
  ProviderType: PaymentProvider | PaymentProviderIban;
};

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Account: ResolverTypeWrapper<Omit<Account, 'client'> & { client?: Maybe<ResolversTypes['Client']> }>;
  AccountClient: ResolverTypeWrapper<Omit<AccountClient, 'client'> & { client: ResolversTypes['Client'] }>;
  AccountClientsType: AccountClientsType;
  AccountGenerateIbanResponse: ResolverTypeWrapper<AccountGenerateIbanResponse>;
  AccountLimit: ResolverTypeWrapper<AccountLimit>;
  AccountLimitPaginator: ResolverTypeWrapper<AccountLimitPaginator>;
  AccountPaginator: ResolverTypeWrapper<AccountPaginator>;
  AccountReachedLimit: ResolverTypeWrapper<AccountReachedLimit>;
  AccountReachedLimitPaginator: ResolverTypeWrapper<AccountReachedLimitPaginator>;
  AccountState: ResolverTypeWrapper<AccountState>;
  AccountStatement: ResolverTypeWrapper<AccountStatement>;
  AccountStatementTransaction: ResolverTypeWrapper<AccountStatementTransaction>;
  AccountType: AccountType;
  ActiveSession: ResolverTypeWrapper<ActiveSession>;
  ActiveSessionMutatorResponse: ResolverTypeWrapper<ActiveSessionMutatorResponse>;
  ActiveSessions: ResolverTypeWrapper<ActiveSessions>;
  ActivityLog: ResolverTypeWrapper<ActivityLog>;
  ActivityLogs: ResolverTypeWrapper<ActivityLogs>;
  AdditionalFieldInput: AdditionalFieldInput;
  ApplicantAccount: ResolverTypeWrapper<ApplicantAccount>;
  ApplicantBankingAccess: ResolverTypeWrapper<ApplicantBankingAccess>;
  ApplicantBankingAccesses: ResolverTypeWrapper<ApplicantBankingAccesses>;
  ApplicantClientType: ApplicantClientType;
  ApplicantCompany: ResolverTypeWrapper<ApplicantCompany>;
  ApplicantCompanyBusinessType: ResolverTypeWrapper<ApplicantCompanyBusinessType>;
  ApplicantCompanyBusinessTypePaginator: ResolverTypeWrapper<ApplicantCompanyBusinessTypePaginator>;
  ApplicantCompanyLabel: ResolverTypeWrapper<ApplicantCompanyLabel>;
  ApplicantCompanyLabelPaginator: ResolverTypeWrapper<ApplicantCompanyLabelPaginator>;
  ApplicantCompanyModules: ResolverTypeWrapper<ApplicantCompanyModules>;
  ApplicantCompanyNotes: ResolverTypeWrapper<ApplicantCompanyNotes>;
  ApplicantCompanyNotesPaginator: ResolverTypeWrapper<ApplicantCompanyNotesPaginator>;
  ApplicantCompanyPaginator: ResolverTypeWrapper<ApplicantCompanyPaginator>;
  ApplicantCompanyRiskLevelHistory: ResolverTypeWrapper<ApplicantCompanyRiskLevelHistory>;
  ApplicantCompanyRiskLevelHistoryPaginator: ResolverTypeWrapper<ApplicantCompanyRiskLevelHistoryPaginator>;
  ApplicantDetailsRequisites: ResolverTypeWrapper<ApplicantDetailsRequisites>;
  ApplicantDevice: ResolverTypeWrapper<ApplicantDevice>;
  ApplicantDocument: ResolverTypeWrapper<ApplicantDocument>;
  ApplicantDocumentInternalNote: ResolverTypeWrapper<ApplicantDocumentInternalNote>;
  ApplicantDocumentInternalNotePaginator: ResolverTypeWrapper<ApplicantDocumentInternalNotePaginator>;
  ApplicantDocumentPaginator: ResolverTypeWrapper<ApplicantDocumentPaginator>;
  ApplicantDocumentRejectDetail: ResolverTypeWrapper<ApplicantDocumentRejectDetail>;
  ApplicantDocumentTag: ResolverTypeWrapper<ApplicantDocumentTag>;
  ApplicantDocumentTagCategory: ResolverTypeWrapper<ApplicantDocumentTagCategory>;
  ApplicantDocumentTagCategoryPaginator: ResolverTypeWrapper<ApplicantDocumentTagCategoryPaginator>;
  ApplicantDocumentTagPaginator: ResolverTypeWrapper<ApplicantDocumentTagPaginator>;
  ApplicantIndividual: ResolverTypeWrapper<ApplicantIndividual>;
  ApplicantIndividualCompany: ResolverTypeWrapper<
    Omit<ApplicantIndividualCompany, 'client'> & {
      client?: Maybe<ResolversTypes['Client']>;
    }
  >;
  ApplicantIndividualCompanyPosition: ResolverTypeWrapper<ApplicantIndividualCompanyPosition>;
  ApplicantIndividualCompanyPositionPaginator: ResolverTypeWrapper<ApplicantIndividualCompanyPositionPaginator>;
  ApplicantIndividualCompanyRelation: ResolverTypeWrapper<ApplicantIndividualCompanyRelation>;
  ApplicantIndividualCompanyRelationPaginator: ResolverTypeWrapper<ApplicantIndividualCompanyRelationPaginator>;
  ApplicantIndividualLabel: ResolverTypeWrapper<ApplicantIndividualLabel>;
  ApplicantIndividualLabelPaginator: ResolverTypeWrapper<ApplicantIndividualLabelPaginator>;
  ApplicantIndividualModules: ResolverTypeWrapper<ApplicantIndividualModules>;
  ApplicantIndividualNotes: ResolverTypeWrapper<ApplicantIndividualNotes>;
  ApplicantIndividualNotesPaginator: ResolverTypeWrapper<ApplicantIndividualNotesPaginator>;
  ApplicantIndividualPaginator: ResolverTypeWrapper<ApplicantIndividualPaginator>;
  ApplicantKycLevel: ResolverTypeWrapper<ApplicantKycLevel>;
  ApplicantKycLevelPaginator: ResolverTypeWrapper<ApplicantKycLevelPaginator>;
  ApplicantLinkedCompany: ResolverTypeWrapper<ApplicantLinkedCompany>;
  ApplicantModules: ResolverTypeWrapper<ApplicantModules>;
  ApplicantModulesPaginator: ResolverTypeWrapper<ApplicantModulesPaginator>;
  ApplicantProfile: ResolverTypeWrapper<ApplicantProfile>;
  ApplicantRequisites: ResolverTypeWrapper<ApplicantRequisites>;
  ApplicantRiskLevel: ResolverTypeWrapper<ApplicantRiskLevel>;
  ApplicantRiskLevelHistory: ResolverTypeWrapper<ApplicantRiskLevelHistory>;
  ApplicantRiskLevelHistoryPaginator: ResolverTypeWrapper<ApplicantRiskLevelHistoryPaginator>;
  ApplicantRiskLevelPaginator: ResolverTypeWrapper<ApplicantRiskLevelPaginator>;
  ApplicantSettingsProfile: ResolverTypeWrapper<ApplicantSettingsProfile>;
  ApplicantState: ResolverTypeWrapper<ApplicantState>;
  ApplicantStatePaginator: ResolverTypeWrapper<ApplicantStatePaginator>;
  ApplicantStateReason: ResolverTypeWrapper<ApplicantStateReason>;
  ApplicantStateReasonPaginator: ResolverTypeWrapper<ApplicantStateReasonPaginator>;
  ApplicantStatus: ResolverTypeWrapper<ApplicantStatus>;
  ApplicantStatusPaginator: ResolverTypeWrapper<ApplicantStatusPaginator>;
  ApplicantType: ApplicantType;
  ApplicantVerificationStatus: ResolverTypeWrapper<ApplicantVerificationStatus>;
  AuthenticationLog: ResolverTypeWrapper<AuthenticationLog>;
  AuthenticationLogs: ResolverTypeWrapper<AuthenticationLogs>;
  BankCorrespondent: ResolverTypeWrapper<BankCorrespondent>;
  BankCorrespondentPaginator: ResolverTypeWrapper<BankCorrespondentPaginator>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  BusinessActivity: ResolverTypeWrapper<BusinessActivity>;
  BusinessActivityPaginator: ResolverTypeWrapper<BusinessActivityPaginator>;
  Client: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['Client']>;
  ClientAccountsDetails: ResolverTypeWrapper<ClientAccountsDetails>;
  ClientIpAddress: ResolverTypeWrapper<ClientIpAddress>;
  ClientType: ClientType;
  Clientable: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['Clientable']>;
  Column: Column;
  CommissionPriceList: ResolverTypeWrapper<CommissionPriceList>;
  CommissionPriceListPaginator: ResolverTypeWrapper<CommissionPriceListPaginator>;
  CommissionTemplate: ResolverTypeWrapper<CommissionTemplate>;
  CommissionTemplateLimit: ResolverTypeWrapper<CommissionTemplateLimit>;
  CommissionTemplateLimitActionType: ResolverTypeWrapper<CommissionTemplateLimitActionType>;
  CommissionTemplateLimitActionTypePaginator: ResolverTypeWrapper<CommissionTemplateLimitActionTypePaginator>;
  CommissionTemplateLimitPaginator: ResolverTypeWrapper<CommissionTemplateLimitPaginator>;
  CommissionTemplateLimitPeriod: ResolverTypeWrapper<CommissionTemplateLimitPeriod>;
  CommissionTemplateLimitPeriodPaginator: ResolverTypeWrapper<CommissionTemplateLimitPeriodPaginator>;
  CommissionTemplateLimitTransferDirection: ResolverTypeWrapper<CommissionTemplateLimitTransferDirection>;
  CommissionTemplateLimitTransferDirectionPaginator: ResolverTypeWrapper<CommissionTemplateLimitTransferDirectionPaginator>;
  CommissionTemplateLimitType: ResolverTypeWrapper<CommissionTemplateLimitType>;
  CommissionTemplateLimitTypePaginator: ResolverTypeWrapper<CommissionTemplateLimitTypePaginator>;
  CommissionTemplatePaginator: ResolverTypeWrapper<CommissionTemplatePaginator>;
  Company: ResolverTypeWrapper<Company>;
  CompanyModule: ResolverTypeWrapper<CompanyModule>;
  CompanyModuleIbanProvider: ResolverTypeWrapper<CompanyModuleIbanProvider>;
  CompanyModuleIbanProviderPassword: ResolverTypeWrapper<CompanyModuleIbanProviderPassword>;
  CompanyModulePaymentProvider: ResolverTypeWrapper<CompanyModulePaymentProvider>;
  CompanyModulePaymentProviderPassword: ResolverTypeWrapper<CompanyModulePaymentProviderPassword>;
  CompanyPaginator: ResolverTypeWrapper<CompanyPaginator>;
  ConnectImageableInput: ConnectImageableInput;
  Country: ResolverTypeWrapper<Country>;
  CountryPaginator: ResolverTypeWrapper<CountryPaginator>;
  Currencies: ResolverTypeWrapper<Currencies>;
  CurrenciesPaginator: ResolverTypeWrapper<CurrenciesPaginator>;
  Date: ResolverTypeWrapper<Scalars['Date']['output']>;
  DateEnd: ResolverTypeWrapper<Scalars['DateEnd']['output']>;
  DateRange: DateRange;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  DateTimeRange: DateTimeRange;
  DateTimeUtc: ResolverTypeWrapper<Scalars['DateTimeUtc']['output']>;
  Decimal: ResolverTypeWrapper<Scalars['Decimal']['output']>;
  Department: ResolverTypeWrapper<Department>;
  DepartmentPaginator: ResolverTypeWrapper<DepartmentPaginator>;
  DepartmentPosition: ResolverTypeWrapper<DepartmentPosition>;
  DepartmentPositionPaginator: ResolverTypeWrapper<DepartmentPositionPaginator>;
  DocumentState: ResolverTypeWrapper<DocumentState>;
  DocumentStateEnum: DocumentStateEnum;
  DocumentType: ResolverTypeWrapper<DocumentType>;
  EMAIL: ResolverTypeWrapper<Scalars['EMAIL']['output']>;
  EmailNotification: ResolverTypeWrapper<
    Omit<EmailNotification, 'clientable'> & {
      clientable?: Maybe<ResolversTypes['Clientable']>;
    }
  >;
  EmailNotificationPaginator: ResolverTypeWrapper<EmailNotificationPaginator>;
  EmailSmtp: ResolverTypeWrapper<EmailSmtp>;
  EmailTemplate: ResolverTypeWrapper<EmailTemplate>;
  EmailTemplateLayout: ResolverTypeWrapper<EmailTemplateLayout>;
  EmailTemplateOnCompanyResponse: ResolverTypeWrapper<EmailTemplateOnCompanyResponse>;
  EmailVerification: EmailVerification;
  Employee: ResolverTypeWrapper<Employee>;
  Fee: ResolverTypeWrapper<Omit<Fee, 'client'> & { client?: Maybe<ResolversTypes['Client']> }>;
  FeeItem: ResolverTypeWrapper<FeeItem>;
  FeeMode: ResolverTypeWrapper<FeeMode>;
  FeePeriod: ResolverTypeWrapper<FeePeriod>;
  FeeType: ResolverTypeWrapper<FeeType>;
  FieldTypes: FieldTypes;
  FileEntityTypeEnum: FileEntityTypeEnum;
  Files: ResolverTypeWrapper<Files>;
  FilesPaginator: ResolverTypeWrapper<FilesPaginator>;
  FilterConditions: FilterConditions;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  GroupRole: ResolverTypeWrapper<GroupRole>;
  GroupRolePaginator: ResolverTypeWrapper<GroupRolePaginator>;
  GroupRoleProvider: ResolverTypeWrapper<GroupRoleProvider>;
  GroupRoleView: ResolverTypeWrapper<GroupRoleView>;
  GroupRoleViewPaginator: ResolverTypeWrapper<GroupRoleViewPaginator>;
  GroupType: ResolverTypeWrapper<GroupType>;
  GroupTypeMode: GroupTypeMode;
  GroupTypePaginator: ResolverTypeWrapper<GroupTypePaginator>;
  Groups: ResolverTypeWrapper<Groups>;
  GroupsEntities: GroupsEntities;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  ImageableMorphToTable: ImageableMorphToTable;
  InputAccount: InputAccount;
  InputCommissionTemplate: InputCommissionTemplate;
  InputCommissionTemplateLimit: InputCommissionTemplateLimit;
  InputCompanyModuleIbanProvider: InputCompanyModuleIbanProvider;
  InputCompanyModulePaymentProvider: InputCompanyModulePaymentProvider;
  InputGroupRoleProvider: InputGroupRoleProvider;
  InputMemberAccessLimitation: InputMemberAccessLimitation;
  InputPaymentBank: InputPaymentBank;
  InputPaymentProvider: InputPaymentProvider;
  InputPaymentProviderIban: InputPaymentProviderIban;
  InputPaymentSystem: InputPaymentSystem;
  InputProject: InputProject;
  InputProjectApiSetting: InputProjectApiSetting;
  InputProjectSettings: InputProjectSettings;
  InputRegion: InputRegion;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']['output']>;
  KycTimeline: ResolverTypeWrapper<Omit<KycTimeline, 'applicant'> & { applicant?: Maybe<ResolversTypes['Client']> }>;
  KycTimelineActionType: KycTimelineActionType;
  KycTimelines: ResolverTypeWrapper<KycTimelines>;
  Languages: ResolverTypeWrapper<Languages>;
  LanguagesPaginator: ResolverTypeWrapper<LanguagesPaginator>;
  MemberAccessLimitation: ResolverTypeWrapper<MemberAccessLimitation>;
  MemberAccessLimitationPaginator: ResolverTypeWrapper<MemberAccessLimitationPaginator>;
  MemberProfile: ResolverTypeWrapper<MemberProfile>;
  MemberStatus: ResolverTypeWrapper<MemberStatus>;
  Members: ResolverTypeWrapper<Members>;
  MembersPaginator: ResolverTypeWrapper<MembersPaginator>;
  Mixed: ResolverTypeWrapper<Scalars['Mixed']['output']>;
  Module: ResolverTypeWrapper<Module>;
  Mutation: ResolverTypeWrapper<{}>;
  NotifyType: NotifyType;
  OperationType: ResolverTypeWrapper<OperationType>;
  OperationTypeEnum: OperationTypeEnum;
  Order: Order;
  OrderBy: OrderBy;
  OrderByClause: OrderByClause;
  OrderByRelationAggregateFunction: OrderByRelationAggregateFunction;
  OrderByRelationWithColumnAggregateFunction: OrderByRelationWithColumnAggregateFunction;
  PERMISSION_ACCOUNT_DETAILS: Permission_Account_Details;
  PERMISSION_DASHBOARD: Permission_Dashboard;
  PERMISSION_MAKE_PAYMENTS: Permission_Make_Payments;
  PERMISSION_MY_NET_WORTH: Permission_My_Net_Worth;
  PERMISSION_MY_TEMPLATES: Permission_My_Templates;
  PERMISSION_PAYMENT_DETAILS: Permission_Payment_Details;
  PERMISSION_PAYMENT_LIST: Permission_Payment_List;
  PERMISSION_REQUISITES: Permission_Requisites;
  PERMISSION_SETTINGS_ACCOUNT: Permission_Settings_Account;
  PERMISSION_SETTINGS_CONTACT_DETAILS: Permission_Settings_Contact_Details;
  PERMISSION_SETTINGS_LOG_IN_DETAILS: Permission_Settings_Log_In_Details;
  PERMISSION_SETTINGS_SECURITY_LEVEL: Permission_Settings_Security_Level;
  PERMISSION_STATEMENTS: Permission_Statements;
  PERMISSION_TICKETS: Permission_Tickets;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  PaginatorInfo: ResolverTypeWrapper<PaginatorInfo>;
  PaymentBank: ResolverTypeWrapper<PaymentBank>;
  PaymentBankPaginator: ResolverTypeWrapper<PaymentBankPaginator>;
  PaymentProvider: ResolverTypeWrapper<PaymentProvider>;
  PaymentProviderHistory: ResolverTypeWrapper<PaymentProviderHistory>;
  PaymentProviderIban: ResolverTypeWrapper<PaymentProviderIban>;
  PaymentProviderIbanPaginator: ResolverTypeWrapper<PaymentProviderIbanPaginator>;
  PaymentProviderPaginator: ResolverTypeWrapper<PaymentProviderPaginator>;
  PaymentStatus: ResolverTypeWrapper<PaymentStatus>;
  PaymentSystem: ResolverTypeWrapper<PaymentSystem>;
  PaymentSystemPaginator: ResolverTypeWrapper<PaymentSystemPaginator>;
  PaymentUrgency: ResolverTypeWrapper<PaymentUrgency>;
  Payments: ResolverTypeWrapper<Payments>;
  PaymentsPaginator: ResolverTypeWrapper<PaymentsPaginator>;
  PermissionAuth: ResolverTypeWrapper<PermissionAuth>;
  PermissionCategory: ResolverTypeWrapper<PermissionCategory>;
  PermissionCategoryPermissionListPermissionTypeColumn: PermissionCategoryPermissionListPermissionTypeColumn;
  PermissionCategoryPermissionListPermissionTypeWhereConditions: PermissionCategoryPermissionListPermissionTypeWhereConditions;
  PermissionCategoryPermissionListPermissionTypeWhereConditionsRelation: PermissionCategoryPermissionListPermissionTypeWhereConditionsRelation;
  PermissionCategoryRole: ResolverTypeWrapper<PermissionCategoryRole>;
  PermissionList: ResolverTypeWrapper<PermissionList>;
  PermissionListType: PermissionListType;
  PermissionSeparatorType: PermissionSeparatorType;
  PermissionType: ResolverTypeWrapper<PermissionType>;
  Permissions: ResolverTypeWrapper<Permissions>;
  PivotTable: PivotTable;
  PriceListFee: ResolverTypeWrapper<PriceListFee>;
  PriceListFeeCurrency: ResolverTypeWrapper<PriceListFeeCurrency>;
  PriceListFeeInput: PriceListFeeInput;
  PriceListFeeItem: PriceListFeeItem;
  PriceListFeeScheduled: ResolverTypeWrapper<PriceListFeeScheduled>;
  PriceListFeeScheduledInput: PriceListFeeScheduledInput;
  PriceListFeesList: PriceListFeesList;
  Project: ResolverTypeWrapper<Project>;
  ProjectApiSetting: ResolverTypeWrapper<
    Omit<ProjectApiSetting, 'provider'> & {
      provider?: Maybe<ResolversTypes['ProviderType']>;
    }
  >;
  ProjectApiSettingPassword: ResolverTypeWrapper<ProjectApiSettingPassword>;
  ProjectPaginator: ResolverTypeWrapper<ProjectPaginator>;
  ProjectSettings: ResolverTypeWrapper<ProjectSettings>;
  ProviderType: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['ProviderType']>;
  ProviderTypeEnum: ProviderTypeEnum;
  Query: ResolverTypeWrapper<{}>;
  QueryAccountLimitsFilterFilterConditions: QueryAccountLimitsFilterFilterConditions;
  QueryAccountLimitsFilterStatic: QueryAccountLimitsFilterStatic;
  QueryAccountLimitsFilterStaticInput: QueryAccountLimitsFilterStaticInput;
  QueryAccountLimitsFilterStaticOperator: QueryAccountLimitsFilterStaticOperator;
  QueryAccountLimitsFilterStaticType: QueryAccountLimitsFilterStaticType;
  QueryAccountLimitsOrderByColumn: QueryAccountLimitsOrderByColumn;
  QueryAccountLimitsOrderByOrderByClause: QueryAccountLimitsOrderByOrderByClause;
  QueryAccountListFilterFilterConditions: QueryAccountListFilterFilterConditions;
  QueryAccountListFilterStatic: QueryAccountListFilterStatic;
  QueryAccountListFilterStaticInput: QueryAccountListFilterStaticInput;
  QueryAccountListFilterStaticOperator: QueryAccountListFilterStaticOperator;
  QueryAccountListFilterStaticType: QueryAccountListFilterStaticType;
  QueryAccountListOrderByColumn: QueryAccountListOrderByColumn;
  QueryAccountListOrderByOrderByClause: QueryAccountListOrderByOrderByClause;
  QueryAccountReachedLimitsFilterFilterConditions: QueryAccountReachedLimitsFilterFilterConditions;
  QueryAccountReachedLimitsFilterStatic: QueryAccountReachedLimitsFilterStatic;
  QueryAccountReachedLimitsFilterStaticInput: QueryAccountReachedLimitsFilterStaticInput;
  QueryAccountReachedLimitsFilterStaticOperator: QueryAccountReachedLimitsFilterStaticOperator;
  QueryAccountReachedLimitsFilterStaticType: QueryAccountReachedLimitsFilterStaticType;
  QueryAccountReachedLimitsHasAccountColumn: QueryAccountReachedLimitsHasAccountColumn;
  QueryAccountReachedLimitsHasAccountWhereHasConditions: QueryAccountReachedLimitsHasAccountWhereHasConditions;
  QueryAccountReachedLimitsHasAccountWhereHasConditionsRelation: QueryAccountReachedLimitsHasAccountWhereHasConditionsRelation;
  QueryAccountReachedLimitsOrderByColumn: QueryAccountReachedLimitsOrderByColumn;
  QueryAccountReachedLimitsOrderByOrderByClause: QueryAccountReachedLimitsOrderByOrderByClause;
  QueryAccountReachedLimitsWhereColumn: QueryAccountReachedLimitsWhereColumn;
  QueryAccountReachedLimitsWhereWhereConditions: QueryAccountReachedLimitsWhereWhereConditions;
  QueryAccountReachedLimitsWhereWhereConditionsRelation: QueryAccountReachedLimitsWhereWhereConditionsRelation;
  QueryAccountStatesOrderByColumn: QueryAccountStatesOrderByColumn;
  QueryAccountStatesOrderByOrderByClause: QueryAccountStatesOrderByOrderByClause;
  QueryActiveSessionsStatic: QueryActiveSessionsStatic;
  QueryActivityLogsStatic: QueryActivityLogsStatic;
  QueryApplicantAccountsFilterFilterConditions: QueryApplicantAccountsFilterFilterConditions;
  QueryApplicantAccountsFilterStatic: QueryApplicantAccountsFilterStatic;
  QueryApplicantAccountsFilterStaticInput: QueryApplicantAccountsFilterStaticInput;
  QueryApplicantAccountsFilterStaticOperator: QueryApplicantAccountsFilterStaticOperator;
  QueryApplicantAccountsFilterStaticType: QueryApplicantAccountsFilterStaticType;
  QueryApplicantAccountsOrderByColumn: QueryApplicantAccountsOrderByColumn;
  QueryApplicantAccountsOrderByOrderByClause: QueryApplicantAccountsOrderByOrderByClause;
  QueryApplicantBankingAccessesFilterFilterConditions: QueryApplicantBankingAccessesFilterFilterConditions;
  QueryApplicantBankingAccessesFilterStatic: QueryApplicantBankingAccessesFilterStatic;
  QueryApplicantBankingAccessesFilterStaticInput: QueryApplicantBankingAccessesFilterStaticInput;
  QueryApplicantBankingAccessesFilterStaticOperator: QueryApplicantBankingAccessesFilterStaticOperator;
  QueryApplicantBankingAccessesFilterStaticType: QueryApplicantBankingAccessesFilterStaticType;
  QueryApplicantBankingAccessesOrderByColumn: QueryApplicantBankingAccessesOrderByColumn;
  QueryApplicantBankingAccessesOrderByOrderByClause: QueryApplicantBankingAccessesOrderByOrderByClause;
  QueryApplicantCompaniesFilterFilterConditions: QueryApplicantCompaniesFilterFilterConditions;
  QueryApplicantCompaniesFilterStatic: QueryApplicantCompaniesFilterStatic;
  QueryApplicantCompaniesFilterStaticInput: QueryApplicantCompaniesFilterStaticInput;
  QueryApplicantCompaniesFilterStaticOperator: QueryApplicantCompaniesFilterStaticOperator;
  QueryApplicantCompaniesFilterStaticType: QueryApplicantCompaniesFilterStaticType;
  QueryApplicantCompaniesHasBusinessTypeColumn: QueryApplicantCompaniesHasBusinessTypeColumn;
  QueryApplicantCompaniesHasBusinessTypeWhereHasConditions: QueryApplicantCompaniesHasBusinessTypeWhereHasConditions;
  QueryApplicantCompaniesHasBusinessTypeWhereHasConditionsRelation: QueryApplicantCompaniesHasBusinessTypeWhereHasConditionsRelation;
  QueryApplicantCompaniesHasGroupRoleColumn: QueryApplicantCompaniesHasGroupRoleColumn;
  QueryApplicantCompaniesHasGroupRoleWhereHasConditions: QueryApplicantCompaniesHasGroupRoleWhereHasConditions;
  QueryApplicantCompaniesHasGroupRoleWhereHasConditionsRelation: QueryApplicantCompaniesHasGroupRoleWhereHasConditionsRelation;
  QueryApplicantCompaniesHasKycLevelColumn: QueryApplicantCompaniesHasKycLevelColumn;
  QueryApplicantCompaniesHasKycLevelWhereHasConditions: QueryApplicantCompaniesHasKycLevelWhereHasConditions;
  QueryApplicantCompaniesHasKycLevelWhereHasConditionsRelation: QueryApplicantCompaniesHasKycLevelWhereHasConditionsRelation;
  QueryApplicantCompaniesHasOwnerColumn: QueryApplicantCompaniesHasOwnerColumn;
  QueryApplicantCompaniesHasOwnerWhereHasConditions: QueryApplicantCompaniesHasOwnerWhereHasConditions;
  QueryApplicantCompaniesHasOwnerWhereHasConditionsRelation: QueryApplicantCompaniesHasOwnerWhereHasConditionsRelation;
  QueryApplicantCompaniesHasRiskLevelColumn: QueryApplicantCompaniesHasRiskLevelColumn;
  QueryApplicantCompaniesHasRiskLevelWhereHasConditions: QueryApplicantCompaniesHasRiskLevelWhereHasConditions;
  QueryApplicantCompaniesHasRiskLevelWhereHasConditionsRelation: QueryApplicantCompaniesHasRiskLevelWhereHasConditionsRelation;
  QueryApplicantCompaniesHasStateReasonColumn: QueryApplicantCompaniesHasStateReasonColumn;
  QueryApplicantCompaniesHasStateReasonWhereHasConditions: QueryApplicantCompaniesHasStateReasonWhereHasConditions;
  QueryApplicantCompaniesHasStateReasonWhereHasConditionsRelation: QueryApplicantCompaniesHasStateReasonWhereHasConditionsRelation;
  QueryApplicantCompaniesHasStatusColumn: QueryApplicantCompaniesHasStatusColumn;
  QueryApplicantCompaniesHasStatusWhereHasConditions: QueryApplicantCompaniesHasStatusWhereHasConditions;
  QueryApplicantCompaniesHasStatusWhereHasConditionsRelation: QueryApplicantCompaniesHasStatusWhereHasConditionsRelation;
  QueryApplicantCompaniesOrderByColumn: QueryApplicantCompaniesOrderByColumn;
  QueryApplicantCompaniesOrderByOrderByClause: QueryApplicantCompaniesOrderByOrderByClause;
  QueryApplicantCompaniesWhereColumn: QueryApplicantCompaniesWhereColumn;
  QueryApplicantCompaniesWhereWhereConditions: QueryApplicantCompaniesWhereWhereConditions;
  QueryApplicantCompaniesWhereWhereConditionsRelation: QueryApplicantCompaniesWhereWhereConditionsRelation;
  QueryApplicantCompanyBusinessTypeOrderByColumn: QueryApplicantCompanyBusinessTypeOrderByColumn;
  QueryApplicantCompanyBusinessTypeOrderByOrderByClause: QueryApplicantCompanyBusinessTypeOrderByOrderByClause;
  QueryApplicantCompanyBusinessTypeWhereColumn: QueryApplicantCompanyBusinessTypeWhereColumn;
  QueryApplicantCompanyBusinessTypeWhereWhereConditions: QueryApplicantCompanyBusinessTypeWhereWhereConditions;
  QueryApplicantCompanyBusinessTypeWhereWhereConditionsRelation: QueryApplicantCompanyBusinessTypeWhereWhereConditionsRelation;
  QueryApplicantCompanyLabelsAvailableOrderByColumn: QueryApplicantCompanyLabelsAvailableOrderByColumn;
  QueryApplicantCompanyLabelsAvailableOrderByOrderByClause: QueryApplicantCompanyLabelsAvailableOrderByOrderByClause;
  QueryApplicantCompanyLabelsOrderByColumn: QueryApplicantCompanyLabelsOrderByColumn;
  QueryApplicantCompanyLabelsOrderByOrderByClause: QueryApplicantCompanyLabelsOrderByOrderByClause;
  QueryApplicantCompanyLabelsWhereColumn: QueryApplicantCompanyLabelsWhereColumn;
  QueryApplicantCompanyLabelsWhereWhereConditions: QueryApplicantCompanyLabelsWhereWhereConditions;
  QueryApplicantCompanyLabelsWhereWhereConditionsRelation: QueryApplicantCompanyLabelsWhereWhereConditionsRelation;
  QueryApplicantCompanyNotesOrderByColumn: QueryApplicantCompanyNotesOrderByColumn;
  QueryApplicantCompanyNotesOrderByOrderByClause: QueryApplicantCompanyNotesOrderByOrderByClause;
  QueryApplicantCompanyRiskLevelHistoryFilterFilterConditions: QueryApplicantCompanyRiskLevelHistoryFilterFilterConditions;
  QueryApplicantCompanyRiskLevelHistoryFilterStatic: QueryApplicantCompanyRiskLevelHistoryFilterStatic;
  QueryApplicantCompanyRiskLevelHistoryFilterStaticInput: QueryApplicantCompanyRiskLevelHistoryFilterStaticInput;
  QueryApplicantCompanyRiskLevelHistoryFilterStaticOperator: QueryApplicantCompanyRiskLevelHistoryFilterStaticOperator;
  QueryApplicantCompanyRiskLevelHistoryFilterStaticRequired: QueryApplicantCompanyRiskLevelHistoryFilterStaticRequired;
  QueryApplicantCompanyRiskLevelHistoryFilterStaticType: QueryApplicantCompanyRiskLevelHistoryFilterStaticType;
  QueryApplicantCompanyRiskLevelHistoryOrderByColumn: QueryApplicantCompanyRiskLevelHistoryOrderByColumn;
  QueryApplicantCompanyRiskLevelHistoryOrderByOrderByClause: QueryApplicantCompanyRiskLevelHistoryOrderByOrderByClause;
  QueryApplicantCompanyRiskLevelHistoryWhereColumn: QueryApplicantCompanyRiskLevelHistoryWhereColumn;
  QueryApplicantCompanyRiskLevelHistoryWhereWhereConditions: QueryApplicantCompanyRiskLevelHistoryWhereWhereConditions;
  QueryApplicantCompanyRiskLevelHistoryWhereWhereConditionsRelation: QueryApplicantCompanyRiskLevelHistoryWhereWhereConditionsRelation;
  QueryApplicantDocumentTagsFilterFilterConditions: QueryApplicantDocumentTagsFilterFilterConditions;
  QueryApplicantDocumentTagsFilterStatic: QueryApplicantDocumentTagsFilterStatic;
  QueryApplicantDocumentTagsFilterStaticInput: QueryApplicantDocumentTagsFilterStaticInput;
  QueryApplicantDocumentTagsFilterStaticOperator: QueryApplicantDocumentTagsFilterStaticOperator;
  QueryApplicantDocumentTagsFilterStaticType: QueryApplicantDocumentTagsFilterStaticType;
  QueryApplicantDocumentTagsOrderByColumn: QueryApplicantDocumentTagsOrderByColumn;
  QueryApplicantDocumentTagsOrderByOrderByClause: QueryApplicantDocumentTagsOrderByOrderByClause;
  QueryApplicantDocumentsFilterFilterConditions: QueryApplicantDocumentsFilterFilterConditions;
  QueryApplicantDocumentsFilterStatic: QueryApplicantDocumentsFilterStatic;
  QueryApplicantDocumentsFilterStaticInput: QueryApplicantDocumentsFilterStaticInput;
  QueryApplicantDocumentsFilterStaticOperator: QueryApplicantDocumentsFilterStaticOperator;
  QueryApplicantDocumentsFilterStaticType: QueryApplicantDocumentsFilterStaticType;
  QueryApplicantDocumentsOrderByColumn: QueryApplicantDocumentsOrderByColumn;
  QueryApplicantDocumentsOrderByOrderByClause: QueryApplicantDocumentsOrderByOrderByClause;
  QueryApplicantIndividualCompanyPositionsFilterFilterConditions: QueryApplicantIndividualCompanyPositionsFilterFilterConditions;
  QueryApplicantIndividualCompanyPositionsFilterStatic: QueryApplicantIndividualCompanyPositionsFilterStatic;
  QueryApplicantIndividualCompanyPositionsFilterStaticInput: QueryApplicantIndividualCompanyPositionsFilterStaticInput;
  QueryApplicantIndividualCompanyPositionsFilterStaticOperator: QueryApplicantIndividualCompanyPositionsFilterStaticOperator;
  QueryApplicantIndividualCompanyPositionsFilterStaticType: QueryApplicantIndividualCompanyPositionsFilterStaticType;
  QueryApplicantIndividualCompanyPositionsOrderByColumn: QueryApplicantIndividualCompanyPositionsOrderByColumn;
  QueryApplicantIndividualCompanyPositionsOrderByOrderByClause: QueryApplicantIndividualCompanyPositionsOrderByOrderByClause;
  QueryApplicantIndividualCompanyRelationsFilterFilterConditions: QueryApplicantIndividualCompanyRelationsFilterFilterConditions;
  QueryApplicantIndividualCompanyRelationsFilterStatic: QueryApplicantIndividualCompanyRelationsFilterStatic;
  QueryApplicantIndividualCompanyRelationsFilterStaticInput: QueryApplicantIndividualCompanyRelationsFilterStaticInput;
  QueryApplicantIndividualCompanyRelationsFilterStaticOperator: QueryApplicantIndividualCompanyRelationsFilterStaticOperator;
  QueryApplicantIndividualCompanyRelationsFilterStaticType: QueryApplicantIndividualCompanyRelationsFilterStaticType;
  QueryApplicantIndividualCompanyRelationsOrderByColumn: QueryApplicantIndividualCompanyRelationsOrderByColumn;
  QueryApplicantIndividualCompanyRelationsOrderByOrderByClause: QueryApplicantIndividualCompanyRelationsOrderByOrderByClause;
  QueryApplicantIndividualLabelsAvailableOrderByColumn: QueryApplicantIndividualLabelsAvailableOrderByColumn;
  QueryApplicantIndividualLabelsAvailableOrderByOrderByClause: QueryApplicantIndividualLabelsAvailableOrderByOrderByClause;
  QueryApplicantIndividualLabelsOrderByColumn: QueryApplicantIndividualLabelsOrderByColumn;
  QueryApplicantIndividualLabelsOrderByOrderByClause: QueryApplicantIndividualLabelsOrderByOrderByClause;
  QueryApplicantIndividualLabelsWhereColumn: QueryApplicantIndividualLabelsWhereColumn;
  QueryApplicantIndividualLabelsWhereWhereConditions: QueryApplicantIndividualLabelsWhereWhereConditions;
  QueryApplicantIndividualLabelsWhereWhereConditionsRelation: QueryApplicantIndividualLabelsWhereWhereConditionsRelation;
  QueryApplicantIndividualModulesFilterStatic: QueryApplicantIndividualModulesFilterStatic;
  QueryApplicantIndividualNotesOrderByColumn: QueryApplicantIndividualNotesOrderByColumn;
  QueryApplicantIndividualNotesOrderByOrderByClause: QueryApplicantIndividualNotesOrderByOrderByClause;
  QueryApplicantIndividualsFilterFilterConditions: QueryApplicantIndividualsFilterFilterConditions;
  QueryApplicantIndividualsFilterStatic: QueryApplicantIndividualsFilterStatic;
  QueryApplicantIndividualsFilterStaticInput: QueryApplicantIndividualsFilterStaticInput;
  QueryApplicantIndividualsFilterStaticOperator: QueryApplicantIndividualsFilterStaticOperator;
  QueryApplicantIndividualsFilterStaticType: QueryApplicantIndividualsFilterStaticType;
  QueryApplicantIndividualsOrderByColumn: QueryApplicantIndividualsOrderByColumn;
  QueryApplicantIndividualsOrderByOrderByClause: QueryApplicantIndividualsOrderByOrderByClause;
  QueryApplicantKycLevelsOrderByColumn: QueryApplicantKycLevelsOrderByColumn;
  QueryApplicantKycLevelsOrderByOrderByClause: QueryApplicantKycLevelsOrderByOrderByClause;
  QueryApplicantKycLevelsWhereColumn: QueryApplicantKycLevelsWhereColumn;
  QueryApplicantKycLevelsWhereWhereConditions: QueryApplicantKycLevelsWhereWhereConditions;
  QueryApplicantKycLevelsWhereWhereConditionsRelation: QueryApplicantKycLevelsWhereWhereConditionsRelation;
  QueryApplicantModulesOrderByColumn: QueryApplicantModulesOrderByColumn;
  QueryApplicantModulesOrderByOrderByClause: QueryApplicantModulesOrderByOrderByClause;
  QueryApplicantModulesWhereColumn: QueryApplicantModulesWhereColumn;
  QueryApplicantModulesWhereWhereConditions: QueryApplicantModulesWhereWhereConditions;
  QueryApplicantModulesWhereWhereConditionsRelation: QueryApplicantModulesWhereWhereConditionsRelation;
  QueryApplicantRiskLevelHistoryOrderByColumn: QueryApplicantRiskLevelHistoryOrderByColumn;
  QueryApplicantRiskLevelHistoryOrderByOrderByClause: QueryApplicantRiskLevelHistoryOrderByOrderByClause;
  QueryApplicantRiskLevelHistoryWhereColumn: QueryApplicantRiskLevelHistoryWhereColumn;
  QueryApplicantRiskLevelHistoryWhereWhereConditions: QueryApplicantRiskLevelHistoryWhereWhereConditions;
  QueryApplicantRiskLevelHistoryWhereWhereConditionsRelation: QueryApplicantRiskLevelHistoryWhereWhereConditionsRelation;
  QueryApplicantRiskLevelsOrderByColumn: QueryApplicantRiskLevelsOrderByColumn;
  QueryApplicantRiskLevelsOrderByOrderByClause: QueryApplicantRiskLevelsOrderByOrderByClause;
  QueryApplicantRiskLevelsWhereColumn: QueryApplicantRiskLevelsWhereColumn;
  QueryApplicantRiskLevelsWhereWhereConditions: QueryApplicantRiskLevelsWhereWhereConditions;
  QueryApplicantRiskLevelsWhereWhereConditionsRelation: QueryApplicantRiskLevelsWhereWhereConditionsRelation;
  QueryApplicantStateReasonsOrderByColumn: QueryApplicantStateReasonsOrderByColumn;
  QueryApplicantStateReasonsOrderByOrderByClause: QueryApplicantStateReasonsOrderByOrderByClause;
  QueryApplicantStateReasonsWhereColumn: QueryApplicantStateReasonsWhereColumn;
  QueryApplicantStateReasonsWhereWhereConditions: QueryApplicantStateReasonsWhereWhereConditions;
  QueryApplicantStateReasonsWhereWhereConditionsRelation: QueryApplicantStateReasonsWhereWhereConditionsRelation;
  QueryApplicantStatesOrderByColumn: QueryApplicantStatesOrderByColumn;
  QueryApplicantStatesOrderByOrderByClause: QueryApplicantStatesOrderByOrderByClause;
  QueryApplicantStatesWhereColumn: QueryApplicantStatesWhereColumn;
  QueryApplicantStatesWhereWhereConditions: QueryApplicantStatesWhereWhereConditions;
  QueryApplicantStatesWhereWhereConditionsRelation: QueryApplicantStatesWhereWhereConditionsRelation;
  QueryApplicantStatusesOrderByColumn: QueryApplicantStatusesOrderByColumn;
  QueryApplicantStatusesOrderByOrderByClause: QueryApplicantStatusesOrderByOrderByClause;
  QueryApplicantStatusesWhereColumn: QueryApplicantStatusesWhereColumn;
  QueryApplicantStatusesWhereWhereConditions: QueryApplicantStatusesWhereWhereConditions;
  QueryApplicantStatusesWhereWhereConditionsRelation: QueryApplicantStatusesWhereWhereConditionsRelation;
  QueryAuthenticationLogsStatic: QueryAuthenticationLogsStatic;
  QueryBankCorrespondentsFilterFilterConditions: QueryBankCorrespondentsFilterFilterConditions;
  QueryBankCorrespondentsFilterStatic: QueryBankCorrespondentsFilterStatic;
  QueryBankCorrespondentsFilterStaticInput: QueryBankCorrespondentsFilterStaticInput;
  QueryBankCorrespondentsFilterStaticOperator: QueryBankCorrespondentsFilterStaticOperator;
  QueryBankCorrespondentsFilterStaticType: QueryBankCorrespondentsFilterStaticType;
  QueryBankCorrespondentsOrderByColumn: QueryBankCorrespondentsOrderByColumn;
  QueryBankCorrespondentsOrderByOrderByClause: QueryBankCorrespondentsOrderByOrderByClause;
  QueryBusinessActivitiesFilterFilterConditions: QueryBusinessActivitiesFilterFilterConditions;
  QueryBusinessActivitiesFilterStatic: QueryBusinessActivitiesFilterStatic;
  QueryBusinessActivitiesFilterStaticInput: QueryBusinessActivitiesFilterStaticInput;
  QueryBusinessActivitiesFilterStaticOperator: QueryBusinessActivitiesFilterStaticOperator;
  QueryBusinessActivitiesFilterStaticType: QueryBusinessActivitiesFilterStaticType;
  QueryBusinessActivitiesOrderByColumn: QueryBusinessActivitiesOrderByColumn;
  QueryBusinessActivitiesOrderByOrderByClause: QueryBusinessActivitiesOrderByOrderByClause;
  QueryClientCondition: QueryClientCondition;
  QueryCommissionPriceListsFilterFilterConditions: QueryCommissionPriceListsFilterFilterConditions;
  QueryCommissionPriceListsFilterStatic: QueryCommissionPriceListsFilterStatic;
  QueryCommissionPriceListsFilterStaticInput: QueryCommissionPriceListsFilterStaticInput;
  QueryCommissionPriceListsFilterStaticOperator: QueryCommissionPriceListsFilterStaticOperator;
  QueryCommissionPriceListsFilterStaticType: QueryCommissionPriceListsFilterStaticType;
  QueryCommissionPriceListsOrderByColumn: QueryCommissionPriceListsOrderByColumn;
  QueryCommissionPriceListsOrderByOrderByClause: QueryCommissionPriceListsOrderByOrderByClause;
  QueryCommissionTemplateLimitActionTypesOrderByColumn: QueryCommissionTemplateLimitActionTypesOrderByColumn;
  QueryCommissionTemplateLimitActionTypesOrderByOrderByClause: QueryCommissionTemplateLimitActionTypesOrderByOrderByClause;
  QueryCommissionTemplateLimitActionTypesWhereColumn: QueryCommissionTemplateLimitActionTypesWhereColumn;
  QueryCommissionTemplateLimitActionTypesWhereWhereConditions: QueryCommissionTemplateLimitActionTypesWhereWhereConditions;
  QueryCommissionTemplateLimitActionTypesWhereWhereConditionsRelation: QueryCommissionTemplateLimitActionTypesWhereWhereConditionsRelation;
  QueryCommissionTemplateLimitPeriodsOrderByColumn: QueryCommissionTemplateLimitPeriodsOrderByColumn;
  QueryCommissionTemplateLimitPeriodsOrderByOrderByClause: QueryCommissionTemplateLimitPeriodsOrderByOrderByClause;
  QueryCommissionTemplateLimitPeriodsWhereColumn: QueryCommissionTemplateLimitPeriodsWhereColumn;
  QueryCommissionTemplateLimitPeriodsWhereWhereConditions: QueryCommissionTemplateLimitPeriodsWhereWhereConditions;
  QueryCommissionTemplateLimitPeriodsWhereWhereConditionsRelation: QueryCommissionTemplateLimitPeriodsWhereWhereConditionsRelation;
  QueryCommissionTemplateLimitTransferDirectionsOrderByColumn: QueryCommissionTemplateLimitTransferDirectionsOrderByColumn;
  QueryCommissionTemplateLimitTransferDirectionsOrderByOrderByClause: QueryCommissionTemplateLimitTransferDirectionsOrderByOrderByClause;
  QueryCommissionTemplateLimitTransferDirectionsWhereColumn: QueryCommissionTemplateLimitTransferDirectionsWhereColumn;
  QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditions: QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditions;
  QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditionsRelation: QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditionsRelation;
  QueryCommissionTemplateLimitTypesOrderByColumn: QueryCommissionTemplateLimitTypesOrderByColumn;
  QueryCommissionTemplateLimitTypesOrderByOrderByClause: QueryCommissionTemplateLimitTypesOrderByOrderByClause;
  QueryCommissionTemplateLimitTypesWhereColumn: QueryCommissionTemplateLimitTypesWhereColumn;
  QueryCommissionTemplateLimitTypesWhereWhereConditions: QueryCommissionTemplateLimitTypesWhereWhereConditions;
  QueryCommissionTemplateLimitTypesWhereWhereConditionsRelation: QueryCommissionTemplateLimitTypesWhereWhereConditionsRelation;
  QueryCommissionTemplateLimitsFilterStatic: QueryCommissionTemplateLimitsFilterStatic;
  QueryCommissionTemplatesFilterFilterConditions: QueryCommissionTemplatesFilterFilterConditions;
  QueryCommissionTemplatesFilterStatic: QueryCommissionTemplatesFilterStatic;
  QueryCommissionTemplatesFilterStaticInput: QueryCommissionTemplatesFilterStaticInput;
  QueryCommissionTemplatesFilterStaticOperator: QueryCommissionTemplatesFilterStaticOperator;
  QueryCommissionTemplatesFilterStaticType: QueryCommissionTemplatesFilterStaticType;
  QueryCommissionTemplatesOrderByColumn: QueryCommissionTemplatesOrderByColumn;
  QueryCommissionTemplatesOrderByOrderByClause: QueryCommissionTemplatesOrderByOrderByClause;
  QueryCompaniesFilterFilterConditions: QueryCompaniesFilterFilterConditions;
  QueryCompaniesFilterStatic: QueryCompaniesFilterStatic;
  QueryCompaniesFilterStaticInput: QueryCompaniesFilterStaticInput;
  QueryCompaniesFilterStaticOperator: QueryCompaniesFilterStaticOperator;
  QueryCompaniesFilterStaticType: QueryCompaniesFilterStaticType;
  QueryCompaniesOrderByColumn: QueryCompaniesOrderByColumn;
  QueryCompaniesOrderByOrderByClause: QueryCompaniesOrderByOrderByClause;
  QueryDepartmentPositionsFilterFilterConditions: QueryDepartmentPositionsFilterFilterConditions;
  QueryDepartmentPositionsFilterStatic: QueryDepartmentPositionsFilterStatic;
  QueryDepartmentPositionsFilterStaticInput: QueryDepartmentPositionsFilterStaticInput;
  QueryDepartmentPositionsFilterStaticOperator: QueryDepartmentPositionsFilterStaticOperator;
  QueryDepartmentPositionsFilterStaticType: QueryDepartmentPositionsFilterStaticType;
  QueryDepartmentPositionsOrderByColumn: QueryDepartmentPositionsOrderByColumn;
  QueryDepartmentPositionsOrderByOrderByClause: QueryDepartmentPositionsOrderByOrderByClause;
  QueryDepartmentsFilterFilterConditions: QueryDepartmentsFilterFilterConditions;
  QueryDepartmentsFilterStatic: QueryDepartmentsFilterStatic;
  QueryDepartmentsFilterStaticInput: QueryDepartmentsFilterStaticInput;
  QueryDepartmentsFilterStaticOperator: QueryDepartmentsFilterStaticOperator;
  QueryDepartmentsFilterStaticType: QueryDepartmentsFilterStaticType;
  QueryDepartmentsOrderByColumn: QueryDepartmentsOrderByColumn;
  QueryDepartmentsOrderByOrderByClause: QueryDepartmentsOrderByOrderByClause;
  QueryEmailNotificationsFilterFilterConditions: QueryEmailNotificationsFilterFilterConditions;
  QueryEmailNotificationsFilterStatic: QueryEmailNotificationsFilterStatic;
  QueryEmailNotificationsFilterStaticEnumNotifyType: QueryEmailNotificationsFilterStaticEnumNotifyType;
  QueryEmailNotificationsFilterStaticEnumRecipientType: QueryEmailNotificationsFilterStaticEnumRecipientType;
  QueryEmailNotificationsFilterStaticInput: QueryEmailNotificationsFilterStaticInput;
  QueryEmailNotificationsFilterStaticOperator: QueryEmailNotificationsFilterStaticOperator;
  QueryEmailNotificationsFilterStaticType: QueryEmailNotificationsFilterStaticType;
  QueryEmailNotificationsOrderByColumn: QueryEmailNotificationsOrderByColumn;
  QueryEmailNotificationsOrderByOrderByClause: QueryEmailNotificationsOrderByOrderByClause;
  QueryEmailSmtpsOrderByColumn: QueryEmailSmtpsOrderByColumn;
  QueryEmailSmtpsOrderByOrderByClause: QueryEmailSmtpsOrderByOrderByClause;
  QueryEmailTemplatesFilterFilterConditions: QueryEmailTemplatesFilterFilterConditions;
  QueryEmailTemplatesFilterStatic: QueryEmailTemplatesFilterStatic;
  QueryEmailTemplatesFilterStaticEnumClientType: QueryEmailTemplatesFilterStaticEnumClientType;
  QueryEmailTemplatesFilterStaticEnumServiceType: QueryEmailTemplatesFilterStaticEnumServiceType;
  QueryEmailTemplatesFilterStaticInput: QueryEmailTemplatesFilterStaticInput;
  QueryEmailTemplatesFilterStaticOperator: QueryEmailTemplatesFilterStaticOperator;
  QueryEmailTemplatesFilterStaticType: QueryEmailTemplatesFilterStaticType;
  QueryEmailTemplatesOrderByColumn: QueryEmailTemplatesOrderByColumn;
  QueryEmailTemplatesOrderByOrderByClause: QueryEmailTemplatesOrderByOrderByClause;
  QueryFeeTypesFilterFilterConditions: QueryFeeTypesFilterFilterConditions;
  QueryFeeTypesFilterStatic: QueryFeeTypesFilterStatic;
  QueryFeeTypesFilterStaticInput: QueryFeeTypesFilterStaticInput;
  QueryFeeTypesFilterStaticOperator: QueryFeeTypesFilterStaticOperator;
  QueryFeeTypesFilterStaticType: QueryFeeTypesFilterStaticType;
  QueryFilesFilterFilterConditions: QueryFilesFilterFilterConditions;
  QueryFilesFilterStatic: QueryFilesFilterStatic;
  QueryFilesFilterStaticInput: QueryFilesFilterStaticInput;
  QueryFilesFilterStaticOperator: QueryFilesFilterStaticOperator;
  QueryFilesFilterStaticType: QueryFilesFilterStaticType;
  QueryFilesOrderByColumn: QueryFilesOrderByColumn;
  QueryFilesOrderByOrderByClause: QueryFilesOrderByOrderByClause;
  QueryGetMatchedUsersFilterFilterConditions: QueryGetMatchedUsersFilterFilterConditions;
  QueryGetMatchedUsersFilterStatic: QueryGetMatchedUsersFilterStatic;
  QueryGetMatchedUsersFilterStaticEnumApplicantType: QueryGetMatchedUsersFilterStaticEnumApplicantType;
  QueryGetMatchedUsersFilterStaticInput: QueryGetMatchedUsersFilterStaticInput;
  QueryGetMatchedUsersFilterStaticOperator: QueryGetMatchedUsersFilterStaticOperator;
  QueryGetMatchedUsersFilterStaticType: QueryGetMatchedUsersFilterStaticType;
  QueryGrantedBankingAccessFilterFilterConditions: QueryGrantedBankingAccessFilterFilterConditions;
  QueryGrantedBankingAccessFilterStatic: QueryGrantedBankingAccessFilterStatic;
  QueryGrantedBankingAccessFilterStaticInput: QueryGrantedBankingAccessFilterStaticInput;
  QueryGrantedBankingAccessFilterStaticOperator: QueryGrantedBankingAccessFilterStaticOperator;
  QueryGrantedBankingAccessFilterStaticType: QueryGrantedBankingAccessFilterStaticType;
  QueryGrantedBankingAccessOrderByColumn: QueryGrantedBankingAccessOrderByColumn;
  QueryGrantedBankingAccessOrderByOrderByClause: QueryGrantedBankingAccessOrderByOrderByClause;
  QueryGroupListFilterFilterConditions: QueryGroupListFilterFilterConditions;
  QueryGroupListFilterStatic: QueryGroupListFilterStatic;
  QueryGroupListFilterStaticInput: QueryGroupListFilterStaticInput;
  QueryGroupListFilterStaticOperator: QueryGroupListFilterStaticOperator;
  QueryGroupListFilterStaticType: QueryGroupListFilterStaticType;
  QueryGroupListOrderByColumn: QueryGroupListOrderByColumn;
  QueryGroupListOrderByOrderByClause: QueryGroupListOrderByOrderByClause;
  QueryGroupTypesFilterFilterConditions: QueryGroupTypesFilterFilterConditions;
  QueryGroupTypesFilterStatic: QueryGroupTypesFilterStatic;
  QueryGroupTypesFilterStaticInput: QueryGroupTypesFilterStaticInput;
  QueryGroupTypesFilterStaticOperator: QueryGroupTypesFilterStaticOperator;
  QueryGroupTypesFilterStaticType: QueryGroupTypesFilterStaticType;
  QueryGroupsFilterFilterConditions: QueryGroupsFilterFilterConditions;
  QueryGroupsFilterStatic: QueryGroupsFilterStatic;
  QueryGroupsFilterStaticInput: QueryGroupsFilterStaticInput;
  QueryGroupsFilterStaticOperator: QueryGroupsFilterStaticOperator;
  QueryGroupsFilterStaticType: QueryGroupsFilterStaticType;
  QueryGroupsOrderByColumn: QueryGroupsOrderByColumn;
  QueryGroupsOrderByOrderByClause: QueryGroupsOrderByOrderByClause;
  QueryKycTimelinesOrderByColumn: QueryKycTimelinesOrderByColumn;
  QueryKycTimelinesOrderByOrderByClause: QueryKycTimelinesOrderByOrderByClause;
  QueryMemberAccessLimitationsFilterFilterConditions: QueryMemberAccessLimitationsFilterFilterConditions;
  QueryMemberAccessLimitationsFilterStatic: QueryMemberAccessLimitationsFilterStatic;
  QueryMemberAccessLimitationsFilterStaticInput: QueryMemberAccessLimitationsFilterStaticInput;
  QueryMemberAccessLimitationsFilterStaticOperator: QueryMemberAccessLimitationsFilterStaticOperator;
  QueryMemberAccessLimitationsFilterStaticType: QueryMemberAccessLimitationsFilterStaticType;
  QueryMemberAccessLimitationsOrderByColumn: QueryMemberAccessLimitationsOrderByColumn;
  QueryMemberAccessLimitationsOrderByOrderByClause: QueryMemberAccessLimitationsOrderByOrderByClause;
  QueryMembersFilterFilterConditions: QueryMembersFilterFilterConditions;
  QueryMembersFilterStatic: QueryMembersFilterStatic;
  QueryMembersFilterStaticInput: QueryMembersFilterStaticInput;
  QueryMembersFilterStaticOperator: QueryMembersFilterStaticOperator;
  QueryMembersFilterStaticType: QueryMembersFilterStaticType;
  QueryMembersOrderByColumn: QueryMembersOrderByColumn;
  QueryMembersOrderByOrderByClause: QueryMembersOrderByOrderByClause;
  QueryModulesOrderByColumn: QueryModulesOrderByColumn;
  QueryModulesOrderByOrderByClause: QueryModulesOrderByOrderByClause;
  QueryModulesWhereColumn: QueryModulesWhereColumn;
  QueryModulesWhereWhereConditions: QueryModulesWhereWhereConditions;
  QueryModulesWhereWhereConditionsRelation: QueryModulesWhereWhereConditionsRelation;
  QueryModulesWithKycOrderByColumn: QueryModulesWithKycOrderByColumn;
  QueryModulesWithKycOrderByOrderByClause: QueryModulesWithKycOrderByOrderByClause;
  QueryModulesWithKycWhereColumn: QueryModulesWithKycWhereColumn;
  QueryModulesWithKycWhereWhereConditions: QueryModulesWithKycWhereWhereConditions;
  QueryModulesWithKycWhereWhereConditionsRelation: QueryModulesWithKycWhereWhereConditionsRelation;
  QueryOperationTypesFilterFilterConditions: QueryOperationTypesFilterFilterConditions;
  QueryOperationTypesFilterStatic: QueryOperationTypesFilterStatic;
  QueryOperationTypesFilterStaticEnumTransferType: QueryOperationTypesFilterStaticEnumTransferType;
  QueryOperationTypesFilterStaticInput: QueryOperationTypesFilterStaticInput;
  QueryOperationTypesFilterStaticOperator: QueryOperationTypesFilterStaticOperator;
  QueryOperationTypesFilterStaticType: QueryOperationTypesFilterStaticType;
  QueryOwnersOrderByColumn: QueryOwnersOrderByColumn;
  QueryOwnersOrderByOrderByClause: QueryOwnersOrderByOrderByClause;
  QueryPaymentBankCondition: QueryPaymentBankCondition;
  QueryPaymentBanksFilterFilterConditions: QueryPaymentBanksFilterFilterConditions;
  QueryPaymentBanksFilterStatic: QueryPaymentBanksFilterStatic;
  QueryPaymentBanksFilterStaticInput: QueryPaymentBanksFilterStaticInput;
  QueryPaymentBanksFilterStaticOperator: QueryPaymentBanksFilterStaticOperator;
  QueryPaymentBanksFilterStaticType: QueryPaymentBanksFilterStaticType;
  QueryPaymentBanksOrderByColumn: QueryPaymentBanksOrderByColumn;
  QueryPaymentBanksOrderByOrderByClause: QueryPaymentBanksOrderByOrderByClause;
  QueryPaymentProviderIbansFilterFilterConditions: QueryPaymentProviderIbansFilterFilterConditions;
  QueryPaymentProviderIbansFilterStatic: QueryPaymentProviderIbansFilterStatic;
  QueryPaymentProviderIbansFilterStaticInput: QueryPaymentProviderIbansFilterStaticInput;
  QueryPaymentProviderIbansFilterStaticOperator: QueryPaymentProviderIbansFilterStaticOperator;
  QueryPaymentProviderIbansFilterStaticType: QueryPaymentProviderIbansFilterStaticType;
  QueryPaymentProviderIbansOrderByColumn: QueryPaymentProviderIbansOrderByColumn;
  QueryPaymentProviderIbansOrderByOrderByClause: QueryPaymentProviderIbansOrderByOrderByClause;
  QueryPaymentProvidersFilterFilterConditions: QueryPaymentProvidersFilterFilterConditions;
  QueryPaymentProvidersFilterStatic: QueryPaymentProvidersFilterStatic;
  QueryPaymentProvidersFilterStaticInput: QueryPaymentProvidersFilterStaticInput;
  QueryPaymentProvidersFilterStaticOperator: QueryPaymentProvidersFilterStaticOperator;
  QueryPaymentProvidersFilterStaticType: QueryPaymentProvidersFilterStaticType;
  QueryPaymentProvidersOrderByColumn: QueryPaymentProvidersOrderByColumn;
  QueryPaymentProvidersOrderByOrderByClause: QueryPaymentProvidersOrderByOrderByClause;
  QueryPaymentStatusesFilterFilterConditions: QueryPaymentStatusesFilterFilterConditions;
  QueryPaymentStatusesFilterStatic: QueryPaymentStatusesFilterStatic;
  QueryPaymentStatusesFilterStaticEnumOperationTypeEnum: QueryPaymentStatusesFilterStaticEnumOperationTypeEnum;
  QueryPaymentStatusesFilterStaticInput: QueryPaymentStatusesFilterStaticInput;
  QueryPaymentStatusesFilterStaticOperator: QueryPaymentStatusesFilterStaticOperator;
  QueryPaymentStatusesFilterStaticType: QueryPaymentStatusesFilterStaticType;
  QueryPaymentSystemsFilterFilterConditions: QueryPaymentSystemsFilterFilterConditions;
  QueryPaymentSystemsFilterStatic: QueryPaymentSystemsFilterStatic;
  QueryPaymentSystemsFilterStaticInput: QueryPaymentSystemsFilterStaticInput;
  QueryPaymentSystemsFilterStaticOperator: QueryPaymentSystemsFilterStaticOperator;
  QueryPaymentSystemsFilterStaticType: QueryPaymentSystemsFilterStaticType;
  QueryPaymentSystemsOrderByColumn: QueryPaymentSystemsOrderByColumn;
  QueryPaymentSystemsOrderByOrderByClause: QueryPaymentSystemsOrderByOrderByClause;
  QueryPaymentsFilterFilterConditions: QueryPaymentsFilterFilterConditions;
  QueryPaymentsFilterStatic: QueryPaymentsFilterStatic;
  QueryPaymentsFilterStaticInput: QueryPaymentsFilterStaticInput;
  QueryPaymentsFilterStaticOperator: QueryPaymentsFilterStaticOperator;
  QueryPaymentsFilterStaticType: QueryPaymentsFilterStaticType;
  QueryPaymentsOrderByColumn: QueryPaymentsOrderByColumn;
  QueryPaymentsOrderByOrderByClause: QueryPaymentsOrderByOrderByClause;
  QueryPermissionsWhereColumn: QueryPermissionsWhereColumn;
  QueryPermissionsWhereWhereConditions: QueryPermissionsWhereWhereConditions;
  QueryPermissionsWhereWhereConditionsRelation: QueryPermissionsWhereWhereConditionsRelation;
  QueryPriceListFeesFilterFilterConditions: QueryPriceListFeesFilterFilterConditions;
  QueryPriceListFeesFilterStatic: QueryPriceListFeesFilterStatic;
  QueryPriceListFeesFilterStaticInput: QueryPriceListFeesFilterStaticInput;
  QueryPriceListFeesFilterStaticOperator: QueryPriceListFeesFilterStaticOperator;
  QueryPriceListFeesFilterStaticType: QueryPriceListFeesFilterStaticType;
  QueryProjectsFilterFilterConditions: QueryProjectsFilterFilterConditions;
  QueryProjectsFilterStatic: QueryProjectsFilterStatic;
  QueryProjectsFilterStaticInput: QueryProjectsFilterStaticInput;
  QueryProjectsFilterStaticOperator: QueryProjectsFilterStaticOperator;
  QueryProjectsFilterStaticType: QueryProjectsFilterStaticType;
  QueryRegionsFilterFilterConditions: QueryRegionsFilterFilterConditions;
  QueryRegionsFilterStatic: QueryRegionsFilterStatic;
  QueryRegionsFilterStaticInput: QueryRegionsFilterStaticInput;
  QueryRegionsFilterStaticOperator: QueryRegionsFilterStaticOperator;
  QueryRegionsFilterStaticType: QueryRegionsFilterStaticType;
  QueryRequisitesFilterFilterConditions: QueryRequisitesFilterFilterConditions;
  QueryRequisitesFilterStatic: QueryRequisitesFilterStatic;
  QueryRequisitesFilterStaticInput: QueryRequisitesFilterStaticInput;
  QueryRequisitesFilterStaticOperator: QueryRequisitesFilterStaticOperator;
  QueryRequisitesFilterStaticType: QueryRequisitesFilterStaticType;
  QueryRolesFilterFilterConditions: QueryRolesFilterFilterConditions;
  QueryRolesFilterStatic: QueryRolesFilterStatic;
  QueryRolesFilterStaticInput: QueryRolesFilterStaticInput;
  QueryRolesFilterStaticOperator: QueryRolesFilterStaticOperator;
  QueryRolesFilterStaticType: QueryRolesFilterStaticType;
  QueryRolesOrderByColumn: QueryRolesOrderByColumn;
  QueryRolesOrderByOrderByClause: QueryRolesOrderByOrderByClause;
  QueryTicketsFilterFilterConditions: QueryTicketsFilterFilterConditions;
  QueryTicketsFilterStatic: QueryTicketsFilterStatic;
  QueryTicketsFilterStaticInput: QueryTicketsFilterStaticInput;
  QueryTicketsFilterStaticOperator: QueryTicketsFilterStaticOperator;
  QueryTicketsFilterStaticType: QueryTicketsFilterStaticType;
  QueryTicketsOrderByColumn: QueryTicketsOrderByColumn;
  QueryTicketsOrderByCompany: QueryTicketsOrderByCompany;
  QueryTicketsOrderByDepartment: QueryTicketsOrderByDepartment;
  QueryTicketsOrderByRelationOrderByClause: QueryTicketsOrderByRelationOrderByClause;
  QueryTransferIncomingsFilterFilterConditions: QueryTransferIncomingsFilterFilterConditions;
  QueryTransferIncomingsFilterStatic: QueryTransferIncomingsFilterStatic;
  QueryTransferIncomingsFilterStaticInput: QueryTransferIncomingsFilterStaticInput;
  QueryTransferIncomingsFilterStaticOperator: QueryTransferIncomingsFilterStaticOperator;
  QueryTransferIncomingsFilterStaticType: QueryTransferIncomingsFilterStaticType;
  QueryTransferOutgoingsFilterFilterConditions: QueryTransferOutgoingsFilterFilterConditions;
  QueryTransferOutgoingsFilterStatic: QueryTransferOutgoingsFilterStatic;
  QueryTransferOutgoingsFilterStaticEnumUserType: QueryTransferOutgoingsFilterStaticEnumUserType;
  QueryTransferOutgoingsFilterStaticInput: QueryTransferOutgoingsFilterStaticInput;
  QueryTransferOutgoingsFilterStaticOperator: QueryTransferOutgoingsFilterStaticOperator;
  QueryTransferOutgoingsFilterStaticType: QueryTransferOutgoingsFilterStaticType;
  QueryUsersFilterFilterConditions: QueryUsersFilterFilterConditions;
  QueryUsersFilterStatic: QueryUsersFilterStatic;
  QueryUsersFilterStaticInput: QueryUsersFilterStaticInput;
  QueryUsersFilterStaticOperator: QueryUsersFilterStaticOperator;
  QueryUsersFilterStaticType: QueryUsersFilterStaticType;
  QueryUsersOrderByColumn: QueryUsersOrderByColumn;
  QueryUsersOrderByOrderByClause: QueryUsersOrderByOrderByClause;
  RawFile: ResolverTypeWrapper<RawFile>;
  RecipientType: RecipientType;
  Region: ResolverTypeWrapper<Region>;
  RegionPaginator: ResolverTypeWrapper<RegionPaginator>;
  Requisite: ResolverTypeWrapper<Requisite>;
  RespondentFee: ResolverTypeWrapper<RespondentFee>;
  Role: ResolverTypeWrapper<Role>;
  RolePaginator: ResolverTypeWrapper<RolePaginator>;
  SQLOperator: SqlOperator;
  Securities: Securities;
  Sender: ResolverTypeWrapper<Sender>;
  ServiceType: ServiceType;
  Sex: Sex;
  SimplePaginatorInfo: ResolverTypeWrapper<SimplePaginatorInfo>;
  Sort: Sort;
  SortOrder: SortOrder;
  State: ResolverTypeWrapper<State>;
  StateReason: ResolverTypeWrapper<StateReason>;
  StatusType: ResolverTypeWrapper<StatusType>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  StringInteger: ResolverTypeWrapper<Scalars['StringInteger']['output']>;
  Ticket: ResolverTypeWrapper<Ticket>;
  TicketComments: ResolverTypeWrapper<TicketComments>;
  TicketPaginator: ResolverTypeWrapper<TicketPaginator>;
  TicketStatus: ResolverTypeWrapper<TicketStatus>;
  TransferIncoming: ResolverTypeWrapper<
    Omit<TransferIncoming, 'recipient'> & {
      recipient?: Maybe<ResolversTypes['Client']>;
    }
  >;
  TransferIncomingHistory: ResolverTypeWrapper<TransferIncomingHistory>;
  TransferIncomingHistoryPaginator: ResolverTypeWrapper<TransferIncomingHistoryPaginator>;
  TransferIncomingPaginator: ResolverTypeWrapper<TransferIncomingPaginator>;
  TransferIncomingStatistic: ResolverTypeWrapper<TransferIncomingStatistic>;
  TransferOutgoing: ResolverTypeWrapper<
    Omit<TransferOutgoing, 'requested_by' | 'sender'> & {
      requested_by?: Maybe<ResolversTypes['Clientable']>;
      sender?: Maybe<ResolversTypes['Client']>;
    }
  >;
  TransferOutgoingHistory: ResolverTypeWrapper<TransferOutgoingHistory>;
  TransferOutgoingHistoryPaginator: ResolverTypeWrapper<TransferOutgoingHistoryPaginator>;
  TransferOutgoingPaginator: ResolverTypeWrapper<TransferOutgoingPaginator>;
  TransferOutgoingStatistic: ResolverTypeWrapper<TransferOutgoingStatistic>;
  TransferType: TransferType;
  TwoFactorAuthSettings: ResolverTypeWrapper<TwoFactorAuthSettings>;
  TwoFactorAuthSettingsPaginator: ResolverTypeWrapper<TwoFactorAuthSettingsPaginator>;
  TwoFactorAuthToken: ResolverTypeWrapper<TwoFactorAuthToken>;
  TypeOfIndustry: ResolverTypeWrapper<TypeOfIndustry>;
  TypeOfTransfer: ResolverTypeWrapper<TypeOfTransfer>;
  UserType: UserType;
  Users: ResolverTypeWrapper<Users>;
  UsersPaginator: ResolverTypeWrapper<UsersPaginator>;
  WhereConditions: WhereConditions;
  WhereConditionsRelation: WhereConditionsRelation;
  dashboardAccountsStatistic: ResolverTypeWrapper<DashboardAccountsStatistic>;
  dashboardTicketsStatistic: ResolverTypeWrapper<DashboardTicketsStatistic>;
  dashboardTransfersStatistic: ResolverTypeWrapper<DashboardTransfersStatistic>;
  dashboardUsersStatistic: ResolverTypeWrapper<DashboardUsersStatistic>;
  priceList: PriceList;
  userAuthResponse: ResolverTypeWrapper<UserAuthResponse>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Account: Omit<Account, 'client'> & { client?: Maybe<ResolversParentTypes['Client']> };
  AccountClient: Omit<AccountClient, 'client'> & { client: ResolversParentTypes['Client'] };
  AccountGenerateIbanResponse: AccountGenerateIbanResponse;
  AccountLimit: AccountLimit;
  AccountLimitPaginator: AccountLimitPaginator;
  AccountPaginator: AccountPaginator;
  AccountReachedLimit: AccountReachedLimit;
  AccountReachedLimitPaginator: AccountReachedLimitPaginator;
  AccountState: AccountState;
  AccountStatement: AccountStatement;
  AccountStatementTransaction: AccountStatementTransaction;
  ActiveSession: ActiveSession;
  ActiveSessionMutatorResponse: ActiveSessionMutatorResponse;
  ActiveSessions: ActiveSessions;
  ActivityLog: ActivityLog;
  ActivityLogs: ActivityLogs;
  AdditionalFieldInput: AdditionalFieldInput;
  ApplicantAccount: ApplicantAccount;
  ApplicantBankingAccess: ApplicantBankingAccess;
  ApplicantBankingAccesses: ApplicantBankingAccesses;
  ApplicantCompany: ApplicantCompany;
  ApplicantCompanyBusinessType: ApplicantCompanyBusinessType;
  ApplicantCompanyBusinessTypePaginator: ApplicantCompanyBusinessTypePaginator;
  ApplicantCompanyLabel: ApplicantCompanyLabel;
  ApplicantCompanyLabelPaginator: ApplicantCompanyLabelPaginator;
  ApplicantCompanyModules: ApplicantCompanyModules;
  ApplicantCompanyNotes: ApplicantCompanyNotes;
  ApplicantCompanyNotesPaginator: ApplicantCompanyNotesPaginator;
  ApplicantCompanyPaginator: ApplicantCompanyPaginator;
  ApplicantCompanyRiskLevelHistory: ApplicantCompanyRiskLevelHistory;
  ApplicantCompanyRiskLevelHistoryPaginator: ApplicantCompanyRiskLevelHistoryPaginator;
  ApplicantDetailsRequisites: ApplicantDetailsRequisites;
  ApplicantDevice: ApplicantDevice;
  ApplicantDocument: ApplicantDocument;
  ApplicantDocumentInternalNote: ApplicantDocumentInternalNote;
  ApplicantDocumentInternalNotePaginator: ApplicantDocumentInternalNotePaginator;
  ApplicantDocumentPaginator: ApplicantDocumentPaginator;
  ApplicantDocumentRejectDetail: ApplicantDocumentRejectDetail;
  ApplicantDocumentTag: ApplicantDocumentTag;
  ApplicantDocumentTagCategory: ApplicantDocumentTagCategory;
  ApplicantDocumentTagCategoryPaginator: ApplicantDocumentTagCategoryPaginator;
  ApplicantDocumentTagPaginator: ApplicantDocumentTagPaginator;
  ApplicantIndividual: ApplicantIndividual;
  ApplicantIndividualCompany: Omit<ApplicantIndividualCompany, 'client'> & {
    client?: Maybe<ResolversParentTypes['Client']>;
  };
  ApplicantIndividualCompanyPosition: ApplicantIndividualCompanyPosition;
  ApplicantIndividualCompanyPositionPaginator: ApplicantIndividualCompanyPositionPaginator;
  ApplicantIndividualCompanyRelation: ApplicantIndividualCompanyRelation;
  ApplicantIndividualCompanyRelationPaginator: ApplicantIndividualCompanyRelationPaginator;
  ApplicantIndividualLabel: ApplicantIndividualLabel;
  ApplicantIndividualLabelPaginator: ApplicantIndividualLabelPaginator;
  ApplicantIndividualModules: ApplicantIndividualModules;
  ApplicantIndividualNotes: ApplicantIndividualNotes;
  ApplicantIndividualNotesPaginator: ApplicantIndividualNotesPaginator;
  ApplicantIndividualPaginator: ApplicantIndividualPaginator;
  ApplicantKycLevel: ApplicantKycLevel;
  ApplicantKycLevelPaginator: ApplicantKycLevelPaginator;
  ApplicantLinkedCompany: ApplicantLinkedCompany;
  ApplicantModules: ApplicantModules;
  ApplicantModulesPaginator: ApplicantModulesPaginator;
  ApplicantProfile: ApplicantProfile;
  ApplicantRequisites: ApplicantRequisites;
  ApplicantRiskLevel: ApplicantRiskLevel;
  ApplicantRiskLevelHistory: ApplicantRiskLevelHistory;
  ApplicantRiskLevelHistoryPaginator: ApplicantRiskLevelHistoryPaginator;
  ApplicantRiskLevelPaginator: ApplicantRiskLevelPaginator;
  ApplicantSettingsProfile: ApplicantSettingsProfile;
  ApplicantState: ApplicantState;
  ApplicantStatePaginator: ApplicantStatePaginator;
  ApplicantStateReason: ApplicantStateReason;
  ApplicantStateReasonPaginator: ApplicantStateReasonPaginator;
  ApplicantStatus: ApplicantStatus;
  ApplicantStatusPaginator: ApplicantStatusPaginator;
  ApplicantVerificationStatus: ApplicantVerificationStatus;
  AuthenticationLog: AuthenticationLog;
  AuthenticationLogs: AuthenticationLogs;
  BankCorrespondent: BankCorrespondent;
  BankCorrespondentPaginator: BankCorrespondentPaginator;
  Boolean: Scalars['Boolean']['output'];
  BusinessActivity: BusinessActivity;
  BusinessActivityPaginator: BusinessActivityPaginator;
  Client: ResolversUnionTypes<ResolversParentTypes>['Client'];
  ClientAccountsDetails: ClientAccountsDetails;
  ClientIpAddress: ClientIpAddress;
  Clientable: ResolversUnionTypes<ResolversParentTypes>['Clientable'];
  CommissionPriceList: CommissionPriceList;
  CommissionPriceListPaginator: CommissionPriceListPaginator;
  CommissionTemplate: CommissionTemplate;
  CommissionTemplateLimit: CommissionTemplateLimit;
  CommissionTemplateLimitActionType: CommissionTemplateLimitActionType;
  CommissionTemplateLimitActionTypePaginator: CommissionTemplateLimitActionTypePaginator;
  CommissionTemplateLimitPaginator: CommissionTemplateLimitPaginator;
  CommissionTemplateLimitPeriod: CommissionTemplateLimitPeriod;
  CommissionTemplateLimitPeriodPaginator: CommissionTemplateLimitPeriodPaginator;
  CommissionTemplateLimitTransferDirection: CommissionTemplateLimitTransferDirection;
  CommissionTemplateLimitTransferDirectionPaginator: CommissionTemplateLimitTransferDirectionPaginator;
  CommissionTemplateLimitType: CommissionTemplateLimitType;
  CommissionTemplateLimitTypePaginator: CommissionTemplateLimitTypePaginator;
  CommissionTemplatePaginator: CommissionTemplatePaginator;
  Company: Company;
  CompanyModule: CompanyModule;
  CompanyModuleIbanProvider: CompanyModuleIbanProvider;
  CompanyModuleIbanProviderPassword: CompanyModuleIbanProviderPassword;
  CompanyModulePaymentProvider: CompanyModulePaymentProvider;
  CompanyModulePaymentProviderPassword: CompanyModulePaymentProviderPassword;
  CompanyPaginator: CompanyPaginator;
  ConnectImageableInput: ConnectImageableInput;
  Country: Country;
  CountryPaginator: CountryPaginator;
  Currencies: Currencies;
  CurrenciesPaginator: CurrenciesPaginator;
  Date: Scalars['Date']['output'];
  DateEnd: Scalars['DateEnd']['output'];
  DateRange: DateRange;
  DateTime: Scalars['DateTime']['output'];
  DateTimeRange: DateTimeRange;
  DateTimeUtc: Scalars['DateTimeUtc']['output'];
  Decimal: Scalars['Decimal']['output'];
  Department: Department;
  DepartmentPaginator: DepartmentPaginator;
  DepartmentPosition: DepartmentPosition;
  DepartmentPositionPaginator: DepartmentPositionPaginator;
  DocumentState: DocumentState;
  DocumentType: DocumentType;
  EMAIL: Scalars['EMAIL']['output'];
  EmailNotification: Omit<EmailNotification, 'clientable'> & { clientable?: Maybe<ResolversParentTypes['Clientable']> };
  EmailNotificationPaginator: EmailNotificationPaginator;
  EmailSmtp: EmailSmtp;
  EmailTemplate: EmailTemplate;
  EmailTemplateLayout: EmailTemplateLayout;
  EmailTemplateOnCompanyResponse: EmailTemplateOnCompanyResponse;
  Employee: Employee;
  Fee: Omit<Fee, 'client'> & { client?: Maybe<ResolversParentTypes['Client']> };
  FeeItem: FeeItem;
  FeeMode: FeeMode;
  FeePeriod: FeePeriod;
  FeeType: FeeType;
  Files: Files;
  FilesPaginator: FilesPaginator;
  FilterConditions: FilterConditions;
  Float: Scalars['Float']['output'];
  GroupRole: GroupRole;
  GroupRolePaginator: GroupRolePaginator;
  GroupRoleProvider: GroupRoleProvider;
  GroupRoleView: GroupRoleView;
  GroupRoleViewPaginator: GroupRoleViewPaginator;
  GroupType: GroupType;
  GroupTypePaginator: GroupTypePaginator;
  Groups: Groups;
  ID: Scalars['ID']['output'];
  ImageableMorphToTable: ImageableMorphToTable;
  InputAccount: InputAccount;
  InputCommissionTemplate: InputCommissionTemplate;
  InputCommissionTemplateLimit: InputCommissionTemplateLimit;
  InputCompanyModuleIbanProvider: InputCompanyModuleIbanProvider;
  InputCompanyModulePaymentProvider: InputCompanyModulePaymentProvider;
  InputGroupRoleProvider: InputGroupRoleProvider;
  InputMemberAccessLimitation: InputMemberAccessLimitation;
  InputPaymentBank: InputPaymentBank;
  InputPaymentProvider: InputPaymentProvider;
  InputPaymentProviderIban: InputPaymentProviderIban;
  InputPaymentSystem: InputPaymentSystem;
  InputProject: InputProject;
  InputProjectApiSetting: InputProjectApiSetting;
  InputProjectSettings: InputProjectSettings;
  InputRegion: InputRegion;
  Int: Scalars['Int']['output'];
  JSON: Scalars['JSON']['output'];
  KycTimeline: Omit<KycTimeline, 'applicant'> & { applicant?: Maybe<ResolversParentTypes['Client']> };
  KycTimelines: KycTimelines;
  Languages: Languages;
  LanguagesPaginator: LanguagesPaginator;
  MemberAccessLimitation: MemberAccessLimitation;
  MemberAccessLimitationPaginator: MemberAccessLimitationPaginator;
  MemberProfile: MemberProfile;
  MemberStatus: MemberStatus;
  Members: Members;
  MembersPaginator: MembersPaginator;
  Mixed: Scalars['Mixed']['output'];
  Module: Module;
  Mutation: {};
  OperationType: OperationType;
  OrderBy: OrderBy;
  OrderByClause: OrderByClause;
  PageInfo: PageInfo;
  PaginatorInfo: PaginatorInfo;
  PaymentBank: PaymentBank;
  PaymentBankPaginator: PaymentBankPaginator;
  PaymentProvider: PaymentProvider;
  PaymentProviderHistory: PaymentProviderHistory;
  PaymentProviderIban: PaymentProviderIban;
  PaymentProviderIbanPaginator: PaymentProviderIbanPaginator;
  PaymentProviderPaginator: PaymentProviderPaginator;
  PaymentStatus: PaymentStatus;
  PaymentSystem: PaymentSystem;
  PaymentSystemPaginator: PaymentSystemPaginator;
  PaymentUrgency: PaymentUrgency;
  Payments: Payments;
  PaymentsPaginator: PaymentsPaginator;
  PermissionAuth: PermissionAuth;
  PermissionCategory: PermissionCategory;
  PermissionCategoryPermissionListPermissionTypeWhereConditions: PermissionCategoryPermissionListPermissionTypeWhereConditions;
  PermissionCategoryPermissionListPermissionTypeWhereConditionsRelation: PermissionCategoryPermissionListPermissionTypeWhereConditionsRelation;
  PermissionCategoryRole: PermissionCategoryRole;
  PermissionList: PermissionList;
  PermissionType: PermissionType;
  Permissions: Permissions;
  PivotTable: PivotTable;
  PriceListFee: PriceListFee;
  PriceListFeeCurrency: PriceListFeeCurrency;
  PriceListFeeInput: PriceListFeeInput;
  PriceListFeeItem: PriceListFeeItem;
  PriceListFeeScheduled: PriceListFeeScheduled;
  PriceListFeeScheduledInput: PriceListFeeScheduledInput;
  PriceListFeesList: PriceListFeesList;
  Project: Project;
  ProjectApiSetting: Omit<ProjectApiSetting, 'provider'> & { provider?: Maybe<ResolversParentTypes['ProviderType']> };
  ProjectApiSettingPassword: ProjectApiSettingPassword;
  ProjectPaginator: ProjectPaginator;
  ProjectSettings: ProjectSettings;
  ProviderType: ResolversUnionTypes<ResolversParentTypes>['ProviderType'];
  Query: {};
  QueryAccountLimitsFilterFilterConditions: QueryAccountLimitsFilterFilterConditions;
  QueryAccountLimitsFilterStaticInput: QueryAccountLimitsFilterStaticInput;
  QueryAccountLimitsOrderByOrderByClause: QueryAccountLimitsOrderByOrderByClause;
  QueryAccountListFilterFilterConditions: QueryAccountListFilterFilterConditions;
  QueryAccountListFilterStaticInput: QueryAccountListFilterStaticInput;
  QueryAccountListOrderByOrderByClause: QueryAccountListOrderByOrderByClause;
  QueryAccountReachedLimitsFilterFilterConditions: QueryAccountReachedLimitsFilterFilterConditions;
  QueryAccountReachedLimitsFilterStaticInput: QueryAccountReachedLimitsFilterStaticInput;
  QueryAccountReachedLimitsHasAccountWhereHasConditions: QueryAccountReachedLimitsHasAccountWhereHasConditions;
  QueryAccountReachedLimitsHasAccountWhereHasConditionsRelation: QueryAccountReachedLimitsHasAccountWhereHasConditionsRelation;
  QueryAccountReachedLimitsOrderByOrderByClause: QueryAccountReachedLimitsOrderByOrderByClause;
  QueryAccountReachedLimitsWhereWhereConditions: QueryAccountReachedLimitsWhereWhereConditions;
  QueryAccountReachedLimitsWhereWhereConditionsRelation: QueryAccountReachedLimitsWhereWhereConditionsRelation;
  QueryAccountStatesOrderByOrderByClause: QueryAccountStatesOrderByOrderByClause;
  QueryActiveSessionsStatic: QueryActiveSessionsStatic;
  QueryActivityLogsStatic: QueryActivityLogsStatic;
  QueryApplicantAccountsFilterFilterConditions: QueryApplicantAccountsFilterFilterConditions;
  QueryApplicantAccountsFilterStaticInput: QueryApplicantAccountsFilterStaticInput;
  QueryApplicantAccountsOrderByOrderByClause: QueryApplicantAccountsOrderByOrderByClause;
  QueryApplicantBankingAccessesFilterFilterConditions: QueryApplicantBankingAccessesFilterFilterConditions;
  QueryApplicantBankingAccessesFilterStaticInput: QueryApplicantBankingAccessesFilterStaticInput;
  QueryApplicantBankingAccessesOrderByOrderByClause: QueryApplicantBankingAccessesOrderByOrderByClause;
  QueryApplicantCompaniesFilterFilterConditions: QueryApplicantCompaniesFilterFilterConditions;
  QueryApplicantCompaniesFilterStaticInput: QueryApplicantCompaniesFilterStaticInput;
  QueryApplicantCompaniesHasBusinessTypeWhereHasConditions: QueryApplicantCompaniesHasBusinessTypeWhereHasConditions;
  QueryApplicantCompaniesHasBusinessTypeWhereHasConditionsRelation: QueryApplicantCompaniesHasBusinessTypeWhereHasConditionsRelation;
  QueryApplicantCompaniesHasGroupRoleWhereHasConditions: QueryApplicantCompaniesHasGroupRoleWhereHasConditions;
  QueryApplicantCompaniesHasGroupRoleWhereHasConditionsRelation: QueryApplicantCompaniesHasGroupRoleWhereHasConditionsRelation;
  QueryApplicantCompaniesHasKycLevelWhereHasConditions: QueryApplicantCompaniesHasKycLevelWhereHasConditions;
  QueryApplicantCompaniesHasKycLevelWhereHasConditionsRelation: QueryApplicantCompaniesHasKycLevelWhereHasConditionsRelation;
  QueryApplicantCompaniesHasOwnerWhereHasConditions: QueryApplicantCompaniesHasOwnerWhereHasConditions;
  QueryApplicantCompaniesHasOwnerWhereHasConditionsRelation: QueryApplicantCompaniesHasOwnerWhereHasConditionsRelation;
  QueryApplicantCompaniesHasRiskLevelWhereHasConditions: QueryApplicantCompaniesHasRiskLevelWhereHasConditions;
  QueryApplicantCompaniesHasRiskLevelWhereHasConditionsRelation: QueryApplicantCompaniesHasRiskLevelWhereHasConditionsRelation;
  QueryApplicantCompaniesHasStateReasonWhereHasConditions: QueryApplicantCompaniesHasStateReasonWhereHasConditions;
  QueryApplicantCompaniesHasStateReasonWhereHasConditionsRelation: QueryApplicantCompaniesHasStateReasonWhereHasConditionsRelation;
  QueryApplicantCompaniesHasStatusWhereHasConditions: QueryApplicantCompaniesHasStatusWhereHasConditions;
  QueryApplicantCompaniesHasStatusWhereHasConditionsRelation: QueryApplicantCompaniesHasStatusWhereHasConditionsRelation;
  QueryApplicantCompaniesOrderByOrderByClause: QueryApplicantCompaniesOrderByOrderByClause;
  QueryApplicantCompaniesWhereWhereConditions: QueryApplicantCompaniesWhereWhereConditions;
  QueryApplicantCompaniesWhereWhereConditionsRelation: QueryApplicantCompaniesWhereWhereConditionsRelation;
  QueryApplicantCompanyBusinessTypeOrderByOrderByClause: QueryApplicantCompanyBusinessTypeOrderByOrderByClause;
  QueryApplicantCompanyBusinessTypeWhereWhereConditions: QueryApplicantCompanyBusinessTypeWhereWhereConditions;
  QueryApplicantCompanyBusinessTypeWhereWhereConditionsRelation: QueryApplicantCompanyBusinessTypeWhereWhereConditionsRelation;
  QueryApplicantCompanyLabelsAvailableOrderByOrderByClause: QueryApplicantCompanyLabelsAvailableOrderByOrderByClause;
  QueryApplicantCompanyLabelsOrderByOrderByClause: QueryApplicantCompanyLabelsOrderByOrderByClause;
  QueryApplicantCompanyLabelsWhereWhereConditions: QueryApplicantCompanyLabelsWhereWhereConditions;
  QueryApplicantCompanyLabelsWhereWhereConditionsRelation: QueryApplicantCompanyLabelsWhereWhereConditionsRelation;
  QueryApplicantCompanyNotesOrderByOrderByClause: QueryApplicantCompanyNotesOrderByOrderByClause;
  QueryApplicantCompanyRiskLevelHistoryFilterFilterConditions: QueryApplicantCompanyRiskLevelHistoryFilterFilterConditions;
  QueryApplicantCompanyRiskLevelHistoryFilterStaticInput: QueryApplicantCompanyRiskLevelHistoryFilterStaticInput;
  QueryApplicantCompanyRiskLevelHistoryOrderByOrderByClause: QueryApplicantCompanyRiskLevelHistoryOrderByOrderByClause;
  QueryApplicantCompanyRiskLevelHistoryWhereWhereConditions: QueryApplicantCompanyRiskLevelHistoryWhereWhereConditions;
  QueryApplicantCompanyRiskLevelHistoryWhereWhereConditionsRelation: QueryApplicantCompanyRiskLevelHistoryWhereWhereConditionsRelation;
  QueryApplicantDocumentTagsFilterFilterConditions: QueryApplicantDocumentTagsFilterFilterConditions;
  QueryApplicantDocumentTagsFilterStaticInput: QueryApplicantDocumentTagsFilterStaticInput;
  QueryApplicantDocumentTagsOrderByOrderByClause: QueryApplicantDocumentTagsOrderByOrderByClause;
  QueryApplicantDocumentsFilterFilterConditions: QueryApplicantDocumentsFilterFilterConditions;
  QueryApplicantDocumentsFilterStaticInput: QueryApplicantDocumentsFilterStaticInput;
  QueryApplicantDocumentsOrderByOrderByClause: QueryApplicantDocumentsOrderByOrderByClause;
  QueryApplicantIndividualCompanyPositionsFilterFilterConditions: QueryApplicantIndividualCompanyPositionsFilterFilterConditions;
  QueryApplicantIndividualCompanyPositionsFilterStaticInput: QueryApplicantIndividualCompanyPositionsFilterStaticInput;
  QueryApplicantIndividualCompanyPositionsOrderByOrderByClause: QueryApplicantIndividualCompanyPositionsOrderByOrderByClause;
  QueryApplicantIndividualCompanyRelationsFilterFilterConditions: QueryApplicantIndividualCompanyRelationsFilterFilterConditions;
  QueryApplicantIndividualCompanyRelationsFilterStaticInput: QueryApplicantIndividualCompanyRelationsFilterStaticInput;
  QueryApplicantIndividualCompanyRelationsOrderByOrderByClause: QueryApplicantIndividualCompanyRelationsOrderByOrderByClause;
  QueryApplicantIndividualLabelsAvailableOrderByOrderByClause: QueryApplicantIndividualLabelsAvailableOrderByOrderByClause;
  QueryApplicantIndividualLabelsOrderByOrderByClause: QueryApplicantIndividualLabelsOrderByOrderByClause;
  QueryApplicantIndividualLabelsWhereWhereConditions: QueryApplicantIndividualLabelsWhereWhereConditions;
  QueryApplicantIndividualLabelsWhereWhereConditionsRelation: QueryApplicantIndividualLabelsWhereWhereConditionsRelation;
  QueryApplicantIndividualModulesFilterStatic: QueryApplicantIndividualModulesFilterStatic;
  QueryApplicantIndividualNotesOrderByOrderByClause: QueryApplicantIndividualNotesOrderByOrderByClause;
  QueryApplicantIndividualsFilterFilterConditions: QueryApplicantIndividualsFilterFilterConditions;
  QueryApplicantIndividualsFilterStaticInput: QueryApplicantIndividualsFilterStaticInput;
  QueryApplicantIndividualsOrderByOrderByClause: QueryApplicantIndividualsOrderByOrderByClause;
  QueryApplicantKycLevelsOrderByOrderByClause: QueryApplicantKycLevelsOrderByOrderByClause;
  QueryApplicantKycLevelsWhereWhereConditions: QueryApplicantKycLevelsWhereWhereConditions;
  QueryApplicantKycLevelsWhereWhereConditionsRelation: QueryApplicantKycLevelsWhereWhereConditionsRelation;
  QueryApplicantModulesOrderByOrderByClause: QueryApplicantModulesOrderByOrderByClause;
  QueryApplicantModulesWhereWhereConditions: QueryApplicantModulesWhereWhereConditions;
  QueryApplicantModulesWhereWhereConditionsRelation: QueryApplicantModulesWhereWhereConditionsRelation;
  QueryApplicantRiskLevelHistoryOrderByOrderByClause: QueryApplicantRiskLevelHistoryOrderByOrderByClause;
  QueryApplicantRiskLevelHistoryWhereWhereConditions: QueryApplicantRiskLevelHistoryWhereWhereConditions;
  QueryApplicantRiskLevelHistoryWhereWhereConditionsRelation: QueryApplicantRiskLevelHistoryWhereWhereConditionsRelation;
  QueryApplicantRiskLevelsOrderByOrderByClause: QueryApplicantRiskLevelsOrderByOrderByClause;
  QueryApplicantRiskLevelsWhereWhereConditions: QueryApplicantRiskLevelsWhereWhereConditions;
  QueryApplicantRiskLevelsWhereWhereConditionsRelation: QueryApplicantRiskLevelsWhereWhereConditionsRelation;
  QueryApplicantStateReasonsOrderByOrderByClause: QueryApplicantStateReasonsOrderByOrderByClause;
  QueryApplicantStateReasonsWhereWhereConditions: QueryApplicantStateReasonsWhereWhereConditions;
  QueryApplicantStateReasonsWhereWhereConditionsRelation: QueryApplicantStateReasonsWhereWhereConditionsRelation;
  QueryApplicantStatesOrderByOrderByClause: QueryApplicantStatesOrderByOrderByClause;
  QueryApplicantStatesWhereWhereConditions: QueryApplicantStatesWhereWhereConditions;
  QueryApplicantStatesWhereWhereConditionsRelation: QueryApplicantStatesWhereWhereConditionsRelation;
  QueryApplicantStatusesOrderByOrderByClause: QueryApplicantStatusesOrderByOrderByClause;
  QueryApplicantStatusesWhereWhereConditions: QueryApplicantStatusesWhereWhereConditions;
  QueryApplicantStatusesWhereWhereConditionsRelation: QueryApplicantStatusesWhereWhereConditionsRelation;
  QueryAuthenticationLogsStatic: QueryAuthenticationLogsStatic;
  QueryBankCorrespondentsFilterFilterConditions: QueryBankCorrespondentsFilterFilterConditions;
  QueryBankCorrespondentsFilterStaticInput: QueryBankCorrespondentsFilterStaticInput;
  QueryBankCorrespondentsOrderByOrderByClause: QueryBankCorrespondentsOrderByOrderByClause;
  QueryBusinessActivitiesFilterFilterConditions: QueryBusinessActivitiesFilterFilterConditions;
  QueryBusinessActivitiesFilterStaticInput: QueryBusinessActivitiesFilterStaticInput;
  QueryBusinessActivitiesOrderByOrderByClause: QueryBusinessActivitiesOrderByOrderByClause;
  QueryClientCondition: QueryClientCondition;
  QueryCommissionPriceListsFilterFilterConditions: QueryCommissionPriceListsFilterFilterConditions;
  QueryCommissionPriceListsFilterStaticInput: QueryCommissionPriceListsFilterStaticInput;
  QueryCommissionPriceListsOrderByOrderByClause: QueryCommissionPriceListsOrderByOrderByClause;
  QueryCommissionTemplateLimitActionTypesOrderByOrderByClause: QueryCommissionTemplateLimitActionTypesOrderByOrderByClause;
  QueryCommissionTemplateLimitActionTypesWhereWhereConditions: QueryCommissionTemplateLimitActionTypesWhereWhereConditions;
  QueryCommissionTemplateLimitActionTypesWhereWhereConditionsRelation: QueryCommissionTemplateLimitActionTypesWhereWhereConditionsRelation;
  QueryCommissionTemplateLimitPeriodsOrderByOrderByClause: QueryCommissionTemplateLimitPeriodsOrderByOrderByClause;
  QueryCommissionTemplateLimitPeriodsWhereWhereConditions: QueryCommissionTemplateLimitPeriodsWhereWhereConditions;
  QueryCommissionTemplateLimitPeriodsWhereWhereConditionsRelation: QueryCommissionTemplateLimitPeriodsWhereWhereConditionsRelation;
  QueryCommissionTemplateLimitTransferDirectionsOrderByOrderByClause: QueryCommissionTemplateLimitTransferDirectionsOrderByOrderByClause;
  QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditions: QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditions;
  QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditionsRelation: QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditionsRelation;
  QueryCommissionTemplateLimitTypesOrderByOrderByClause: QueryCommissionTemplateLimitTypesOrderByOrderByClause;
  QueryCommissionTemplateLimitTypesWhereWhereConditions: QueryCommissionTemplateLimitTypesWhereWhereConditions;
  QueryCommissionTemplateLimitTypesWhereWhereConditionsRelation: QueryCommissionTemplateLimitTypesWhereWhereConditionsRelation;
  QueryCommissionTemplateLimitsFilterStatic: QueryCommissionTemplateLimitsFilterStatic;
  QueryCommissionTemplatesFilterFilterConditions: QueryCommissionTemplatesFilterFilterConditions;
  QueryCommissionTemplatesFilterStaticInput: QueryCommissionTemplatesFilterStaticInput;
  QueryCommissionTemplatesOrderByOrderByClause: QueryCommissionTemplatesOrderByOrderByClause;
  QueryCompaniesFilterFilterConditions: QueryCompaniesFilterFilterConditions;
  QueryCompaniesFilterStaticInput: QueryCompaniesFilterStaticInput;
  QueryCompaniesOrderByOrderByClause: QueryCompaniesOrderByOrderByClause;
  QueryDepartmentPositionsFilterFilterConditions: QueryDepartmentPositionsFilterFilterConditions;
  QueryDepartmentPositionsFilterStaticInput: QueryDepartmentPositionsFilterStaticInput;
  QueryDepartmentPositionsOrderByOrderByClause: QueryDepartmentPositionsOrderByOrderByClause;
  QueryDepartmentsFilterFilterConditions: QueryDepartmentsFilterFilterConditions;
  QueryDepartmentsFilterStaticInput: QueryDepartmentsFilterStaticInput;
  QueryDepartmentsOrderByOrderByClause: QueryDepartmentsOrderByOrderByClause;
  QueryEmailNotificationsFilterFilterConditions: QueryEmailNotificationsFilterFilterConditions;
  QueryEmailNotificationsFilterStaticInput: QueryEmailNotificationsFilterStaticInput;
  QueryEmailNotificationsOrderByOrderByClause: QueryEmailNotificationsOrderByOrderByClause;
  QueryEmailSmtpsOrderByOrderByClause: QueryEmailSmtpsOrderByOrderByClause;
  QueryEmailTemplatesFilterFilterConditions: QueryEmailTemplatesFilterFilterConditions;
  QueryEmailTemplatesFilterStaticInput: QueryEmailTemplatesFilterStaticInput;
  QueryEmailTemplatesOrderByOrderByClause: QueryEmailTemplatesOrderByOrderByClause;
  QueryFeeTypesFilterFilterConditions: QueryFeeTypesFilterFilterConditions;
  QueryFeeTypesFilterStaticInput: QueryFeeTypesFilterStaticInput;
  QueryFilesFilterFilterConditions: QueryFilesFilterFilterConditions;
  QueryFilesFilterStaticInput: QueryFilesFilterStaticInput;
  QueryFilesOrderByOrderByClause: QueryFilesOrderByOrderByClause;
  QueryGetMatchedUsersFilterFilterConditions: QueryGetMatchedUsersFilterFilterConditions;
  QueryGetMatchedUsersFilterStaticInput: QueryGetMatchedUsersFilterStaticInput;
  QueryGrantedBankingAccessFilterFilterConditions: QueryGrantedBankingAccessFilterFilterConditions;
  QueryGrantedBankingAccessFilterStaticInput: QueryGrantedBankingAccessFilterStaticInput;
  QueryGrantedBankingAccessOrderByOrderByClause: QueryGrantedBankingAccessOrderByOrderByClause;
  QueryGroupListFilterFilterConditions: QueryGroupListFilterFilterConditions;
  QueryGroupListFilterStaticInput: QueryGroupListFilterStaticInput;
  QueryGroupListOrderByOrderByClause: QueryGroupListOrderByOrderByClause;
  QueryGroupTypesFilterFilterConditions: QueryGroupTypesFilterFilterConditions;
  QueryGroupTypesFilterStaticInput: QueryGroupTypesFilterStaticInput;
  QueryGroupsFilterFilterConditions: QueryGroupsFilterFilterConditions;
  QueryGroupsFilterStaticInput: QueryGroupsFilterStaticInput;
  QueryGroupsOrderByOrderByClause: QueryGroupsOrderByOrderByClause;
  QueryKycTimelinesOrderByOrderByClause: QueryKycTimelinesOrderByOrderByClause;
  QueryMemberAccessLimitationsFilterFilterConditions: QueryMemberAccessLimitationsFilterFilterConditions;
  QueryMemberAccessLimitationsFilterStaticInput: QueryMemberAccessLimitationsFilterStaticInput;
  QueryMemberAccessLimitationsOrderByOrderByClause: QueryMemberAccessLimitationsOrderByOrderByClause;
  QueryMembersFilterFilterConditions: QueryMembersFilterFilterConditions;
  QueryMembersFilterStaticInput: QueryMembersFilterStaticInput;
  QueryMembersOrderByOrderByClause: QueryMembersOrderByOrderByClause;
  QueryModulesOrderByOrderByClause: QueryModulesOrderByOrderByClause;
  QueryModulesWhereWhereConditions: QueryModulesWhereWhereConditions;
  QueryModulesWhereWhereConditionsRelation: QueryModulesWhereWhereConditionsRelation;
  QueryModulesWithKycOrderByOrderByClause: QueryModulesWithKycOrderByOrderByClause;
  QueryModulesWithKycWhereWhereConditions: QueryModulesWithKycWhereWhereConditions;
  QueryModulesWithKycWhereWhereConditionsRelation: QueryModulesWithKycWhereWhereConditionsRelation;
  QueryOperationTypesFilterFilterConditions: QueryOperationTypesFilterFilterConditions;
  QueryOperationTypesFilterStaticInput: QueryOperationTypesFilterStaticInput;
  QueryOwnersOrderByOrderByClause: QueryOwnersOrderByOrderByClause;
  QueryPaymentBankCondition: QueryPaymentBankCondition;
  QueryPaymentBanksFilterFilterConditions: QueryPaymentBanksFilterFilterConditions;
  QueryPaymentBanksFilterStaticInput: QueryPaymentBanksFilterStaticInput;
  QueryPaymentBanksOrderByOrderByClause: QueryPaymentBanksOrderByOrderByClause;
  QueryPaymentProviderIbansFilterFilterConditions: QueryPaymentProviderIbansFilterFilterConditions;
  QueryPaymentProviderIbansFilterStaticInput: QueryPaymentProviderIbansFilterStaticInput;
  QueryPaymentProviderIbansOrderByOrderByClause: QueryPaymentProviderIbansOrderByOrderByClause;
  QueryPaymentProvidersFilterFilterConditions: QueryPaymentProvidersFilterFilterConditions;
  QueryPaymentProvidersFilterStaticInput: QueryPaymentProvidersFilterStaticInput;
  QueryPaymentProvidersOrderByOrderByClause: QueryPaymentProvidersOrderByOrderByClause;
  QueryPaymentStatusesFilterFilterConditions: QueryPaymentStatusesFilterFilterConditions;
  QueryPaymentStatusesFilterStaticInput: QueryPaymentStatusesFilterStaticInput;
  QueryPaymentSystemsFilterFilterConditions: QueryPaymentSystemsFilterFilterConditions;
  QueryPaymentSystemsFilterStaticInput: QueryPaymentSystemsFilterStaticInput;
  QueryPaymentSystemsOrderByOrderByClause: QueryPaymentSystemsOrderByOrderByClause;
  QueryPaymentsFilterFilterConditions: QueryPaymentsFilterFilterConditions;
  QueryPaymentsFilterStaticInput: QueryPaymentsFilterStaticInput;
  QueryPaymentsOrderByOrderByClause: QueryPaymentsOrderByOrderByClause;
  QueryPermissionsWhereWhereConditions: QueryPermissionsWhereWhereConditions;
  QueryPermissionsWhereWhereConditionsRelation: QueryPermissionsWhereWhereConditionsRelation;
  QueryPriceListFeesFilterFilterConditions: QueryPriceListFeesFilterFilterConditions;
  QueryPriceListFeesFilterStaticInput: QueryPriceListFeesFilterStaticInput;
  QueryProjectsFilterFilterConditions: QueryProjectsFilterFilterConditions;
  QueryProjectsFilterStaticInput: QueryProjectsFilterStaticInput;
  QueryRegionsFilterFilterConditions: QueryRegionsFilterFilterConditions;
  QueryRegionsFilterStaticInput: QueryRegionsFilterStaticInput;
  QueryRequisitesFilterFilterConditions: QueryRequisitesFilterFilterConditions;
  QueryRequisitesFilterStaticInput: QueryRequisitesFilterStaticInput;
  QueryRolesFilterFilterConditions: QueryRolesFilterFilterConditions;
  QueryRolesFilterStaticInput: QueryRolesFilterStaticInput;
  QueryRolesOrderByOrderByClause: QueryRolesOrderByOrderByClause;
  QueryTicketsFilterFilterConditions: QueryTicketsFilterFilterConditions;
  QueryTicketsFilterStaticInput: QueryTicketsFilterStaticInput;
  QueryTicketsOrderByCompany: QueryTicketsOrderByCompany;
  QueryTicketsOrderByDepartment: QueryTicketsOrderByDepartment;
  QueryTicketsOrderByRelationOrderByClause: QueryTicketsOrderByRelationOrderByClause;
  QueryTransferIncomingsFilterFilterConditions: QueryTransferIncomingsFilterFilterConditions;
  QueryTransferIncomingsFilterStaticInput: QueryTransferIncomingsFilterStaticInput;
  QueryTransferOutgoingsFilterFilterConditions: QueryTransferOutgoingsFilterFilterConditions;
  QueryTransferOutgoingsFilterStaticInput: QueryTransferOutgoingsFilterStaticInput;
  QueryUsersFilterFilterConditions: QueryUsersFilterFilterConditions;
  QueryUsersFilterStaticInput: QueryUsersFilterStaticInput;
  QueryUsersOrderByOrderByClause: QueryUsersOrderByOrderByClause;
  RawFile: RawFile;
  Region: Region;
  RegionPaginator: RegionPaginator;
  Requisite: Requisite;
  RespondentFee: RespondentFee;
  Role: Role;
  RolePaginator: RolePaginator;
  Sender: Sender;
  SimplePaginatorInfo: SimplePaginatorInfo;
  State: State;
  StateReason: StateReason;
  StatusType: StatusType;
  String: Scalars['String']['output'];
  StringInteger: Scalars['StringInteger']['output'];
  Ticket: Ticket;
  TicketComments: TicketComments;
  TicketPaginator: TicketPaginator;
  TicketStatus: TicketStatus;
  TransferIncoming: Omit<TransferIncoming, 'recipient'> & { recipient?: Maybe<ResolversParentTypes['Client']> };
  TransferIncomingHistory: TransferIncomingHistory;
  TransferIncomingHistoryPaginator: TransferIncomingHistoryPaginator;
  TransferIncomingPaginator: TransferIncomingPaginator;
  TransferIncomingStatistic: TransferIncomingStatistic;
  TransferOutgoing: Omit<TransferOutgoing, 'requested_by' | 'sender'> & {
    requested_by?: Maybe<ResolversParentTypes['Clientable']>;
    sender?: Maybe<ResolversParentTypes['Client']>;
  };
  TransferOutgoingHistory: TransferOutgoingHistory;
  TransferOutgoingHistoryPaginator: TransferOutgoingHistoryPaginator;
  TransferOutgoingPaginator: TransferOutgoingPaginator;
  TransferOutgoingStatistic: TransferOutgoingStatistic;
  TwoFactorAuthSettings: TwoFactorAuthSettings;
  TwoFactorAuthSettingsPaginator: TwoFactorAuthSettingsPaginator;
  TwoFactorAuthToken: TwoFactorAuthToken;
  TypeOfIndustry: TypeOfIndustry;
  TypeOfTransfer: TypeOfTransfer;
  Users: Users;
  UsersPaginator: UsersPaginator;
  WhereConditions: WhereConditions;
  WhereConditionsRelation: WhereConditionsRelation;
  dashboardAccountsStatistic: DashboardAccountsStatistic;
  dashboardTicketsStatistic: DashboardTicketsStatistic;
  dashboardTransfersStatistic: DashboardTransfersStatistic;
  dashboardUsersStatistic: DashboardUsersStatistic;
  priceList: PriceList;
  userAuthResponse: UserAuthResponse;
};

export type AccountResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Account'] = ResolversParentTypes['Account'],
> = {
  account_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  account_number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  account_state?: Resolver<Maybe<ResolversTypes['AccountState']>, ParentType, ContextType>;
  account_type?: Resolver<Maybe<ResolversTypes['AccountType']>, ParentType, ContextType>;
  activated_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  client?: Resolver<Maybe<ResolversTypes['Client']>, ParentType, ContextType>;
  client_accounts?: Resolver<ReadonlyArray<ResolversTypes['ClientAccountsDetails']>, ParentType, ContextType>;
  commission_template?: Resolver<Maybe<ResolversTypes['CommissionTemplate']>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['Currencies']>, ParentType, ContextType>;
  group?: Resolver<Maybe<ResolversTypes['GroupRole']>, ParentType, ContextType>;
  group_type?: Resolver<Maybe<ResolversTypes['GroupType']>, ParentType, ContextType>;
  iban_provider?: Resolver<Maybe<ResolversTypes['PaymentProviderIban']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  is_primary?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  last_charge_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  max_limit_balance?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  member?: Resolver<Maybe<ResolversTypes['Members']>, ParentType, ContextType>;
  min_limit_balance?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['ApplicantIndividual']>, ParentType, ContextType>;
  payment_bank?: Resolver<Maybe<ResolversTypes['PaymentBank']>, ParentType, ContextType>;
  payment_provider?: Resolver<Maybe<ResolversTypes['PaymentProvider']>, ParentType, ContextType>;
  payment_system?: Resolver<Maybe<ResolversTypes['PaymentSystem']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccountClientResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AccountClient'] = ResolversParentTypes['AccountClient'],
> = {
  client?: Resolver<ResolversTypes['Client'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccountGenerateIbanResponseResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['AccountGenerateIbanResponse'] = ResolversParentTypes['AccountGenerateIbanResponse'],
> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccountLimitResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AccountLimit'] = ResolversParentTypes['AccountLimit'],
> = {
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  account_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  commission_template_limit_action_type?: Resolver<
    Maybe<ResolversTypes['CommissionTemplateLimitActionType']>,
    ParentType,
    ContextType
  >;
  commission_template_limit_action_type_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  commission_template_limit_period?: Resolver<
    Maybe<ResolversTypes['CommissionTemplateLimitPeriod']>,
    ParentType,
    ContextType
  >;
  commission_template_limit_period_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  commission_template_limit_transfer_direction?: Resolver<
    Maybe<ResolversTypes['CommissionTemplateLimitTransferDirection']>,
    ParentType,
    ContextType
  >;
  commission_template_limit_transfer_direction_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  commission_template_limit_type?: Resolver<
    Maybe<ResolversTypes['CommissionTemplateLimitType']>,
    ParentType,
    ContextType
  >;
  currency?: Resolver<Maybe<ResolversTypes['Currencies']>, ParentType, ContextType>;
  currency_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  period_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccountLimitPaginatorResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AccountLimitPaginator'] = ResolversParentTypes['AccountLimitPaginator'],
> = {
  data?: Resolver<ReadonlyArray<ResolversTypes['AccountLimit']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccountPaginatorResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AccountPaginator'] = ResolversParentTypes['AccountPaginator'],
> = {
  data?: Resolver<ReadonlyArray<ResolversTypes['Account']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccountReachedLimitResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AccountReachedLimit'] = ResolversParentTypes['AccountReachedLimit'],
> = {
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  account_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  client_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  client_type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  group_type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  limit_currency?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  limit_type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  limit_value?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  period?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transfer_direction?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccountReachedLimitPaginatorResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['AccountReachedLimitPaginator'] = ResolversParentTypes['AccountReachedLimitPaginator'],
> = {
  data?: Resolver<ReadonlyArray<ResolversTypes['AccountReachedLimit']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccountStateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AccountState'] = ResolversParentTypes['AccountState'],
> = {
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccountStatementResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AccountStatement'] = ResolversParentTypes['AccountStatement'],
> = {
  account_currency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  account_number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  closing_balance?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  closing_balance_date?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  credit_turnover?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  date_from?: Resolver<ResolversTypes['DateTimeUtc'], ParentType, ContextType>;
  debit_turnover?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  opening_balance?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  opening_balance_date?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  transactions?: Resolver<
    Maybe<ReadonlyArray<Maybe<ResolversTypes['AccountStatementTransaction']>>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccountStatementTransactionResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['AccountStatementTransaction'] = ResolversParentTypes['AccountStatementTransaction'],
> = {
  account_balance?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  account_client?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  account_number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['DateTimeUtc'], ParentType, ContextType>;
  execution_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  reason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sender_recipient?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  transaction_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActiveSessionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ActiveSession'] = ResolversParentTypes['ActiveSession'],
> = {
  browser?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  browser_version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  company?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['DateTimeUtc'], ParentType, ContextType>;
  device_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  domain?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ip?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  model?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  platform?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  provider?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  trusted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActiveSessionMutatorResponseResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ActiveSessionMutatorResponse'] = ResolversParentTypes['ActiveSessionMutatorResponse'],
> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActiveSessionsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ActiveSessions'] = ResolversParentTypes['ActiveSessions'],
> = {
  data?: Resolver<Maybe<ReadonlyArray<ResolversTypes['ActiveSession']>>, ParentType, ContextType>;
  paginatorInfo?: Resolver<Maybe<ResolversTypes['PaginatorInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActivityLogResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ActivityLog'] = ResolversParentTypes['ActivityLog'],
> = {
  changes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  company?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['DateTimeUtc'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  domain?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  group?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  member?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActivityLogsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ActivityLogs'] = ResolversParentTypes['ActivityLogs'],
> = {
  data?: Resolver<Maybe<ReadonlyArray<ResolversTypes['ActivityLog']>>, ParentType, ContextType>;
  paginatorInfo?: Resolver<Maybe<ResolversTypes['PaginatorInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantAccountResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ApplicantAccount'] = ResolversParentTypes['ApplicantAccount'],
> = {
  account_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  account_number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  account_type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['Currencies']>, ParentType, ContextType>;
  current_balance?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  is_primary?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  is_show?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantBankingAccessResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ApplicantBankingAccess'] = ResolversParentTypes['ApplicantBankingAccess'],
> = {
  applicant_company?: Resolver<Maybe<ResolversTypes['ApplicantCompany']>, ParentType, ContextType>;
  applicant_individual?: Resolver<Maybe<ResolversTypes['ApplicantIndividual']>, ParentType, ContextType>;
  contact_administrator?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  create_payments?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  daily_limit?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  grant_access?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  member?: Resolver<Maybe<ResolversTypes['Members']>, ParentType, ContextType>;
  monthly_limit?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  operation_limit?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['Role']>, ParentType, ContextType>;
  sign_payments?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  used_daily_limit?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  used_monthly_limit?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantBankingAccessesResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ApplicantBankingAccesses'] = ResolversParentTypes['ApplicantBankingAccesses'],
> = {
  data?: Resolver<Maybe<ReadonlyArray<ResolversTypes['ApplicantBankingAccess']>>, ParentType, ContextType>;
  paginatorInfo?: Resolver<Maybe<ResolversTypes['PaginatorInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantCompanyResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ApplicantCompany'] = ResolversParentTypes['ApplicantCompany'],
> = {
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  address2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  applicant_state?: Resolver<Maybe<ResolversTypes['ApplicantState']>, ParentType, ContextType>;
  basic_info_additional_field?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  business_type?: Resolver<Maybe<ResolversTypes['ApplicantCompanyBusinessType']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  company_info_additional_fields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  company_position?: Resolver<Maybe<ResolversTypes['ApplicantIndividualCompany']>, ParentType, ContextType>;
  company_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contact_email?: Resolver<Maybe<ResolversTypes['EMAIL']>, ParentType, ContextType>;
  contact_phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contacts_additional_fields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['EMAIL']>, ParentType, ContextType>;
  email_verification?: Resolver<Maybe<ResolversTypes['ApplicantVerificationStatus']>, ParentType, ContextType>;
  expires_at?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  group?: Resolver<Maybe<ResolversTypes['GroupRole']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  incorporate_date?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  kyc_level?: Resolver<Maybe<ResolversTypes['ApplicantRiskLevel']>, ParentType, ContextType>;
  labels?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['ApplicantCompanyLabel']>>>, ParentType, ContextType>;
  language?: Resolver<Maybe<ResolversTypes['Languages']>, ParentType, ContextType>;
  license_number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  manager?: Resolver<Maybe<ResolversTypes['Members']>, ParentType, ContextType>;
  modules?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['ApplicantCompanyModules']>>>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  notes?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['ApplicantCompanyNotes']>>>, ParentType, ContextType>;
  office_address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['ApplicantIndividual']>, ParentType, ContextType>;
  owner_position?: Resolver<Maybe<ResolversTypes['ApplicantIndividualCompany']>, ParentType, ContextType>;
  owner_relation?: Resolver<Maybe<ResolversTypes['ApplicantIndividualCompany']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone_verification?: Resolver<Maybe<ResolversTypes['ApplicantVerificationStatus']>, ParentType, ContextType>;
  photo?: Resolver<Maybe<ResolversTypes['Files']>, ParentType, ContextType>;
  profile_additional_fields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType>;
  reg_at?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  reg_number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  risk_level?: Resolver<Maybe<ResolversTypes['ApplicantRiskLevel']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state_reason?: Resolver<Maybe<ResolversTypes['ApplicantStateReason']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['ApplicantStatus']>, ParentType, ContextType>;
  tax?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zip?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantCompanyBusinessTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ApplicantCompanyBusinessType'] = ResolversParentTypes['ApplicantCompanyBusinessType'],
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantCompanyBusinessTypePaginatorResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ApplicantCompanyBusinessTypePaginator'] = ResolversParentTypes['ApplicantCompanyBusinessTypePaginator'],
> = {
  data?: Resolver<ReadonlyArray<ResolversTypes['ApplicantCompanyBusinessType']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantCompanyLabelResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ApplicantCompanyLabel'] = ResolversParentTypes['ApplicantCompanyLabel'],
> = {
  hex_color_code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  is_active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantCompanyLabelPaginatorResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ApplicantCompanyLabelPaginator'] = ResolversParentTypes['ApplicantCompanyLabelPaginator'],
> = {
  data?: Resolver<ReadonlyArray<ResolversTypes['ApplicantCompanyLabel']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantCompanyModulesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ApplicantCompanyModules'] = ResolversParentTypes['ApplicantCompanyModules'],
> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  is_active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantCompanyNotesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ApplicantCompanyNotes'] = ResolversParentTypes['ApplicantCompanyNotes'],
> = {
  applicant?: Resolver<Maybe<ResolversTypes['ApplicantCompany']>, ParentType, ContextType>;
  author?: Resolver<Maybe<ResolversTypes['Members']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  note?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantCompanyNotesPaginatorResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ApplicantCompanyNotesPaginator'] = ResolversParentTypes['ApplicantCompanyNotesPaginator'],
> = {
  data?: Resolver<ReadonlyArray<ResolversTypes['ApplicantCompanyNotes']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantCompanyPaginatorResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ApplicantCompanyPaginator'] = ResolversParentTypes['ApplicantCompanyPaginator'],
> = {
  data?: Resolver<ReadonlyArray<ResolversTypes['ApplicantCompany']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantCompanyRiskLevelHistoryResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ApplicantCompanyRiskLevelHistory'] = ResolversParentTypes['ApplicantCompanyRiskLevelHistory'],
> = {
  applicant_company?: Resolver<Maybe<ResolversTypes['ApplicantCompany']>, ParentType, ContextType>;
  comment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  manager?: Resolver<Maybe<ResolversTypes['Members']>, ParentType, ContextType>;
  risk_level?: Resolver<Maybe<ResolversTypes['ApplicantRiskLevel']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantCompanyRiskLevelHistoryPaginatorResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ApplicantCompanyRiskLevelHistoryPaginator'] = ResolversParentTypes['ApplicantCompanyRiskLevelHistoryPaginator'],
> = {
  data?: Resolver<ReadonlyArray<ResolversTypes['ApplicantCompanyRiskLevelHistory']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantDetailsRequisitesResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ApplicantDetailsRequisites'] = ResolversParentTypes['ApplicantDetailsRequisites'],
> = {
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  bank_address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  bank_country?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  bank_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  beneficiary?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  currency?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  iban?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  swift_code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantDeviceResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ApplicantDevice'] = ResolversParentTypes['ApplicantDevice'],
> = {
  browser?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['DateTimeUtc'], ParentType, ContextType>;
  device_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  expired_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  ip?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  model?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  platform?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  trusted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantDocumentResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ApplicantDocument'] = ResolversParentTypes['ApplicantDocument'],
> = {
  added_from?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  applicant_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  applicant_type?: Resolver<ResolversTypes['ApplicantType'], ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  document_state?: Resolver<Maybe<ResolversTypes['DocumentState']>, ParentType, ContextType>;
  document_state_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  document_type?: Resolver<Maybe<ResolversTypes['DocumentType']>, ParentType, ContextType>;
  document_type_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  file?: Resolver<Maybe<ResolversTypes['Files']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  info?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  internal_notes?: Resolver<
    Maybe<ReadonlyArray<Maybe<ResolversTypes['ApplicantDocumentInternalNote']>>>,
    ParentType,
    ContextType
  >;
  reject_details?: Resolver<
    Maybe<ReadonlyArray<Maybe<ResolversTypes['ApplicantDocumentRejectDetail']>>>,
    ParentType,
    ContextType
  >;
  tags?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['ApplicantDocumentTag']>>>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantDocumentInternalNoteResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ApplicantDocumentInternalNote'] = ResolversParentTypes['ApplicantDocumentInternalNote'],
> = {
  created_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  document?: Resolver<Maybe<ResolversTypes['ApplicantDocument']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  member?: Resolver<Maybe<ResolversTypes['Members']>, ParentType, ContextType>;
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantDocumentInternalNotePaginatorResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ApplicantDocumentInternalNotePaginator'] = ResolversParentTypes['ApplicantDocumentInternalNotePaginator'],
> = {
  data?: Resolver<ReadonlyArray<ResolversTypes['ApplicantDocumentInternalNote']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantDocumentPaginatorResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ApplicantDocumentPaginator'] = ResolversParentTypes['ApplicantDocumentPaginator'],
> = {
  data?: Resolver<ReadonlyArray<ResolversTypes['ApplicantDocument']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantDocumentRejectDetailResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ApplicantDocumentRejectDetail'] = ResolversParentTypes['ApplicantDocumentRejectDetail'],
> = {
  applicant_document?: Resolver<ResolversTypes['ApplicantDocument'], ParentType, ContextType>;
  applicant_document_tag?: Resolver<
    Maybe<ReadonlyArray<ResolversTypes['ApplicantDocumentTag']>>,
    ParentType,
    ContextType
  >;
  created_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  member?: Resolver<Maybe<ResolversTypes['Members']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantDocumentTagResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ApplicantDocumentTag'] = ResolversParentTypes['ApplicantDocumentTag'],
> = {
  category?: Resolver<Maybe<ResolversTypes['ApplicantDocumentTagCategory']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  member?: Resolver<Maybe<ResolversTypes['Members']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantDocumentTagCategoryResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ApplicantDocumentTagCategory'] = ResolversParentTypes['ApplicantDocumentTagCategory'],
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantDocumentTagCategoryPaginatorResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ApplicantDocumentTagCategoryPaginator'] = ResolversParentTypes['ApplicantDocumentTagCategoryPaginator'],
> = {
  data?: Resolver<ReadonlyArray<ResolversTypes['ApplicantDocumentTagCategory']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantDocumentTagPaginatorResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ApplicantDocumentTagPaginator'] = ResolversParentTypes['ApplicantDocumentTagPaginator'],
> = {
  data?: Resolver<ReadonlyArray<ResolversTypes['ApplicantDocumentTag']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantIndividualResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ApplicantIndividual'] = ResolversParentTypes['ApplicantIndividual'],
> = {
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  address_additional_fields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  applicant_companies?: Resolver<
    Maybe<ReadonlyArray<Maybe<ResolversTypes['ApplicantCompany']>>>,
    ParentType,
    ContextType
  >;
  applicant_state?: Resolver<Maybe<ResolversTypes['ApplicantState']>, ParentType, ContextType>;
  backup_codes?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  banking_access?: Resolver<
    Maybe<ReadonlyArray<Maybe<ResolversTypes['ApplicantBankingAccess']>>>,
    ParentType,
    ContextType
  >;
  birth_at?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  birth_city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  birth_country?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType>;
  birth_state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  citizenship_country?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  contacts_additional_fields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['EMAIL']>, ParentType, ContextType>;
  email_verification?: Resolver<Maybe<ResolversTypes['ApplicantVerificationStatus']>, ParentType, ContextType>;
  first_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  google2fa_secret?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  group?: Resolver<Maybe<ResolversTypes['GroupRole']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  ip_addresses?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['ClientIpAddress']>>>, ParentType, ContextType>;
  kyc_level?: Resolver<Maybe<ResolversTypes['ApplicantKycLevel']>, ParentType, ContextType>;
  labels?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['ApplicantIndividualLabel']>>>, ParentType, ContextType>;
  language?: Resolver<Maybe<ResolversTypes['Languages']>, ParentType, ContextType>;
  last_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  last_screened_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  manager?: Resolver<Maybe<ResolversTypes['Members']>, ParentType, ContextType>;
  middle_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  modules?: Resolver<
    Maybe<ReadonlyArray<Maybe<ResolversTypes['ApplicantIndividualModules']>>>,
    ParentType,
    ContextType
  >;
  nationality?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  notes?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['ApplicantIndividualNotes']>>>, ParentType, ContextType>;
  personal_additional_fields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone_verification?: Resolver<Maybe<ResolversTypes['ApplicantVerificationStatus']>, ParentType, ContextType>;
  photo?: Resolver<Maybe<ResolversTypes['Files']>, ParentType, ContextType>;
  profile_additional_fields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType>;
  risk_level?: Resolver<Maybe<ResolversTypes['ApplicantRiskLevel']>, ParentType, ContextType>;
  security_pin?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sex?: Resolver<Maybe<ResolversTypes['Sex']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state_reason?: Resolver<Maybe<ResolversTypes['ApplicantStateReason']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['ApplicantStatus']>, ParentType, ContextType>;
  two_factor_auth?: Resolver<Maybe<ResolversTypes['TwoFactorAuthSettings']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zip?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantIndividualCompanyResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ApplicantIndividualCompany'] = ResolversParentTypes['ApplicantIndividualCompany'],
> = {
  applicant_company?: Resolver<Maybe<ResolversTypes['ApplicantCompany']>, ParentType, ContextType>;
  applicant_company_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  applicant_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  applicant_individual_company_position_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  applicant_individual_company_relation_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  applicant_type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  client?: Resolver<Maybe<ResolversTypes['Client']>, ParentType, ContextType>;
  percentage_owned?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  position_in_company?: Resolver<Maybe<ResolversTypes['ApplicantIndividualCompanyPosition']>, ParentType, ContextType>;
  relation_to_company?: Resolver<Maybe<ResolversTypes['ApplicantIndividualCompanyRelation']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantIndividualCompanyPositionResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ApplicantIndividualCompanyPosition'] = ResolversParentTypes['ApplicantIndividualCompanyPosition'],
> = {
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantIndividualCompanyPositionPaginatorResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ApplicantIndividualCompanyPositionPaginator'] = ResolversParentTypes['ApplicantIndividualCompanyPositionPaginator'],
> = {
  data?: Resolver<ReadonlyArray<ResolversTypes['ApplicantIndividualCompanyPosition']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantIndividualCompanyRelationResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ApplicantIndividualCompanyRelation'] = ResolversParentTypes['ApplicantIndividualCompanyRelation'],
> = {
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantIndividualCompanyRelationPaginatorResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ApplicantIndividualCompanyRelationPaginator'] = ResolversParentTypes['ApplicantIndividualCompanyRelationPaginator'],
> = {
  data?: Resolver<ReadonlyArray<ResolversTypes['ApplicantIndividualCompanyRelation']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantIndividualLabelResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ApplicantIndividualLabel'] = ResolversParentTypes['ApplicantIndividualLabel'],
> = {
  hex_color_code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  is_active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantIndividualLabelPaginatorResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ApplicantIndividualLabelPaginator'] = ResolversParentTypes['ApplicantIndividualLabelPaginator'],
> = {
  data?: Resolver<ReadonlyArray<ResolversTypes['ApplicantIndividualLabel']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantIndividualModulesResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ApplicantIndividualModules'] = ResolversParentTypes['ApplicantIndividualModules'],
> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  is_active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantIndividualNotesResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ApplicantIndividualNotes'] = ResolversParentTypes['ApplicantIndividualNotes'],
> = {
  applicant?: Resolver<Maybe<ResolversTypes['ApplicantIndividual']>, ParentType, ContextType>;
  author?: Resolver<Maybe<ResolversTypes['Members']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  note?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantIndividualNotesPaginatorResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ApplicantIndividualNotesPaginator'] = ResolversParentTypes['ApplicantIndividualNotesPaginator'],
> = {
  data?: Resolver<ReadonlyArray<ResolversTypes['ApplicantIndividualNotes']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantIndividualPaginatorResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ApplicantIndividualPaginator'] = ResolversParentTypes['ApplicantIndividualPaginator'],
> = {
  data?: Resolver<ReadonlyArray<ResolversTypes['ApplicantIndividual']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantKycLevelResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ApplicantKycLevel'] = ResolversParentTypes['ApplicantKycLevel'],
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantKycLevelPaginatorResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ApplicantKycLevelPaginator'] = ResolversParentTypes['ApplicantKycLevelPaginator'],
> = {
  data?: Resolver<ReadonlyArray<ResolversTypes['ApplicantKycLevel']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantLinkedCompanyResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ApplicantLinkedCompany'] = ResolversParentTypes['ApplicantLinkedCompany'],
> = {
  company?: Resolver<Maybe<ResolversTypes['ApplicantCompany']>, ParentType, ContextType>;
  company_position?: Resolver<Maybe<ResolversTypes['ApplicantIndividualCompanyPosition']>, ParentType, ContextType>;
  company_relation?: Resolver<Maybe<ResolversTypes['ApplicantIndividualCompanyRelation']>, ParentType, ContextType>;
  percentage_owned?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantModulesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ApplicantModules'] = ResolversParentTypes['ApplicantModules'],
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantModulesPaginatorResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ApplicantModulesPaginator'] = ResolversParentTypes['ApplicantModulesPaginator'],
> = {
  data?: Resolver<ReadonlyArray<ResolversTypes['ApplicantModules']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantProfileResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ApplicantProfile'] = ResolversParentTypes['ApplicantProfile'],
> = {
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  applicant_state?: Resolver<Maybe<ResolversTypes['ApplicantState']>, ParentType, ContextType>;
  backup_codes?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  birth_at?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  birth_city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  birth_country?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType>;
  birth_state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  citizenship_country?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  companies?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['ApplicantCompany']>>>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  contacts_additional_fields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['EMAIL']>, ParentType, ContextType>;
  first_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  google2fa_secret?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  group?: Resolver<Maybe<ResolversTypes['GroupRole']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  ip_addresses?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['ClientIpAddress']>>>, ParentType, ContextType>;
  is_verification_phone?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  labels?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['ApplicantIndividualLabel']>>>, ParentType, ContextType>;
  language?: Resolver<Maybe<ResolversTypes['Languages']>, ParentType, ContextType>;
  last_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  manager?: Resolver<Maybe<ResolversTypes['Members']>, ParentType, ContextType>;
  middle_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  modules?: Resolver<
    Maybe<ReadonlyArray<Maybe<ResolversTypes['ApplicantIndividualModules']>>>,
    ParentType,
    ContextType
  >;
  nationality?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  notes?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['ApplicantIndividualNotes']>>>, ParentType, ContextType>;
  notify_device_email?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  personal_additional_fields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photo?: Resolver<Maybe<ResolversTypes['Files']>, ParentType, ContextType>;
  profile_additional_fields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  risk_level?: Resolver<Maybe<ResolversTypes['ApplicantRiskLevel']>, ParentType, ContextType>;
  security_pin?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sex?: Resolver<Maybe<ResolversTypes['Sex']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state_reason?: Resolver<Maybe<ResolversTypes['ApplicantStateReason']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['ApplicantStatus']>, ParentType, ContextType>;
  two_factor_auth?: Resolver<Maybe<ResolversTypes['TwoFactorAuthSettings']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zip?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantRequisitesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ApplicantRequisites'] = ResolversParentTypes['ApplicantRequisites'],
> = {
  account_number?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  bank?: Resolver<Maybe<ResolversTypes['PaymentBank']>, ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['Currencies']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['ApplicantProfile']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantRiskLevelResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ApplicantRiskLevel'] = ResolversParentTypes['ApplicantRiskLevel'],
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantRiskLevelHistoryResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ApplicantRiskLevelHistory'] = ResolversParentTypes['ApplicantRiskLevelHistory'],
> = {
  applicant?: Resolver<Maybe<ResolversTypes['ApplicantIndividual']>, ParentType, ContextType>;
  comment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  manager?: Resolver<Maybe<ResolversTypes['Members']>, ParentType, ContextType>;
  risk_level?: Resolver<Maybe<ResolversTypes['ApplicantRiskLevel']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantRiskLevelHistoryPaginatorResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ApplicantRiskLevelHistoryPaginator'] = ResolversParentTypes['ApplicantRiskLevelHistoryPaginator'],
> = {
  data?: Resolver<ReadonlyArray<ResolversTypes['ApplicantRiskLevelHistory']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantRiskLevelPaginatorResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ApplicantRiskLevelPaginator'] = ResolversParentTypes['ApplicantRiskLevelPaginator'],
> = {
  data?: Resolver<ReadonlyArray<ResolversTypes['ApplicantRiskLevel']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantSettingsProfileResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ApplicantSettingsProfile'] = ResolversParentTypes['ApplicantSettingsProfile'],
> = {
  email?: Resolver<Maybe<ResolversTypes['EMAIL']>, ParentType, ContextType>;
  email_confirm_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  first_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  last_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  middle_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantStateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ApplicantState'] = ResolversParentTypes['ApplicantState'],
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantStatePaginatorResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ApplicantStatePaginator'] = ResolversParentTypes['ApplicantStatePaginator'],
> = {
  data?: Resolver<ReadonlyArray<ResolversTypes['ApplicantState']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantStateReasonResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ApplicantStateReason'] = ResolversParentTypes['ApplicantStateReason'],
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantStateReasonPaginatorResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ApplicantStateReasonPaginator'] = ResolversParentTypes['ApplicantStateReasonPaginator'],
> = {
  data?: Resolver<ReadonlyArray<ResolversTypes['ApplicantStateReason']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantStatusResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ApplicantStatus'] = ResolversParentTypes['ApplicantStatus'],
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantStatusPaginatorResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ApplicantStatusPaginator'] = ResolversParentTypes['ApplicantStatusPaginator'],
> = {
  data?: Resolver<ReadonlyArray<ResolversTypes['ApplicantStatus']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantVerificationStatusResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ApplicantVerificationStatus'] = ResolversParentTypes['ApplicantVerificationStatus'],
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthenticationLogResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AuthenticationLog'] = ResolversParentTypes['AuthenticationLog'],
> = {
  browser?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  browser_version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  client_type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  company?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['DateTimeUtc'], ParentType, ContextType>;
  device_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  domain?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  expired_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  group?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  info?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ip?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  member?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  model?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  platform?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  provider?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthenticationLogsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AuthenticationLogs'] = ResolversParentTypes['AuthenticationLogs'],
> = {
  data?: Resolver<Maybe<ReadonlyArray<ResolversTypes['AuthenticationLog']>>, ParentType, ContextType>;
  paginatorInfo?: Resolver<Maybe<ResolversTypes['PaginatorInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BankCorrespondentResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['BankCorrespondent'] = ResolversParentTypes['BankCorrespondent'],
> = {
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  bank_account?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  bank_code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  currencies?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['Currencies']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  is_active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  regions?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['Region']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BankCorrespondentPaginatorResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['BankCorrespondentPaginator'] = ResolversParentTypes['BankCorrespondentPaginator'],
> = {
  data?: Resolver<ReadonlyArray<ResolversTypes['BankCorrespondent']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BusinessActivityResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['BusinessActivity'] = ResolversParentTypes['BusinessActivity'],
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BusinessActivityPaginatorResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['BusinessActivityPaginator'] = ResolversParentTypes['BusinessActivityPaginator'],
> = {
  data?: Resolver<ReadonlyArray<ResolversTypes['BusinessActivity']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClientResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Client'] = ResolversParentTypes['Client'],
> = {
  __resolveType: TypeResolveFn<'ApplicantCompany' | 'ApplicantIndividual', ParentType, ContextType>;
};

export type ClientAccountsDetailsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ClientAccountsDetails'] = ResolversParentTypes['ClientAccountsDetails'],
> = {
  available_balance?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  currency?: Resolver<ResolversTypes['Currencies'], ParentType, ContextType>;
  current_balance?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  max_limit_balance?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  min_limit_balance?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  reserved_balance?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClientIpAddressResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ClientIpAddress'] = ResolversParentTypes['ClientIpAddress'],
> = {
  client_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  client_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  ip_address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClientableResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Clientable'] = ResolversParentTypes['Clientable'],
> = {
  __resolveType: TypeResolveFn<'ApplicantCompany' | 'ApplicantIndividual' | 'Members', ParentType, ContextType>;
};

export type CommissionPriceListResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CommissionPriceList'] = ResolversParentTypes['CommissionPriceList'],
> = {
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  commission_template?: Resolver<Maybe<ResolversTypes['CommissionTemplate']>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  fees?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['PriceListFee']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  owner?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['ApplicantIndividual']>>>, ParentType, ContextType>;
  payment_system?: Resolver<Maybe<ResolversTypes['PaymentSystem']>, ParentType, ContextType>;
  provider?: Resolver<Maybe<ResolversTypes['PaymentProvider']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['Region']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommissionPriceListPaginatorResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['CommissionPriceListPaginator'] = ResolversParentTypes['CommissionPriceListPaginator'],
> = {
  data?: Resolver<ReadonlyArray<ResolversTypes['CommissionPriceList']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommissionTemplateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CommissionTemplate'] = ResolversParentTypes['CommissionTemplate'],
> = {
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  business_activity?: Resolver<
    Maybe<ReadonlyArray<Maybe<ResolversTypes['BusinessActivity']>>>,
    ParentType,
    ContextType
  >;
  commission_template_limits?: Resolver<
    Maybe<ReadonlyArray<Maybe<ResolversTypes['CommissionTemplateLimit']>>>,
    ParentType,
    ContextType
  >;
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  country_id?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>;
  currencies?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['Currencies']>>>, ParentType, ContextType>;
  currency_id?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  is_active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  owner?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['ApplicantIndividual']>>>, ParentType, ContextType>;
  payment_provider?: Resolver<Maybe<ResolversTypes['PaymentProvider']>, ParentType, ContextType>;
  regions?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['Region']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommissionTemplateLimitResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CommissionTemplateLimit'] = ResolversParentTypes['CommissionTemplateLimit'],
> = {
  amount?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  commission_template?: Resolver<ResolversTypes['CommissionTemplate'], ParentType, ContextType>;
  commission_template_limit_action_type?: Resolver<
    ResolversTypes['CommissionTemplateLimitActionType'],
    ParentType,
    ContextType
  >;
  commission_template_limit_period?: Resolver<
    Maybe<ResolversTypes['CommissionTemplateLimitPeriod']>,
    ParentType,
    ContextType
  >;
  commission_template_limit_transfer_direction?: Resolver<
    ResolversTypes['CommissionTemplateLimitTransferDirection'],
    ParentType,
    ContextType
  >;
  commission_template_limit_type?: Resolver<ResolversTypes['CommissionTemplateLimitType'], ParentType, ContextType>;
  currency?: Resolver<ResolversTypes['Currencies'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  payment_system?: Resolver<ResolversTypes['PaymentSystem'], ParentType, ContextType>;
  period_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  region?: Resolver<ResolversTypes['Region'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommissionTemplateLimitActionTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['CommissionTemplateLimitActionType'] = ResolversParentTypes['CommissionTemplateLimitActionType'],
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommissionTemplateLimitActionTypePaginatorResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['CommissionTemplateLimitActionTypePaginator'] = ResolversParentTypes['CommissionTemplateLimitActionTypePaginator'],
> = {
  data?: Resolver<ReadonlyArray<ResolversTypes['CommissionTemplateLimitActionType']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommissionTemplateLimitPaginatorResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['CommissionTemplateLimitPaginator'] = ResolversParentTypes['CommissionTemplateLimitPaginator'],
> = {
  data?: Resolver<ReadonlyArray<ResolversTypes['CommissionTemplateLimit']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommissionTemplateLimitPeriodResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['CommissionTemplateLimitPeriod'] = ResolversParentTypes['CommissionTemplateLimitPeriod'],
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommissionTemplateLimitPeriodPaginatorResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['CommissionTemplateLimitPeriodPaginator'] = ResolversParentTypes['CommissionTemplateLimitPeriodPaginator'],
> = {
  data?: Resolver<ReadonlyArray<ResolversTypes['CommissionTemplateLimitPeriod']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommissionTemplateLimitTransferDirectionResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['CommissionTemplateLimitTransferDirection'] = ResolversParentTypes['CommissionTemplateLimitTransferDirection'],
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommissionTemplateLimitTransferDirectionPaginatorResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['CommissionTemplateLimitTransferDirectionPaginator'] = ResolversParentTypes['CommissionTemplateLimitTransferDirectionPaginator'],
> = {
  data?: Resolver<ReadonlyArray<ResolversTypes['CommissionTemplateLimitTransferDirection']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommissionTemplateLimitTypeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['CommissionTemplateLimitType'] = ResolversParentTypes['CommissionTemplateLimitType'],
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommissionTemplateLimitTypePaginatorResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['CommissionTemplateLimitTypePaginator'] = ResolversParentTypes['CommissionTemplateLimitTypePaginator'],
> = {
  data?: Resolver<ReadonlyArray<ResolversTypes['CommissionTemplateLimitType']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommissionTemplatePaginatorResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['CommissionTemplatePaginator'] = ResolversParentTypes['CommissionTemplatePaginator'],
> = {
  data?: Resolver<ReadonlyArray<ResolversTypes['CommissionTemplate']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CompanyResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Company'] = ResolversParentTypes['Company'],
> = {
  additional_fields_basic?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  additional_fields_data?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  additional_fields_info?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  additional_fields_settings?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  backoffice_forgot_password_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  backoffice_login_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  backoffice_support_email?: Resolver<Maybe<ResolversTypes['EMAIL']>, ParentType, ContextType>;
  backoffice_support_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  company_modules?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['CompanyModule']>>>, ParentType, ContextType>;
  company_number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contact_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['DateTimeUtc'], ParentType, ContextType>;
  departments?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['Department']>>>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['EMAIL'], ParentType, ContextType>;
  employees?: Resolver<Maybe<ResolversTypes['Employee']>, ParentType, ContextType>;
  entity_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  exp_date?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  incorporate_date?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  license_number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  logo?: Resolver<Maybe<ResolversTypes['Files']>, ParentType, ContextType>;
  member_verify_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  members?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['Members']>>>, ParentType, ContextType>;
  members_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  positions?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['DepartmentPosition']>>>, ParentType, ContextType>;
  projects?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['Project']>>>, ParentType, ContextType>;
  projects_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  reg_address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reg_number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['State']>, ParentType, ContextType>;
  state_reason?: Resolver<Maybe<ResolversTypes['StateReason']>, ParentType, ContextType>;
  tax_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type_of_industry?: Resolver<Maybe<ResolversTypes['TypeOfIndustry']>, ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['DateTimeUtc'], ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  vv_token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zip?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CompanyModuleResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CompanyModule'] = ResolversParentTypes['CompanyModule'],
> = {
  iban_providers?: Resolver<
    Maybe<ReadonlyArray<Maybe<ResolversTypes['CompanyModuleIbanProvider']>>>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  is_active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  module?: Resolver<Maybe<ResolversTypes['Module']>, ParentType, ContextType>;
  payment_providers?: Resolver<
    Maybe<ReadonlyArray<Maybe<ResolversTypes['CompanyModulePaymentProvider']>>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CompanyModuleIbanProviderResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['CompanyModuleIbanProvider'] = ResolversParentTypes['CompanyModuleIbanProvider'],
> = {
  company_module_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  is_active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  payment_provider_iban?: Resolver<ResolversTypes['PaymentProviderIban'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CompanyModuleIbanProviderPasswordResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['CompanyModuleIbanProviderPassword'] = ResolversParentTypes['CompanyModuleIbanProviderPassword'],
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CompanyModulePaymentProviderResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['CompanyModulePaymentProvider'] = ResolversParentTypes['CompanyModulePaymentProvider'],
> = {
  company_module_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  is_active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  payment_provider?: Resolver<ResolversTypes['PaymentProvider'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CompanyModulePaymentProviderPasswordResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['CompanyModulePaymentProviderPassword'] = ResolversParentTypes['CompanyModulePaymentProviderPassword'],
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CompanyPaginatorResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CompanyPaginator'] = ResolversParentTypes['CompanyPaginator'],
> = {
  data?: Resolver<ReadonlyArray<ResolversTypes['Company']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CountryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Country'] = ResolversParentTypes['Country'],
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  iso?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CountryPaginatorResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CountryPaginator'] = ResolversParentTypes['CountryPaginator'],
> = {
  data?: Resolver<ReadonlyArray<ResolversTypes['Country']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CurrenciesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Currencies'] = ResolversParentTypes['Currencies'],
> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  minor_unit?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CurrenciesPaginatorResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CurrenciesPaginator'] = ResolversParentTypes['CurrenciesPaginator'],
> = {
  data?: Resolver<ReadonlyArray<ResolversTypes['Currencies']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface DateEndScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateEnd'], any> {
  name: 'DateEnd';
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export interface DateTimeUtcScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTimeUtc'], any> {
  name: 'DateTimeUtc';
}

export interface DecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Decimal'], any> {
  name: 'Decimal';
}

export type DepartmentResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Department'] = ResolversParentTypes['Department'],
> = {
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  positions?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['DepartmentPosition']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DepartmentPaginatorResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['DepartmentPaginator'] = ResolversParentTypes['DepartmentPaginator'],
> = {
  data?: Resolver<ReadonlyArray<ResolversTypes['Department']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DepartmentPositionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['DepartmentPosition'] = ResolversParentTypes['DepartmentPosition'],
> = {
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  department?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['Department']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  is_active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DepartmentPositionPaginatorResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['DepartmentPositionPaginator'] = ResolversParentTypes['DepartmentPositionPaginator'],
> = {
  data?: Resolver<ReadonlyArray<ResolversTypes['DepartmentPosition']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DocumentStateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['DocumentState'] = ResolversParentTypes['DocumentState'],
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DocumentTypeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['DocumentType'] = ResolversParentTypes['DocumentType'],
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface EmailScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['EMAIL'], any> {
  name: 'EMAIL';
}

export type EmailNotificationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['EmailNotification'] = ResolversParentTypes['EmailNotification'],
> = {
  clientable?: Resolver<Maybe<ResolversTypes['Clientable']>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  group_role?: Resolver<Maybe<ResolversTypes['GroupRole']>, ParentType, ContextType>;
  group_type?: Resolver<Maybe<ResolversTypes['GroupType']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  recipient_type?: Resolver<Maybe<ResolversTypes['RecipientType']>, ParentType, ContextType>;
  templates?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['EmailTemplate']>>>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['NotifyType']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EmailNotificationPaginatorResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['EmailNotificationPaginator'] = ResolversParentTypes['EmailNotificationPaginator'],
> = {
  data?: Resolver<ReadonlyArray<ResolversTypes['EmailNotification']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EmailSmtpResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['EmailSmtp'] = ResolversParentTypes['EmailSmtp'],
> = {
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  from_email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  from_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  host_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  is_sending_mail?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  member?: Resolver<Maybe<ResolversTypes['Members']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  port?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  replay_to?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  security?: Resolver<Maybe<ResolversTypes['Securities']>, ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EmailTemplateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['EmailTemplate'] = ResolversParentTypes['EmailTemplate'],
> = {
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  layout?: Resolver<Maybe<ResolversTypes['EmailTemplateLayout']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  service_type?: Resolver<ResolversTypes['ServiceType'], ParentType, ContextType>;
  subject?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['ClientType'], ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  use_layout?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EmailTemplateLayoutResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['EmailTemplateLayout'] = ResolversParentTypes['EmailTemplateLayout'],
> = {
  company_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  footer?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  header?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EmailTemplateOnCompanyResponseResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['EmailTemplateOnCompanyResponse'] = ResolversParentTypes['EmailTemplateOnCompanyResponse'],
> = {
  data?: Resolver<ReadonlyArray<ResolversTypes['EmailTemplate']>, ParentType, ContextType>;
  layout?: Resolver<Maybe<ResolversTypes['EmailTemplateLayout']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EmployeeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Employee'] = ResolversParentTypes['Employee'],
> = {
  employees_number?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FeeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Fee'] = ResolversParentTypes['Fee'],
> = {
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  client?: Resolver<Maybe<ResolversTypes['Client']>, ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['DateTimeUtc'], ParentType, ContextType>;
  fee?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  fee_amount?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  fee_pp?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  member?: Resolver<Maybe<ResolversTypes['Members']>, ParentType, ContextType>;
  operation_type?: Resolver<Maybe<ResolversTypes['OperationType']>, ParentType, ContextType>;
  price_list_fee?: Resolver<Maybe<ResolversTypes['PriceListFee']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['PaymentStatus']>, ParentType, ContextType>;
  transfer_outgoing?: Resolver<Maybe<ResolversTypes['TransferOutgoing']>, ParentType, ContextType>;
  transfer_type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FeeItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['FeeItem'] = ResolversParentTypes['FeeItem'],
> = {
  amount_from?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  amount_to?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  fee?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  percent?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FeeModeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['FeeMode'] = ResolversParentTypes['FeeMode'],
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FeePeriodResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['FeePeriod'] = ResolversParentTypes['FeePeriod'],
> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FeeTypeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['FeeType'] = ResolversParentTypes['FeeType'],
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FilesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Files'] = ResolversParentTypes['Files'],
> = {
  author_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  entity_type?: Resolver<ResolversTypes['FileEntityTypeEnum'], ParentType, ContextType>;
  file_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  link?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mime_type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  size?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  storage_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  storage_path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FilesPaginatorResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['FilesPaginator'] = ResolversParentTypes['FilesPaginator'],
> = {
  data?: Resolver<ReadonlyArray<ResolversTypes['Files']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GroupRoleResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GroupRole'] = ResolversParentTypes['GroupRole'],
> = {
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  group_type?: Resolver<Maybe<ResolversTypes['GroupType']>, ParentType, ContextType>;
  group_type_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  is_active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  module?: Resolver<Maybe<ResolversTypes['Module']>, ParentType, ContextType>;
  module_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  providers?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['GroupRoleProvider']>>>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['Role']>, ParentType, ContextType>;
  role_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GroupRolePaginatorResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GroupRolePaginator'] = ResolversParentTypes['GroupRolePaginator'],
> = {
  data?: Resolver<ReadonlyArray<ResolversTypes['GroupRole']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GroupRoleProviderResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GroupRoleProvider'] = ResolversParentTypes['GroupRoleProvider'],
> = {
  commission_template?: Resolver<Maybe<ResolversTypes['CommissionTemplate']>, ParentType, ContextType>;
  group_role_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  is_default?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  payment_provider?: Resolver<Maybe<ResolversTypes['PaymentProvider']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GroupRoleViewResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GroupRoleView'] = ResolversParentTypes['GroupRoleView'],
> = {
  commission_template_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  commission_template_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  group_type?: Resolver<Maybe<ResolversTypes['GroupType']>, ParentType, ContextType>;
  group_type_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  is_active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  module?: Resolver<Maybe<ResolversTypes['Module']>, ParentType, ContextType>;
  module_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  payment_provider_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  payment_provider_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['Role']>, ParentType, ContextType>;
  role_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GroupRoleViewPaginatorResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GroupRoleViewPaginator'] = ResolversParentTypes['GroupRoleViewPaginator'],
> = {
  data?: Resolver<ReadonlyArray<ResolversTypes['GroupRoleView']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GroupTypeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GroupType'] = ResolversParentTypes['GroupType'],
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['GroupsEntities'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GroupTypePaginatorResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GroupTypePaginator'] = ResolversParentTypes['GroupTypePaginator'],
> = {
  data?: Resolver<ReadonlyArray<ResolversTypes['GroupType']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GroupsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Groups'] = ResolversParentTypes['Groups'],
> = {
  groups?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['GroupRole']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['GroupsEntities'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type KycTimelineResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['KycTimeline'] = ResolversParentTypes['KycTimeline'],
> = {
  action?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  action_new_value?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  action_old_value?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  action_type?: Resolver<ResolversTypes['KycTimelineActionType'], ParentType, ContextType>;
  applicant?: Resolver<Maybe<ResolversTypes['Client']>, ParentType, ContextType>;
  applicant_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  applicant_type?: Resolver<ResolversTypes['ApplicantType'], ParentType, ContextType>;
  browser?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['DateTimeUtc'], ParentType, ContextType>;
  creator?: Resolver<Maybe<ResolversTypes['Members']>, ParentType, ContextType>;
  document?: Resolver<Maybe<ResolversTypes['ApplicantDocument']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  ip?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  os?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tag?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KycTimelinesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['KycTimelines'] = ResolversParentTypes['KycTimelines'],
> = {
  data?: Resolver<Maybe<ReadonlyArray<ResolversTypes['KycTimeline']>>, ParentType, ContextType>;
  paginatorInfo?: Resolver<Maybe<ResolversTypes['PaginatorInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LanguagesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Languages'] = ResolversParentTypes['Languages'],
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  iso?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LanguagesPaginatorResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['LanguagesPaginator'] = ResolversParentTypes['LanguagesPaginator'],
> = {
  data?: Resolver<ReadonlyArray<ResolversTypes['Languages']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberAccessLimitationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['MemberAccessLimitation'] = ResolversParentTypes['MemberAccessLimitation'],
> = {
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  group?: Resolver<Maybe<ResolversTypes['GroupType']>, ParentType, ContextType>;
  group_roles?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['GroupRole']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  member?: Resolver<Maybe<ResolversTypes['Members']>, ParentType, ContextType>;
  module?: Resolver<Maybe<ResolversTypes['Module']>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType>;
  provider?: Resolver<Maybe<ResolversTypes['PaymentProvider']>, ParentType, ContextType>;
  see_own_applicants?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberAccessLimitationPaginatorResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['MemberAccessLimitationPaginator'] = ResolversParentTypes['MemberAccessLimitationPaginator'],
> = {
  data?: Resolver<ReadonlyArray<ResolversTypes['MemberAccessLimitation']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberProfileResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['MemberProfile'] = ResolversParentTypes['MemberProfile'],
> = {
  access_groups?: Resolver<
    Maybe<ReadonlyArray<Maybe<ResolversTypes['MemberAccessLimitation']>>>,
    ParentType,
    ContextType
  >;
  additional_fields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  additional_info_fields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  backup_codes?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  company?: Resolver<ResolversTypes['Company'], ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType>;
  department?: Resolver<Maybe<ResolversTypes['Department']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['EMAIL']>, ParentType, ContextType>;
  first_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  google2fa_secret?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  group?: Resolver<Maybe<ResolversTypes['GroupRole']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  ip_addresses?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['ClientIpAddress']>>>, ParentType, ContextType>;
  is_active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  is_show_owner_applicants?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  is_sign_transaction?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  language?: Resolver<Maybe<ResolversTypes['Languages']>, ParentType, ContextType>;
  last_login_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  last_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['DepartmentPosition']>, ParentType, ContextType>;
  security_pin?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sex?: Resolver<Maybe<ResolversTypes['Sex']>, ParentType, ContextType>;
  two_factor_auth_setting_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  two_factor_auth_settings?: Resolver<Maybe<ResolversTypes['TwoFactorAuthSettings']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberStatusResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['MemberStatus'] = ResolversParentTypes['MemberStatus'],
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MembersResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Members'] = ResolversParentTypes['Members'],
> = {
  access_groups?: Resolver<
    Maybe<ReadonlyArray<Maybe<ResolversTypes['MemberAccessLimitation']>>>,
    ParentType,
    ContextType
  >;
  additional_fields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  additional_info_fields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  backup_codes?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  department?: Resolver<Maybe<ResolversTypes['Department']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['EMAIL']>, ParentType, ContextType>;
  email_verification?: Resolver<Maybe<ResolversTypes['EmailVerification']>, ParentType, ContextType>;
  first_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  google2fa_secret?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  group?: Resolver<Maybe<ResolversTypes['GroupRole']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  ip_addresses?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['ClientIpAddress']>>>, ParentType, ContextType>;
  is_show_owner_applicants?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  is_sign_transaction?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  job_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  language?: Resolver<Maybe<ResolversTypes['Languages']>, ParentType, ContextType>;
  last_login_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  last_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  member_status?: Resolver<Maybe<ResolversTypes['MemberStatus']>, ParentType, ContextType>;
  photo?: Resolver<Maybe<ResolversTypes['Files']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['DepartmentPosition']>, ParentType, ContextType>;
  security_pin?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sex?: Resolver<Maybe<ResolversTypes['Sex']>, ParentType, ContextType>;
  two_factor_auth_setting_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  two_factor_auth_settings?: Resolver<Maybe<ResolversTypes['TwoFactorAuthSettings']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MembersPaginatorResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['MembersPaginator'] = ResolversParentTypes['MembersPaginator'],
> = {
  data?: Resolver<ReadonlyArray<ResolversTypes['Members']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface MixedScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Mixed'], any> {
  name: 'Mixed';
}

export type ModuleResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Module'] = ResolversParentTypes['Module'],
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation'],
> = {
  addCompanyModule?: Resolver<
    Maybe<ResolversTypes['Company']>,
    ParentType,
    ContextType,
    RequireFields<MutationAddCompanyModuleArgs, 'company_id'>
  >;
  attachApplicantCompanyLabel?: Resolver<
    Maybe<ResolversTypes['ApplicantCompany']>,
    ParentType,
    ContextType,
    RequireFields<MutationAttachApplicantCompanyLabelArgs, 'applicant_company_id'>
  >;
  attachApplicantDocumentTag?: Resolver<
    Maybe<ResolversTypes['ApplicantDocument']>,
    ParentType,
    ContextType,
    RequireFields<MutationAttachApplicantDocumentTagArgs, 'applicant_document_id' | 'applicant_document_tag_id'>
  >;
  attachApplicantIndividualLabel?: Resolver<
    Maybe<ResolversTypes['ApplicantIndividual']>,
    ParentType,
    ContextType,
    RequireFields<MutationAttachApplicantIndividualLabelArgs, 'applicant_individual_id'>
  >;
  cancelTransferOutgoingFee?: Resolver<
    Maybe<ResolversTypes['TransferOutgoing']>,
    ParentType,
    ContextType,
    RequireFields<MutationCancelTransferOutgoingFeeArgs, 'id'>
  >;
  createAccount?: Resolver<
    ReadonlyArray<ResolversTypes['Account']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateAccountArgs, 'input'>
  >;
  createAccountLimit?: Resolver<
    Maybe<ResolversTypes['AccountLimit']>,
    ParentType,
    ContextType,
    RequireFields<
      MutationCreateAccountLimitArgs,
      | 'account_id'
      | 'amount'
      | 'commission_template_limit_action_type_id'
      | 'commission_template_limit_period_id'
      | 'commission_template_limit_transfer_direction_id'
      | 'commission_template_limit_type_id'
    >
  >;
  createApplicant?: Resolver<
    Maybe<ResolversTypes['ApplicantSettingsProfile']>,
    ParentType,
    ContextType,
    RequireFields<
      MutationCreateApplicantArgs,
      'client_type' | 'email' | 'first_name' | 'last_name' | 'password' | 'password_confirmation' | 'phone'
    >
  >;
  createApplicantBankingAccess?: Resolver<
    Maybe<ResolversTypes['ApplicantBankingAccess']>,
    ParentType,
    ContextType,
    RequireFields<
      MutationCreateApplicantBankingAccessArgs,
      | 'applicant_company_id'
      | 'applicant_individual_id'
      | 'contact_administrator'
      | 'daily_limit'
      | 'monthly_limit'
      | 'operation_limit'
      | 'role_id'
    >
  >;
  createApplicantCompany?: Resolver<
    Maybe<ResolversTypes['ApplicantCompany']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateApplicantCompanyArgs, 'company_id' | 'email' | 'name' | 'project_id'>
  >;
  createApplicantCompanyBusinessType?: Resolver<
    Maybe<ResolversTypes['ApplicantCompanyBusinessType']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateApplicantCompanyBusinessTypeArgs, 'name'>
  >;
  createApplicantCompanyLabel?: Resolver<
    Maybe<ResolversTypes['ApplicantCompanyLabel']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateApplicantCompanyLabelArgs, 'hex_color_code' | 'name'>
  >;
  createApplicantCompanyModule?: Resolver<
    Maybe<ResolversTypes['ApplicantCompany']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateApplicantCompanyModuleArgs, 'applicant_company_id'>
  >;
  createApplicantCompanyNote?: Resolver<
    Maybe<ResolversTypes['ApplicantCompanyNotes']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateApplicantCompanyNoteArgs, 'applicant_company_id' | 'member_id' | 'note'>
  >;
  createApplicantCompanyRiskLevelHistory?: Resolver<
    Maybe<ResolversTypes['ApplicantCompanyRiskLevelHistory']>,
    ParentType,
    ContextType,
    RequireFields<
      MutationCreateApplicantCompanyRiskLevelHistoryArgs,
      'applicant_company_id' | 'comment' | 'risk_level_id'
    >
  >;
  createApplicantDocument?: Resolver<
    Maybe<ResolversTypes['ApplicantDocument']>,
    ParentType,
    ContextType,
    RequireFields<
      MutationCreateApplicantDocumentArgs,
      'applicant_id' | 'applicant_type' | 'company_id' | 'document_type_id' | 'file_id'
    >
  >;
  createApplicantDocumentInternalNote?: Resolver<
    Maybe<ResolversTypes['ApplicantDocumentInternalNote']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateApplicantDocumentInternalNoteArgs, 'applicant_document_id' | 'note'>
  >;
  createApplicantDocumentRejectDetail?: Resolver<
    Maybe<ResolversTypes['ApplicantDocumentRejectDetail']>,
    ParentType,
    ContextType,
    RequireFields<
      MutationCreateApplicantDocumentRejectDetailArgs,
      'applicant_document_id' | 'applicant_document_tag_id'
    >
  >;
  createApplicantDocumentTag?: Resolver<
    Maybe<ResolversTypes['ApplicantDocumentTag']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateApplicantDocumentTagArgs, 'category_id' | 'name'>
  >;
  createApplicantDocumentTagCategory?: Resolver<
    Maybe<ResolversTypes['ApplicantDocumentTagCategory']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateApplicantDocumentTagCategoryArgs, 'name'>
  >;
  createApplicantIndividual?: Resolver<
    Maybe<ResolversTypes['ApplicantIndividual']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateApplicantIndividualArgs, 'company_id' | 'email' | 'first_name' | 'last_name' | 'phone'>
  >;
  createApplicantIndividualCompany?: Resolver<
    Maybe<ResolversTypes['ApplicantIndividualCompany']>,
    ParentType,
    ContextType,
    RequireFields<
      MutationCreateApplicantIndividualCompanyArgs,
      | 'applicant_company_id'
      | 'applicant_id'
      | 'applicant_individual_company_position_id'
      | 'applicant_individual_company_relation_id'
    >
  >;
  createApplicantIndividualCompanyPosition?: Resolver<
    Maybe<ResolversTypes['ApplicantIndividualCompanyPosition']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateApplicantIndividualCompanyPositionArgs, 'company_id' | 'name'>
  >;
  createApplicantIndividualCompanyRelation?: Resolver<
    Maybe<ResolversTypes['ApplicantIndividualCompanyRelation']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateApplicantIndividualCompanyRelationArgs, 'company_id' | 'name'>
  >;
  createApplicantIndividualLabel?: Resolver<
    Maybe<ResolversTypes['ApplicantIndividualLabel']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateApplicantIndividualLabelArgs, 'hex_color_code' | 'name'>
  >;
  createApplicantIndividualModule?: Resolver<
    Maybe<ResolversTypes['ApplicantIndividual']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateApplicantIndividualModuleArgs, 'applicant_individual_id'>
  >;
  createApplicantIndividualNote?: Resolver<
    Maybe<ResolversTypes['ApplicantIndividualNotes']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateApplicantIndividualNoteArgs, 'applicant_individual_id' | 'member_id' | 'note'>
  >;
  createApplicantModule?: Resolver<
    Maybe<ResolversTypes['ApplicantModules']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateApplicantModuleArgs, 'name'>
  >;
  createApplicantRiskLevelHistory?: Resolver<
    Maybe<ResolversTypes['ApplicantRiskLevelHistory']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateApplicantRiskLevelHistoryArgs, 'applicant_id' | 'comment' | 'risk_level_id'>
  >;
  createApplicantStateReason?: Resolver<
    Maybe<ResolversTypes['ApplicantStateReason']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateApplicantStateReasonArgs, 'name'>
  >;
  createBankCorrespondent?: Resolver<
    Maybe<ResolversTypes['BankCorrespondent']>,
    ParentType,
    ContextType,
    RequireFields<
      MutationCreateBankCorrespondentArgs,
      | 'address'
      | 'bank_account'
      | 'bank_code'
      | 'currency_id'
      | 'is_active'
      | 'name'
      | 'payment_system_id'
      | 'region_id'
    >
  >;
  createBusinessActivity?: Resolver<
    Maybe<ResolversTypes['BusinessActivity']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateBusinessActivityArgs, 'name'>
  >;
  createCommissionPriceList?: Resolver<
    Maybe<ResolversTypes['CommissionPriceList']>,
    ParentType,
    ContextType,
    RequireFields<
      MutationCreateCommissionPriceListArgs,
      'commission_template_id' | 'company_id' | 'name' | 'payment_system_id' | 'provider_id' | 'region_id'
    >
  >;
  createCommissionTemplate?: Resolver<
    Maybe<ResolversTypes['CommissionTemplate']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateCommissionTemplateArgs, 'input'>
  >;
  createCommissionTemplateLimit?: Resolver<
    Maybe<ResolversTypes['CommissionTemplateLimit']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateCommissionTemplateLimitArgs, 'input'>
  >;
  createCompany?: Resolver<
    Maybe<ResolversTypes['Company']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateCompanyArgs, 'country_id' | 'email' | 'name' | 'url'>
  >;
  createCompanyModuleIbanProvider?: Resolver<
    Maybe<ResolversTypes['CompanyModuleIbanProvider']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateCompanyModuleIbanProviderArgs, 'input'>
  >;
  createCompanyModulePaymentProvider?: Resolver<
    Maybe<ResolversTypes['CompanyModulePaymentProvider']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateCompanyModulePaymentProviderArgs, 'input'>
  >;
  createDepartment?: Resolver<
    Maybe<ResolversTypes['Department']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateDepartmentArgs, 'company_id' | 'name'>
  >;
  createDepartmentPosition?: Resolver<
    Maybe<ResolversTypes['DepartmentPosition']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateDepartmentPositionArgs, 'company_id' | 'name'>
  >;
  createDocumentType?: Resolver<
    Maybe<ResolversTypes['DocumentType']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateDocumentTypeArgs, 'name'>
  >;
  createEmailNotification?: Resolver<
    Maybe<ResolversTypes['EmailNotification']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateEmailNotificationArgs, 'company_id' | 'group_role_id' | 'group_type_id' | 'templates'>
  >;
  createEmailSmtp?: Resolver<
    Maybe<ResolversTypes['EmailSmtp']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateEmailSmtpArgs, 'company_id' | 'host_name' | 'name' | 'password' | 'port' | 'username'>
  >;
  createEmailTemplate?: Resolver<
    Maybe<ResolversTypes['EmailTemplateOnCompanyResponse']>,
    ParentType,
    ContextType,
    RequireFields<
      MutationCreateEmailTemplateArgs,
      'company_id' | 'content' | 'name' | 'service_type' | 'subject' | 'type' | 'use_layout'
    >
  >;
  createEmailTemplateLayout?: Resolver<
    Maybe<ResolversTypes['EmailTemplateLayout']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateEmailTemplateLayoutArgs, 'company_id' | 'footer' | 'header'>
  >;
  createGroupSettings?: Resolver<
    Maybe<ResolversTypes['GroupRole']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateGroupSettingsArgs, 'group_type_id' | 'name'>
  >;
  createMember?: Resolver<
    Maybe<ResolversTypes['Members']>,
    ParentType,
    ContextType,
    RequireFields<
      MutationCreateMemberArgs,
      'company_id' | 'email' | 'first_name' | 'group_id' | 'last_name' | 'two_factor_auth_setting_id'
    >
  >;
  createMemberAccessLimitation?: Resolver<
    Maybe<ResolversTypes['MemberAccessLimitation']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateMemberAccessLimitationArgs, 'input'>
  >;
  createModule?: Resolver<
    Maybe<ResolversTypes['Module']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateModuleArgs, 'name'>
  >;
  createPayment?: Resolver<
    Maybe<ResolversTypes['Payments']>,
    ParentType,
    ContextType,
    RequireFields<
      MutationCreatePaymentArgs,
      | 'account_id'
      | 'amount'
      | 'beneficiary_address'
      | 'beneficiary_city'
      | 'beneficiary_country_id'
      | 'beneficiary_name'
      | 'beneficiary_state'
      | 'beneficiary_zip'
      | 'company_id'
      | 'currency_id'
      | 'fee_type_id'
      | 'operation_type_id'
      | 'payment_provider_id'
      | 'price_list_fees_id'
      | 'recipient_account'
      | 'recipient_bank_address'
      | 'recipient_bank_country_id'
      | 'recipient_bank_name'
      | 'recipient_bank_swift'
      | 'respondent_fees_id'
      | 'urgency_id'
    >
  >;
  createPaymentBank?: Resolver<
    Maybe<ResolversTypes['PaymentBank']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreatePaymentBankArgs, 'input'>
  >;
  createPaymentProvider?: Resolver<
    Maybe<ResolversTypes['PaymentProvider']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreatePaymentProviderArgs, 'input'>
  >;
  createPaymentProviderIban?: Resolver<
    Maybe<ResolversTypes['PaymentProviderIban']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreatePaymentProviderIbanArgs, 'input'>
  >;
  createPaymentSystem?: Resolver<
    Maybe<ResolversTypes['PaymentSystem']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreatePaymentSystemArgs, 'input'>
  >;
  createPriceListFees?: Resolver<
    Maybe<ResolversTypes['PriceListFee']>,
    ParentType,
    ContextType,
    Partial<MutationCreatePriceListFeesArgs>
  >;
  createProject?: Resolver<
    Maybe<ResolversTypes['Project']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateProjectArgs, 'input'>
  >;
  createRegion?: Resolver<
    Maybe<ResolversTypes['Region']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateRegionArgs, 'input'>
  >;
  createRole?: Resolver<
    Maybe<ResolversTypes['Role']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateRoleArgs, 'name'>
  >;
  createTicket?: Resolver<
    Maybe<ResolversTypes['Ticket']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateTicketArgs, 'client_id' | 'member_id' | 'message' | 'title'>
  >;
  createTicketComment?: Resolver<
    Maybe<ResolversTypes['TicketComments']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateTicketCommentArgs, 'client_id' | 'message' | 'ticket_id'>
  >;
  createTransferOutgoing?: Resolver<
    Maybe<ResolversTypes['TransferOutgoing']>,
    ParentType,
    ContextType,
    RequireFields<
      MutationCreateTransferOutgoingArgs,
      | 'account_id'
      | 'amount'
      | 'company_id'
      | 'currency_id'
      | 'group_id'
      | 'group_type_id'
      | 'payment_provider_id'
      | 'payment_system_id'
      | 'price_list_fee_id'
      | 'price_list_id'
      | 'project_id'
      | 'recipient_bank_country_id'
      | 'requested_by_id'
    >
  >;
  createTransferOutgoingFee?: Resolver<
    Maybe<ResolversTypes['TransferOutgoing']>,
    ParentType,
    ContextType,
    RequireFields<
      MutationCreateTransferOutgoingFeeArgs,
      | 'account_id'
      | 'amount'
      | 'company_id'
      | 'currency_id'
      | 'group_id'
      | 'group_type_id'
      | 'operation_type_id'
      | 'payment_provider_id'
      | 'payment_system_id'
      | 'price_list_fee_id'
      | 'price_list_id'
      | 'project_id'
      | 'recipient_bank_country_id'
      | 'requested_by_id'
    >
  >;
  deleteAccount?: Resolver<
    Maybe<ResolversTypes['Account']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteAccountArgs, 'id'>
  >;
  deleteAccountLimit?: Resolver<
    Maybe<ResolversTypes['AccountLimit']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteAccountLimitArgs, 'id'>
  >;
  deleteApplicantBankingAccess?: Resolver<
    Maybe<ResolversTypes['ApplicantBankingAccess']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteApplicantBankingAccessArgs, 'id'>
  >;
  deleteApplicantBankingMember?: Resolver<
    Maybe<ResolversTypes['ApplicantBankingAccess']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteApplicantBankingMemberArgs, 'id'>
  >;
  deleteApplicantCompany?: Resolver<
    Maybe<ResolversTypes['ApplicantCompany']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteApplicantCompanyArgs, 'id'>
  >;
  deleteApplicantCompanyLabel?: Resolver<
    Maybe<ResolversTypes['ApplicantCompanyLabel']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteApplicantCompanyLabelArgs, 'id'>
  >;
  deleteApplicantCompanyModule?: Resolver<
    Maybe<ResolversTypes['ApplicantCompany']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteApplicantCompanyModuleArgs, 'applicant_company_id'>
  >;
  deleteApplicantCompanyNote?: Resolver<
    Maybe<ResolversTypes['ApplicantCompanyNotes']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteApplicantCompanyNoteArgs, 'id'>
  >;
  deleteApplicantCompanyRiskLevelHistory?: Resolver<
    Maybe<ResolversTypes['ApplicantCompanyRiskLevelHistory']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteApplicantCompanyRiskLevelHistoryArgs, 'id'>
  >;
  deleteApplicantDevice?: Resolver<
    Maybe<ResolversTypes['ApplicantDevice']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteApplicantDeviceArgs, 'id'>
  >;
  deleteApplicantDocument?: Resolver<
    Maybe<ResolversTypes['ApplicantDocument']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteApplicantDocumentArgs, 'id'>
  >;
  deleteApplicantDocumentInternalNote?: Resolver<
    Maybe<ResolversTypes['ApplicantDocumentInternalNote']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteApplicantDocumentInternalNoteArgs, 'id'>
  >;
  deleteApplicantDocumentRejectDetail?: Resolver<
    Maybe<ResolversTypes['ApplicantDocumentRejectDetail']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteApplicantDocumentRejectDetailArgs, 'id'>
  >;
  deleteApplicantDocumentTag?: Resolver<
    Maybe<ResolversTypes['ApplicantDocumentTag']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteApplicantDocumentTagArgs, 'id'>
  >;
  deleteApplicantDocumentTagCategory?: Resolver<
    Maybe<ResolversTypes['ApplicantDocumentTagCategory']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteApplicantDocumentTagCategoryArgs, 'id'>
  >;
  deleteApplicantIndividual?: Resolver<
    Maybe<ResolversTypes['ApplicantIndividual']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteApplicantIndividualArgs, 'id'>
  >;
  deleteApplicantIndividualCompany?: Resolver<
    Maybe<ResolversTypes['ApplicantIndividualCompany']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteApplicantIndividualCompanyArgs, 'applicant_company_id' | 'applicant_id'>
  >;
  deleteApplicantIndividualCompanyPosition?: Resolver<
    Maybe<ResolversTypes['ApplicantIndividualCompanyPosition']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteApplicantIndividualCompanyPositionArgs, 'id'>
  >;
  deleteApplicantIndividualCompanyRelation?: Resolver<
    Maybe<ResolversTypes['ApplicantIndividualCompanyRelation']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteApplicantIndividualCompanyRelationArgs, 'id'>
  >;
  deleteApplicantIndividualLabel?: Resolver<
    Maybe<ResolversTypes['ApplicantIndividualLabel']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteApplicantIndividualLabelArgs, 'id'>
  >;
  deleteApplicantIndividualModule?: Resolver<
    Maybe<ResolversTypes['ApplicantIndividual']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteApplicantIndividualModuleArgs, 'applicant_individual_id'>
  >;
  deleteApplicantIndividualNote?: Resolver<
    Maybe<ResolversTypes['ApplicantIndividualNotes']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteApplicantIndividualNoteArgs, 'id'>
  >;
  deleteApplicantRiskLevelHistory?: Resolver<
    Maybe<ResolversTypes['ApplicantRiskLevelHistory']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteApplicantRiskLevelHistoryArgs, 'id'>
  >;
  deleteApplicantStateReason?: Resolver<
    Maybe<ResolversTypes['ApplicantStateReason']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteApplicantStateReasonArgs, 'id'>
  >;
  deleteBankCorrespondent?: Resolver<
    Maybe<ResolversTypes['BankCorrespondent']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteBankCorrespondentArgs, 'id'>
  >;
  deleteCommissionPriceList?: Resolver<
    Maybe<ResolversTypes['CommissionPriceList']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteCommissionPriceListArgs, 'id'>
  >;
  deleteCommissionTemplate?: Resolver<
    Maybe<ResolversTypes['CommissionTemplate']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteCommissionTemplateArgs, 'id'>
  >;
  deleteCommissionTemplateLimit?: Resolver<
    Maybe<ResolversTypes['CommissionTemplateLimit']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteCommissionTemplateLimitArgs, 'id'>
  >;
  deleteCompany?: Resolver<
    Maybe<ResolversTypes['Company']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteCompanyArgs, 'id'>
  >;
  deleteCompanyModule?: Resolver<
    Maybe<ResolversTypes['Company']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteCompanyModuleArgs, 'company_id'>
  >;
  deleteCompanyModuleIbanProvider?: Resolver<
    Maybe<ResolversTypes['CompanyModuleIbanProvider']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteCompanyModuleIbanProviderArgs, 'id'>
  >;
  deleteCompanyModulePaymentProvider?: Resolver<
    Maybe<ResolversTypes['CompanyModulePaymentProvider']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteCompanyModulePaymentProviderArgs, 'id'>
  >;
  deleteDepartment?: Resolver<
    Maybe<ResolversTypes['Department']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteDepartmentArgs, 'id'>
  >;
  deleteDepartmentPosition?: Resolver<
    Maybe<ResolversTypes['DepartmentPosition']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteDepartmentPositionArgs, 'id'>
  >;
  deleteDocumentType?: Resolver<
    Maybe<ResolversTypes['DocumentType']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteDocumentTypeArgs, 'id'>
  >;
  deleteEmailNotification?: Resolver<
    Maybe<ResolversTypes['EmailNotification']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteEmailNotificationArgs, 'id'>
  >;
  deleteEmailSmtp?: Resolver<
    ReadonlyArray<ResolversTypes['EmailSmtp']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteEmailSmtpArgs, 'id'>
  >;
  deleteEmailTemplate?: Resolver<
    Maybe<ResolversTypes['EmailTemplate']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteEmailTemplateArgs, 'id'>
  >;
  deleteEmailTemplateLayout?: Resolver<
    Maybe<ResolversTypes['EmailTemplateLayout']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteEmailTemplateLayoutArgs, 'id'>
  >;
  deleteFile?: Resolver<
    Maybe<ResolversTypes['Files']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteFileArgs, 'id'>
  >;
  deleteGroup?: Resolver<
    Maybe<ResolversTypes['GroupRole']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteGroupArgs, 'id'>
  >;
  deleteMember?: Resolver<
    Maybe<ResolversTypes['Members']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteMemberArgs, 'id'>
  >;
  deleteMemberAccessLimitation?: Resolver<
    Maybe<ResolversTypes['MemberAccessLimitation']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteMemberAccessLimitationArgs, 'id'>
  >;
  deletePayment?: Resolver<
    Maybe<ResolversTypes['Payments']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeletePaymentArgs, 'id'>
  >;
  deletePaymentBank?: Resolver<
    Maybe<ResolversTypes['PaymentBank']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeletePaymentBankArgs, 'id'>
  >;
  deletePaymentProvider?: Resolver<
    Maybe<ResolversTypes['PaymentProvider']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeletePaymentProviderArgs, 'id'>
  >;
  deletePaymentProviderIban?: Resolver<
    Maybe<ResolversTypes['PaymentProviderIban']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeletePaymentProviderIbanArgs, 'id'>
  >;
  deletePaymentSystem?: Resolver<
    Maybe<ResolversTypes['PaymentSystem']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeletePaymentSystemArgs, 'id'>
  >;
  deletePriceListFees?: Resolver<
    Maybe<ResolversTypes['PriceListFee']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeletePriceListFeesArgs, 'id'>
  >;
  deleteProject?: Resolver<
    Maybe<ResolversTypes['Project']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteProjectArgs, 'id'>
  >;
  deleteRegion?: Resolver<
    Maybe<ResolversTypes['Region']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteRegionArgs, 'id'>
  >;
  deleteRole?: Resolver<
    Maybe<ResolversTypes['Role']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteRoleArgs, 'id'>
  >;
  deleteTagApplicantDocumentRejectDetail?: Resolver<
    Maybe<ResolversTypes['ApplicantDocumentRejectDetail']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteTagApplicantDocumentRejectDetailArgs, 'id'>
  >;
  detachApplicantCompanyLabel?: Resolver<
    Maybe<ResolversTypes['ApplicantCompany']>,
    ParentType,
    ContextType,
    RequireFields<MutationDetachApplicantCompanyLabelArgs, 'applicant_company_id'>
  >;
  detachApplicantDocumentTag?: Resolver<
    Maybe<ResolversTypes['ApplicantDocument']>,
    ParentType,
    ContextType,
    RequireFields<MutationDetachApplicantDocumentTagArgs, 'applicant_document_id' | 'applicant_document_tag_id'>
  >;
  detachApplicantIndividualLabel?: Resolver<
    Maybe<ResolversTypes['ApplicantIndividual']>,
    ParentType,
    ContextType,
    RequireFields<MutationDetachApplicantIndividualLabelArgs, 'applicant_individual_id'>
  >;
  generateIban?: Resolver<
    ResolversTypes['AccountGenerateIbanResponse'],
    ParentType,
    ContextType,
    RequireFields<MutationGenerateIbanArgs, 'id'>
  >;
  grantApplicantBankingAccess?: Resolver<
    Maybe<ResolversTypes['ApplicantBankingAccess']>,
    ParentType,
    ContextType,
    RequireFields<MutationGrantApplicantBankingAccessArgs, 'id'>
  >;
  resetMemberPassword?: Resolver<
    Maybe<ResolversTypes['Members']>,
    ParentType,
    ContextType,
    RequireFields<MutationResetMemberPasswordArgs, 'id'>
  >;
  sendConfirmChangeEmail?: Resolver<
    Maybe<ResolversTypes['StatusType']>,
    ParentType,
    ContextType,
    RequireFields<MutationSendConfirmChangeEmailArgs, 'email'>
  >;
  sendEmail?: Resolver<
    Maybe<ResolversTypes['StatusType']>,
    ParentType,
    ContextType,
    RequireFields<MutationSendEmailArgs, 'email' | 'host_name' | 'password' | 'port' | 'username'>
  >;
  sendEmailRegistation?: Resolver<
    Maybe<ResolversTypes['ApplicantIndividual']>,
    ParentType,
    ContextType,
    RequireFields<MutationSendEmailRegistationArgs, 'applicant_id'>
  >;
  sendEmailResetPassword?: Resolver<
    Maybe<ResolversTypes['ApplicantIndividual']>,
    ParentType,
    ContextType,
    RequireFields<MutationSendEmailResetPasswordArgs, 'applicant_id'>
  >;
  sendEmailVerification?: Resolver<
    Maybe<ResolversTypes['ApplicantIndividual']>,
    ParentType,
    ContextType,
    RequireFields<MutationSendEmailVerificationArgs, 'applicant_id'>
  >;
  sendEmailVerificationApplicantCompany?: Resolver<
    Maybe<ResolversTypes['ApplicantCompany']>,
    ParentType,
    ContextType,
    RequireFields<MutationSendEmailVerificationApplicantCompanyArgs, 'applicant_company_id'>
  >;
  sendEmailWithTemplate?: Resolver<
    Maybe<ResolversTypes['StatusType']>,
    ParentType,
    ContextType,
    RequireFields<MutationSendEmailWithTemplateArgs, 'company_id' | 'email' | 'subject'>
  >;
  sendMemberEmailVerification?: Resolver<
    Maybe<ResolversTypes['Members']>,
    ParentType,
    ContextType,
    RequireFields<MutationSendMemberEmailVerificationArgs, 'id'>
  >;
  sendPhoneVerification?: Resolver<
    Maybe<ResolversTypes['ApplicantIndividual']>,
    ParentType,
    ContextType,
    RequireFields<MutationSendPhoneVerificationArgs, 'applicant_id'>
  >;
  sendPhoneVerificationApplicantCompany?: Resolver<
    Maybe<ResolversTypes['ApplicantCompany']>,
    ParentType,
    ContextType,
    RequireFields<MutationSendPhoneVerificationApplicantCompanyArgs, 'applicant_company_id'>
  >;
  setApplicantIndividualPassword?: Resolver<
    Maybe<ResolversTypes['ApplicantIndividual']>,
    ParentType,
    ContextType,
    RequireFields<MutationSetApplicantIndividualPasswordArgs, 'id' | 'password' | 'password_confirmation'>
  >;
  setApplicantSecurityPin?: Resolver<
    Maybe<ResolversTypes['ApplicantIndividual']>,
    ParentType,
    ContextType,
    RequireFields<MutationSetApplicantSecurityPinArgs, 'id'>
  >;
  setApplicantSettingsPassword?: Resolver<
    Maybe<ResolversTypes['TwoFactorAuthToken']>,
    ParentType,
    ContextType,
    RequireFields<MutationSetApplicantSettingsPasswordArgs, 'current_password' | 'password' | 'password_confirmation'>
  >;
  setApplicantSettingsPasswordWithOtp?: Resolver<
    Maybe<ResolversTypes['ApplicantSettingsProfile']>,
    ParentType,
    ContextType,
    RequireFields<
      MutationSetApplicantSettingsPasswordWithOtpArgs,
      'auth_token' | 'code' | 'current_password' | 'password' | 'password_confirmation'
    >
  >;
  setMemberActive?: Resolver<
    Maybe<ResolversTypes['Members']>,
    ParentType,
    ContextType,
    RequireFields<MutationSetMemberActiveArgs, 'id'>
  >;
  setMemberGroup?: Resolver<
    Maybe<ResolversTypes['GroupRole']>,
    ParentType,
    ContextType,
    RequireFields<MutationSetMemberGroupArgs, 'group_type_id' | 'role_id'>
  >;
  setMemberInactive?: Resolver<
    Maybe<ResolversTypes['Members']>,
    ParentType,
    ContextType,
    RequireFields<MutationSetMemberInactiveArgs, 'id'>
  >;
  setMemberPassword?: Resolver<
    Maybe<ResolversTypes['Members']>,
    ParentType,
    ContextType,
    RequireFields<MutationSetMemberPasswordArgs, 'id' | 'password' | 'password_confirmation'>
  >;
  setMemberSecurityPin?: Resolver<
    Maybe<ResolversTypes['Members']>,
    ParentType,
    ContextType,
    RequireFields<MutationSetMemberSecurityPinArgs, 'id'>
  >;
  setMemberSuspended?: Resolver<
    Maybe<ResolversTypes['Members']>,
    ParentType,
    ContextType,
    RequireFields<MutationSetMemberSuspendedArgs, 'id'>
  >;
  updateAccount?: Resolver<
    Maybe<ResolversTypes['Account']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateAccountArgs, 'account_name' | 'account_state_id' | 'id' | 'is_primary'>
  >;
  updateAccountLimit?: Resolver<
    Maybe<ResolversTypes['AccountLimit']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateAccountLimitArgs, 'id'>
  >;
  updateActiveSession?: Resolver<
    ResolversTypes['ActiveSessionMutatorResponse'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateActiveSessionArgs, 'id' | 'trusted'>
  >;
  updateApplicantAccount?: Resolver<
    ResolversTypes['ApplicantAccount'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateApplicantAccountArgs, 'id' | 'is_show'>
  >;
  updateApplicantBankingAccess?: Resolver<
    Maybe<ResolversTypes['ApplicantBankingAccess']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateApplicantBankingAccessArgs, 'id'>
  >;
  updateApplicantCompany?: Resolver<
    Maybe<ResolversTypes['ApplicantCompany']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateApplicantCompanyArgs, 'id'>
  >;
  updateApplicantCompanyBusinessType?: Resolver<
    Maybe<ResolversTypes['ApplicantCompanyBusinessType']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateApplicantCompanyBusinessTypeArgs, 'id' | 'name'>
  >;
  updateApplicantCompanyLabel?: Resolver<
    Maybe<ResolversTypes['ApplicantCompanyLabel']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateApplicantCompanyLabelArgs, 'id' | 'name'>
  >;
  updateApplicantCompanyModule?: Resolver<
    Maybe<ResolversTypes['ApplicantCompany']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateApplicantCompanyModuleArgs, 'applicant_company_id'>
  >;
  updateApplicantCompanyVerificationStatus?: Resolver<
    Maybe<ResolversTypes['ApplicantCompany']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateApplicantCompanyVerificationStatusArgs, 'applicant_status_id' | 'id'>
  >;
  updateApplicantDevice?: Resolver<
    ResolversTypes['TwoFactorAuthToken'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateApplicantDeviceArgs, 'id' | 'trusted'>
  >;
  updateApplicantDeviceWithOtp?: Resolver<
    ResolversTypes['ApplicantDevice'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateApplicantDeviceWithOtpArgs, 'auth_token' | 'code' | 'id' | 'trusted'>
  >;
  updateApplicantDocument?: Resolver<
    Maybe<ResolversTypes['ApplicantDocument']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateApplicantDocumentArgs, 'id'>
  >;
  updateApplicantDocumentTag?: Resolver<
    Maybe<ResolversTypes['ApplicantDocumentTag']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateApplicantDocumentTagArgs, 'category_id' | 'id' | 'name'>
  >;
  updateApplicantDocumentTagCategory?: Resolver<
    Maybe<ResolversTypes['ApplicantDocumentTagCategory']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateApplicantDocumentTagCategoryArgs, 'id' | 'name'>
  >;
  updateApplicantIndividual?: Resolver<
    Maybe<ResolversTypes['ApplicantIndividual']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateApplicantIndividualArgs, 'id'>
  >;
  updateApplicantIndividualCompany?: Resolver<
    Maybe<ResolversTypes['ApplicantIndividualCompany']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateApplicantIndividualCompanyArgs, 'applicant_company_id' | 'applicant_id'>
  >;
  updateApplicantIndividualCompanyPosition?: Resolver<
    Maybe<ResolversTypes['ApplicantIndividualCompanyPosition']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateApplicantIndividualCompanyPositionArgs, 'id' | 'name'>
  >;
  updateApplicantIndividualCompanyRelation?: Resolver<
    Maybe<ResolversTypes['ApplicantIndividualCompanyRelation']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateApplicantIndividualCompanyRelationArgs, 'id' | 'name'>
  >;
  updateApplicantIndividualLabel?: Resolver<
    Maybe<ResolversTypes['ApplicantIndividualLabel']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateApplicantIndividualLabelArgs, 'id' | 'name'>
  >;
  updateApplicantIndividualModule?: Resolver<
    Maybe<ResolversTypes['ApplicantIndividual']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateApplicantIndividualModuleArgs, 'applicant_individual_id'>
  >;
  updateApplicantIndividualVerificationStatus?: Resolver<
    Maybe<ResolversTypes['ApplicantIndividual']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateApplicantIndividualVerificationStatusArgs, 'applicant_status_id' | 'id'>
  >;
  updateApplicantProfile?: Resolver<
    Maybe<ResolversTypes['ApplicantProfile']>,
    ParentType,
    ContextType,
    Partial<MutationUpdateApplicantProfileArgs>
  >;
  updateApplicantStateReason?: Resolver<
    Maybe<ResolversTypes['ApplicantStateReason']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateApplicantStateReasonArgs, 'id' | 'name'>
  >;
  updateBankCorrespondent?: Resolver<
    Maybe<ResolversTypes['BankCorrespondent']>,
    ParentType,
    ContextType,
    RequireFields<
      MutationUpdateBankCorrespondentArgs,
      | 'address'
      | 'bank_account'
      | 'bank_code'
      | 'currency_id'
      | 'id'
      | 'is_active'
      | 'name'
      | 'payment_system_id'
      | 'region_id'
    >
  >;
  updateBusinessActivity?: Resolver<
    Maybe<ResolversTypes['BusinessActivity']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateBusinessActivityArgs, 'id' | 'name'>
  >;
  updateCommissionPriceList?: Resolver<
    Maybe<ResolversTypes['CommissionPriceList']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateCommissionPriceListArgs, 'id'>
  >;
  updateCommissionTemplate?: Resolver<
    Maybe<ResolversTypes['CommissionTemplate']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateCommissionTemplateArgs, 'id' | 'input'>
  >;
  updateCommissionTemplateLimit?: Resolver<
    Maybe<ResolversTypes['CommissionTemplateLimit']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateCommissionTemplateLimitArgs, 'id' | 'input'>
  >;
  updateCompany?: Resolver<
    Maybe<ResolversTypes['Company']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateCompanyArgs, 'id'>
  >;
  updateCompanyModule?: Resolver<
    Maybe<ResolversTypes['CompanyModule']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateCompanyModuleArgs, 'id' | 'is_active'>
  >;
  updateCompanyModuleIbanProvider?: Resolver<
    Maybe<ResolversTypes['CompanyModuleIbanProvider']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateCompanyModuleIbanProviderArgs, 'id' | 'is_active'>
  >;
  updateCompanyModulePaymentProvider?: Resolver<
    Maybe<ResolversTypes['CompanyModulePaymentProvider']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateCompanyModulePaymentProviderArgs, 'id' | 'is_active'>
  >;
  updateDepartment?: Resolver<
    Maybe<ResolversTypes['Department']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateDepartmentArgs, 'id'>
  >;
  updateEmailNotification?: Resolver<
    Maybe<ResolversTypes['EmailNotification']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateEmailNotificationArgs, 'group_role_id' | 'group_type_id' | 'id'>
  >;
  updateEmailSmtp?: Resolver<
    Maybe<ResolversTypes['EmailSmtp']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateEmailSmtpArgs, 'id'>
  >;
  updateEmailTemplate?: Resolver<
    Maybe<ResolversTypes['EmailTemplateOnCompanyResponse']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateEmailTemplateArgs, 'id'>
  >;
  updateEmailTemplateLayout?: Resolver<
    Maybe<ResolversTypes['EmailTemplateLayout']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateEmailTemplateLayoutArgs, 'company_id' | 'id'>
  >;
  updateGroupSettings?: Resolver<
    Maybe<ResolversTypes['GroupRole']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateGroupSettingsArgs, 'group_type_id' | 'id'>
  >;
  updateMember?: Resolver<
    Maybe<ResolversTypes['Members']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateMemberArgs, 'id'>
  >;
  updateMemberAccessLimitation?: Resolver<
    Maybe<ResolversTypes['MemberAccessLimitation']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateMemberAccessLimitationArgs, 'id' | 'input'>
  >;
  updateMemberProfile?: Resolver<
    Maybe<ResolversTypes['MemberProfile']>,
    ParentType,
    ContextType,
    Partial<MutationUpdateMemberProfileArgs>
  >;
  updatePayment?: Resolver<
    Maybe<ResolversTypes['Payments']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdatePaymentArgs, 'id' | 'status_id'>
  >;
  updatePaymentBank?: Resolver<
    Maybe<ResolversTypes['PaymentBank']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdatePaymentBankArgs, 'id' | 'input'>
  >;
  updatePaymentProvider?: Resolver<
    Maybe<ResolversTypes['PaymentProvider']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdatePaymentProviderArgs, 'id' | 'input'>
  >;
  updatePaymentProviderIban?: Resolver<
    Maybe<ResolversTypes['PaymentProviderIban']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdatePaymentProviderIbanArgs, 'id' | 'input'>
  >;
  updatePaymentSystem?: Resolver<
    Maybe<ResolversTypes['PaymentSystem']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdatePaymentSystemArgs, 'id' | 'input'>
  >;
  updatePriceListFees?: Resolver<
    Maybe<ResolversTypes['PriceListFee']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdatePriceListFeesArgs, 'id'>
  >;
  updateProject?: Resolver<
    Maybe<ResolversTypes['Project']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateProjectArgs, 'id' | 'input'>
  >;
  updateProjectApiSetting?: Resolver<
    ReadonlyArray<ResolversTypes['ProjectApiSetting']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateProjectApiSettingArgs, 'input' | 'project_id'>
  >;
  updateRegion?: Resolver<
    Maybe<ResolversTypes['Region']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateRegionArgs, 'id' | 'input'>
  >;
  updateRole?: Resolver<
    Maybe<ResolversTypes['Role']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateRoleArgs, 'id' | 'name'>
  >;
  updateTicket?: Resolver<
    Maybe<ResolversTypes['Ticket']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateTicketArgs, 'id'>
  >;
  updateTransferOutgoing?: Resolver<
    Maybe<ResolversTypes['TransferOutgoing']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateTransferOutgoingArgs, 'id' | 'status_id'>
  >;
  updateTransferOutgoingFee?: Resolver<
    Maybe<ResolversTypes['TransferOutgoing']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateTransferOutgoingFeeArgs, 'amount' | 'id'>
  >;
};

export type OperationTypeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['OperationType'] = ResolversParentTypes['OperationType'],
> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageInfoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo'],
> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  currentPage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  lastPage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginatorInfoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PaginatorInfo'] = ResolversParentTypes['PaginatorInfo'],
> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  currentPage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  firstItem?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  hasMorePages?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  lastItem?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  lastPage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  perPage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentBankResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PaymentBank'] = ResolversParentTypes['PaymentBank'],
> = {
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bank_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bank_correspondent?: Resolver<Maybe<ResolversTypes['BankCorrespondent']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  is_active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  payment_provider?: Resolver<Maybe<ResolversTypes['PaymentProvider']>, ParentType, ContextType>;
  payment_system?: Resolver<Maybe<ResolversTypes['PaymentSystem']>, ParentType, ContextType>;
  payment_system_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentBankPaginatorResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PaymentBankPaginator'] = ResolversParentTypes['PaymentBankPaginator'],
> = {
  data?: Resolver<ReadonlyArray<ResolversTypes['PaymentBank']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentProviderResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PaymentProvider'] = ResolversParentTypes['PaymentProvider'],
> = {
  commission_price_list?: Resolver<Maybe<ResolversTypes['CommissionPriceList']>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  is_active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  logo?: Resolver<Maybe<ResolversTypes['Files']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  payment_systems?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['PaymentSystem']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentProviderHistoryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PaymentProviderHistory'] = ResolversParentTypes['PaymentProviderHistory'],
> = {
  created_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  payment_provider_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  provider_response?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  transfer_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transfer_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentProviderIbanResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PaymentProviderIban'] = ResolversParentTypes['PaymentProviderIban'],
> = {
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['Currencies']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  is_active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentProviderIbanPaginatorResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['PaymentProviderIbanPaginator'] = ResolversParentTypes['PaymentProviderIbanPaginator'],
> = {
  data?: Resolver<ReadonlyArray<ResolversTypes['PaymentProviderIban']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentProviderPaginatorResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['PaymentProviderPaginator'] = ResolversParentTypes['PaymentProviderPaginator'],
> = {
  data?: Resolver<ReadonlyArray<ResolversTypes['PaymentProvider']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentStatusResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PaymentStatus'] = ResolversParentTypes['PaymentStatus'],
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentSystemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PaymentSystem'] = ResolversParentTypes['PaymentSystem'],
> = {
  bank_correspondent?: Resolver<Maybe<ResolversTypes['BankCorrespondent']>, ParentType, ContextType>;
  banks?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['PaymentBank']>>>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  currencies?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['Currencies']>>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  is_active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  logo?: Resolver<Maybe<ResolversTypes['Files']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  operations?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['OperationType']>>>, ParentType, ContextType>;
  providers?: Resolver<Maybe<ResolversTypes['PaymentProvider']>, ParentType, ContextType>;
  regions?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['Region']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentSystemPaginatorResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PaymentSystemPaginator'] = ResolversParentTypes['PaymentSystemPaginator'],
> = {
  data?: Resolver<ReadonlyArray<ResolversTypes['PaymentSystem']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentUrgencyResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PaymentUrgency'] = ResolversParentTypes['PaymentUrgency'],
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Payments'] = ResolversParentTypes['Payments'],
> = {
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  amount_real?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  beneficiary_additional_data?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  beneficiary_address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  beneficiary_city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  beneficiary_country?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType>;
  beneficiary_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  beneficiary_state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  beneficiary_zip?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['Currencies']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  execution_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  fee?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  fee_type?: Resolver<Maybe<ResolversTypes['FeeType']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  member?: Resolver<Maybe<ResolversTypes['Members']>, ParentType, ContextType>;
  payment_number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  payment_operation_type?: Resolver<Maybe<ResolversTypes['OperationType']>, ParentType, ContextType>;
  payment_provider?: Resolver<Maybe<ResolversTypes['PaymentProvider']>, ParentType, ContextType>;
  payment_urgency?: Resolver<Maybe<ResolversTypes['PaymentUrgency']>, ParentType, ContextType>;
  price_list_fees?: Resolver<Maybe<ResolversTypes['PriceListFee']>, ParentType, ContextType>;
  received_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  recipient_account?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  recipient_bank_address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  recipient_bank_country?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType>;
  recipient_bank_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  recipient_bank_swift?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  respondent_fee?: Resolver<Maybe<ResolversTypes['RespondentFee']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['PaymentStatus']>, ParentType, ContextType>;
  status_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentsPaginatorResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PaymentsPaginator'] = ResolversParentTypes['PaymentsPaginator'],
> = {
  data?: Resolver<ReadonlyArray<ResolversTypes['Payments']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PermissionAuthResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PermissionAuth'] = ResolversParentTypes['PermissionAuth'],
> = {
  PERMISSION_ACCOUNT_DETAILS?: Resolver<
    ReadonlyArray<ResolversTypes['PERMISSION_ACCOUNT_DETAILS']>,
    ParentType,
    ContextType
  >;
  PERMISSION_DASHBOARD?: Resolver<ReadonlyArray<ResolversTypes['PERMISSION_DASHBOARD']>, ParentType, ContextType>;
  PERMISSION_MAKE_PAYMENTS?: Resolver<
    ReadonlyArray<ResolversTypes['PERMISSION_MAKE_PAYMENTS']>,
    ParentType,
    ContextType
  >;
  PERMISSION_MY_NET_WORTH?: Resolver<ReadonlyArray<ResolversTypes['PERMISSION_MY_NET_WORTH']>, ParentType, ContextType>;
  PERMISSION_MY_TEMPLATES?: Resolver<ReadonlyArray<ResolversTypes['PERMISSION_MY_TEMPLATES']>, ParentType, ContextType>;
  PERMISSION_PAYMENT_DETAILS?: Resolver<
    ReadonlyArray<ResolversTypes['PERMISSION_PAYMENT_DETAILS']>,
    ParentType,
    ContextType
  >;
  PERMISSION_PAYMENT_LIST?: Resolver<ReadonlyArray<ResolversTypes['PERMISSION_PAYMENT_LIST']>, ParentType, ContextType>;
  PERMISSION_REQUISITES?: Resolver<ReadonlyArray<ResolversTypes['PERMISSION_REQUISITES']>, ParentType, ContextType>;
  PERMISSION_SETTINGS_ACCOUNT?: Resolver<
    ReadonlyArray<ResolversTypes['PERMISSION_SETTINGS_ACCOUNT']>,
    ParentType,
    ContextType
  >;
  PERMISSION_SETTINGS_CONTACT_DETAILS?: Resolver<
    ReadonlyArray<ResolversTypes['PERMISSION_SETTINGS_CONTACT_DETAILS']>,
    ParentType,
    ContextType
  >;
  PERMISSION_SETTINGS_LOG_IN_DETAILS?: Resolver<
    ReadonlyArray<ResolversTypes['PERMISSION_SETTINGS_LOG_IN_DETAILS']>,
    ParentType,
    ContextType
  >;
  PERMISSION_SETTINGS_SECURITY_LEVEL?: Resolver<
    ReadonlyArray<ResolversTypes['PERMISSION_SETTINGS_SECURITY_LEVEL']>,
    ParentType,
    ContextType
  >;
  PERMISSION_STATEMENTS?: Resolver<ReadonlyArray<ResolversTypes['PERMISSION_STATEMENTS']>, ParentType, ContextType>;
  PERMISSION_TICKETS?: Resolver<ReadonlyArray<ResolversTypes['PERMISSION_TICKETS']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PermissionCategoryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PermissionCategory'] = ResolversParentTypes['PermissionCategory'],
> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  permissionList?: Resolver<
    Maybe<ReadonlyArray<Maybe<ResolversTypes['PermissionList']>>>,
    ParentType,
    ContextType,
    Partial<PermissionCategoryPermissionListArgs>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PermissionCategoryRoleResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PermissionCategoryRole'] = ResolversParentTypes['PermissionCategoryRole'],
> = {
  is_all_companies?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  permission_category_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  role_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PermissionListResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PermissionList'] = ResolversParentTypes['PermissionList'],
> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  permissions?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['Permissions']>>>, ParentType, ContextType>;
  separator?: Resolver<Maybe<ResolversTypes['PermissionSeparatorType']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['PermissionListType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PermissionTypeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PermissionType'] = ResolversParentTypes['PermissionType'],
> = {
  PERMISSION_ACCOUNT_DETAILS?: Resolver<Maybe<ResolversTypes['PERMISSION_ACCOUNT_DETAILS']>, ParentType, ContextType>;
  PERMISSION_DASHBOARD?: Resolver<Maybe<ResolversTypes['PERMISSION_DASHBOARD']>, ParentType, ContextType>;
  PERMISSION_MAKE_PAYMENTS?: Resolver<Maybe<ResolversTypes['PERMISSION_MAKE_PAYMENTS']>, ParentType, ContextType>;
  PERMISSION_MY_NET_WORTH?: Resolver<Maybe<ResolversTypes['PERMISSION_MY_NET_WORTH']>, ParentType, ContextType>;
  PERMISSION_MY_TEMPLATES?: Resolver<Maybe<ResolversTypes['PERMISSION_MY_TEMPLATES']>, ParentType, ContextType>;
  PERMISSION_PAYMENT_DETAILS?: Resolver<Maybe<ResolversTypes['PERMISSION_PAYMENT_DETAILS']>, ParentType, ContextType>;
  PERMISSION_PAYMENT_LIST?: Resolver<Maybe<ResolversTypes['PERMISSION_PAYMENT_LIST']>, ParentType, ContextType>;
  PERMISSION_REQUISITES?: Resolver<Maybe<ResolversTypes['PERMISSION_REQUISITES']>, ParentType, ContextType>;
  PERMISSION_SETTINGS_ACCOUNT?: Resolver<Maybe<ResolversTypes['PERMISSION_SETTINGS_ACCOUNT']>, ParentType, ContextType>;
  PERMISSION_SETTINGS_CONTACT_DETAILS?: Resolver<
    Maybe<ResolversTypes['PERMISSION_SETTINGS_CONTACT_DETAILS']>,
    ParentType,
    ContextType
  >;
  PERMISSION_SETTINGS_LOG_IN_DETAILS?: Resolver<
    Maybe<ResolversTypes['PERMISSION_SETTINGS_LOG_IN_DETAILS']>,
    ParentType,
    ContextType
  >;
  PERMISSION_SETTINGS_SECURITY_LEVEL?: Resolver<
    Maybe<ResolversTypes['PERMISSION_SETTINGS_SECURITY_LEVEL']>,
    ParentType,
    ContextType
  >;
  PERMISSION_STATEMENTS?: Resolver<Maybe<ResolversTypes['PERMISSION_STATEMENTS']>, ParentType, ContextType>;
  PERMISSION_TICKETS?: Resolver<Maybe<ResolversTypes['PERMISSION_TICKETS']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PermissionsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Permissions'] = ResolversParentTypes['Permissions'],
> = {
  all?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  display_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  guard_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PriceListFeeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PriceListFee'] = ResolversParentTypes['PriceListFee'],
> = {
  created_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  fee_ranges?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  fee_type?: Resolver<Maybe<ResolversTypes['FeeType']>, ParentType, ContextType>;
  fees?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['PriceListFeeCurrency']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  operation_type?: Resolver<Maybe<ResolversTypes['OperationType']>, ParentType, ContextType>;
  period?: Resolver<Maybe<ResolversTypes['FeePeriod']>, ParentType, ContextType>;
  price_list_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  scheduled?: Resolver<Maybe<ResolversTypes['PriceListFeeScheduled']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PriceListFeeCurrencyResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PriceListFeeCurrency'] = ResolversParentTypes['PriceListFeeCurrency'],
> = {
  currency_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  fee?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['FeeItem']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  price_list_fee_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PriceListFeeScheduledResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PriceListFeeScheduled'] = ResolversParentTypes['PriceListFeeScheduled'],
> = {
  end_date?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  end_date_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  recurrent_interval?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  starting_date?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  starting_date_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Project'] = ResolversParentTypes['Project'],
> = {
  additional_fields_basic?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  additional_fields_settings?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  avatar?: Resolver<Maybe<ResolversTypes['Files']>, ParentType, ContextType>;
  client_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['DateTimeUtc'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  forgot_password_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  login_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  module?: Resolver<Maybe<ResolversTypes['Module']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  project_api_settings?: Resolver<
    Maybe<ReadonlyArray<Maybe<ResolversTypes['ProjectApiSetting']>>>,
    ParentType,
    ContextType
  >;
  project_settings?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['ProjectSettings']>>>, ParentType, ContextType>;
  sms_sender_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['State']>, ParentType, ContextType>;
  support_email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['DateTimeUtc'], ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectApiSettingResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ProjectApiSetting'] = ResolversParentTypes['ProjectApiSetting'],
> = {
  api_key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  is_active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  project?: Resolver<ResolversTypes['Project'], ParentType, ContextType>;
  provider?: Resolver<Maybe<ResolversTypes['ProviderType']>, ParentType, ContextType>;
  wallet?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectApiSettingPasswordResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ProjectApiSettingPassword'] = ResolversParentTypes['ProjectApiSettingPassword'],
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectPaginatorResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ProjectPaginator'] = ResolversParentTypes['ProjectPaginator'],
> = {
  data?: Resolver<ReadonlyArray<ResolversTypes['Project']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectSettingsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ProjectSettings'] = ResolversParentTypes['ProjectSettings'],
> = {
  applicant_type?: Resolver<ResolversTypes['ApplicantType'], ParentType, ContextType>;
  commission_template?: Resolver<Maybe<ResolversTypes['CommissionTemplate']>, ParentType, ContextType>;
  group_role?: Resolver<Maybe<ResolversTypes['GroupRole']>, ParentType, ContextType>;
  group_type?: Resolver<Maybe<ResolversTypes['GroupType']>, ParentType, ContextType>;
  iban_provider?: Resolver<Maybe<ResolversTypes['PaymentProviderIban']>, ParentType, ContextType>;
  payment_provider?: Resolver<Maybe<ResolversTypes['PaymentProvider']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProviderTypeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ProviderType'] = ResolversParentTypes['ProviderType'],
> = {
  __resolveType: TypeResolveFn<'PaymentProvider' | 'PaymentProviderIban', ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = {
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType, RequireFields<QueryAccountArgs, 'id'>>;
  accountLimit?: Resolver<
    Maybe<ResolversTypes['AccountLimit']>,
    ParentType,
    ContextType,
    Partial<QueryAccountLimitArgs>
  >;
  accountLimits?: Resolver<
    Maybe<ResolversTypes['AccountLimitPaginator']>,
    ParentType,
    ContextType,
    RequireFields<QueryAccountLimitsArgs, 'first'>
  >;
  accountList?: Resolver<
    Maybe<ResolversTypes['AccountPaginator']>,
    ParentType,
    ContextType,
    RequireFields<QueryAccountListArgs, 'first'>
  >;
  accountReachedLimit?: Resolver<
    Maybe<ResolversTypes['AccountReachedLimit']>,
    ParentType,
    ContextType,
    Partial<QueryAccountReachedLimitArgs>
  >;
  accountReachedLimits?: Resolver<
    Maybe<ResolversTypes['AccountReachedLimitPaginator']>,
    ParentType,
    ContextType,
    RequireFields<QueryAccountReachedLimitsArgs, 'first'>
  >;
  accountStatement?: Resolver<
    Maybe<ResolversTypes['AccountStatement']>,
    ParentType,
    ContextType,
    RequireFields<QueryAccountStatementArgs, 'account_id'>
  >;
  accountStates?: Resolver<
    ReadonlyArray<ResolversTypes['AccountState']>,
    ParentType,
    ContextType,
    Partial<QueryAccountStatesArgs>
  >;
  activeSessions?: Resolver<
    Maybe<ResolversTypes['ActiveSessions']>,
    ParentType,
    ContextType,
    RequireFields<QueryActiveSessionsArgs, 'count' | 'page'>
  >;
  activityLogs?: Resolver<
    Maybe<ResolversTypes['ActivityLogs']>,
    ParentType,
    ContextType,
    RequireFields<QueryActivityLogsArgs, 'count' | 'page'>
  >;
  applicantAccounts?: Resolver<
    Maybe<ReadonlyArray<ResolversTypes['ApplicantAccount']>>,
    ParentType,
    ContextType,
    Partial<QueryApplicantAccountsArgs>
  >;
  applicantBankingAccess?: Resolver<
    Maybe<ResolversTypes['ApplicantBankingAccess']>,
    ParentType,
    ContextType,
    Partial<QueryApplicantBankingAccessArgs>
  >;
  applicantBankingAccesses?: Resolver<
    Maybe<ResolversTypes['ApplicantBankingAccesses']>,
    ParentType,
    ContextType,
    RequireFields<QueryApplicantBankingAccessesArgs, 'applicant_company_id' | 'first' | 'page'>
  >;
  applicantCompanies?: Resolver<
    Maybe<ResolversTypes['ApplicantCompanyPaginator']>,
    ParentType,
    ContextType,
    RequireFields<QueryApplicantCompaniesArgs, 'first'>
  >;
  applicantCompany?: Resolver<
    Maybe<ResolversTypes['ApplicantCompany']>,
    ParentType,
    ContextType,
    Partial<QueryApplicantCompanyArgs>
  >;
  applicantCompanyBusinessType?: Resolver<
    Maybe<ResolversTypes['ApplicantCompanyBusinessTypePaginator']>,
    ParentType,
    ContextType,
    RequireFields<QueryApplicantCompanyBusinessTypeArgs, 'first'>
  >;
  applicantCompanyLabel?: Resolver<
    Maybe<ResolversTypes['ApplicantCompanyLabel']>,
    ParentType,
    ContextType,
    Partial<QueryApplicantCompanyLabelArgs>
  >;
  applicantCompanyLabels?: Resolver<
    ReadonlyArray<ResolversTypes['ApplicantCompanyLabel']>,
    ParentType,
    ContextType,
    Partial<QueryApplicantCompanyLabelsArgs>
  >;
  applicantCompanyLabelsAvailable?: Resolver<
    Maybe<ResolversTypes['ApplicantCompanyLabelPaginator']>,
    ParentType,
    ContextType,
    RequireFields<QueryApplicantCompanyLabelsAvailableArgs, 'first'>
  >;
  applicantCompanyModules?: Resolver<
    ReadonlyArray<ResolversTypes['ApplicantCompanyModules']>,
    ParentType,
    ContextType,
    RequireFields<QueryApplicantCompanyModulesArgs, 'applicant_company_id'>
  >;
  applicantCompanyNote?: Resolver<
    Maybe<ResolversTypes['ApplicantCompanyNotes']>,
    ParentType,
    ContextType,
    Partial<QueryApplicantCompanyNoteArgs>
  >;
  applicantCompanyNotes?: Resolver<
    Maybe<ResolversTypes['ApplicantCompanyNotesPaginator']>,
    ParentType,
    ContextType,
    RequireFields<QueryApplicantCompanyNotesArgs, 'first'>
  >;
  applicantCompanyRiskLevelHistory?: Resolver<
    Maybe<ResolversTypes['ApplicantCompanyRiskLevelHistoryPaginator']>,
    ParentType,
    ContextType,
    RequireFields<QueryApplicantCompanyRiskLevelHistoryArgs, 'applicant_company_id' | 'first'>
  >;
  applicantDevices?: Resolver<Maybe<ReadonlyArray<ResolversTypes['ApplicantDevice']>>, ParentType, ContextType>;
  applicantDocument?: Resolver<
    Maybe<ResolversTypes['ApplicantDocument']>,
    ParentType,
    ContextType,
    RequireFields<QueryApplicantDocumentArgs, 'id'>
  >;
  applicantDocumentInternalNotes?: Resolver<
    Maybe<ResolversTypes['ApplicantDocumentInternalNotePaginator']>,
    ParentType,
    ContextType,
    RequireFields<QueryApplicantDocumentInternalNotesArgs, 'applicant_document_id' | 'first'>
  >;
  applicantDocumentTagCategories?: Resolver<
    Maybe<ResolversTypes['ApplicantDocumentTagCategoryPaginator']>,
    ParentType,
    ContextType,
    RequireFields<QueryApplicantDocumentTagCategoriesArgs, 'first'>
  >;
  applicantDocumentTags?: Resolver<
    Maybe<ResolversTypes['ApplicantDocumentTagPaginator']>,
    ParentType,
    ContextType,
    RequireFields<QueryApplicantDocumentTagsArgs, 'first'>
  >;
  applicantDocuments?: Resolver<
    Maybe<ResolversTypes['ApplicantDocumentPaginator']>,
    ParentType,
    ContextType,
    RequireFields<QueryApplicantDocumentsArgs, 'applicant_type' | 'first'>
  >;
  applicantIndividual?: Resolver<
    Maybe<ResolversTypes['ApplicantIndividual']>,
    ParentType,
    ContextType,
    Partial<QueryApplicantIndividualArgs>
  >;
  applicantIndividualCompanyPosition?: Resolver<
    Maybe<ResolversTypes['ApplicantIndividualCompanyPosition']>,
    ParentType,
    ContextType,
    Partial<QueryApplicantIndividualCompanyPositionArgs>
  >;
  applicantIndividualCompanyPositions?: Resolver<
    Maybe<ResolversTypes['ApplicantIndividualCompanyPositionPaginator']>,
    ParentType,
    ContextType,
    RequireFields<QueryApplicantIndividualCompanyPositionsArgs, 'first'>
  >;
  applicantIndividualCompanyRelation?: Resolver<
    Maybe<ResolversTypes['ApplicantIndividualCompanyRelation']>,
    ParentType,
    ContextType,
    Partial<QueryApplicantIndividualCompanyRelationArgs>
  >;
  applicantIndividualCompanyRelations?: Resolver<
    Maybe<ResolversTypes['ApplicantIndividualCompanyRelationPaginator']>,
    ParentType,
    ContextType,
    RequireFields<QueryApplicantIndividualCompanyRelationsArgs, 'first'>
  >;
  applicantIndividualLabel?: Resolver<
    Maybe<ResolversTypes['ApplicantIndividualLabel']>,
    ParentType,
    ContextType,
    Partial<QueryApplicantIndividualLabelArgs>
  >;
  applicantIndividualLabels?: Resolver<
    ReadonlyArray<ResolversTypes['ApplicantIndividualLabel']>,
    ParentType,
    ContextType,
    Partial<QueryApplicantIndividualLabelsArgs>
  >;
  applicantIndividualLabelsAvailable?: Resolver<
    Maybe<ResolversTypes['ApplicantIndividualLabelPaginator']>,
    ParentType,
    ContextType,
    RequireFields<QueryApplicantIndividualLabelsAvailableArgs, 'first'>
  >;
  applicantIndividualModules?: Resolver<
    ReadonlyArray<ResolversTypes['ApplicantIndividualModules']>,
    ParentType,
    ContextType,
    RequireFields<QueryApplicantIndividualModulesArgs, 'applicant_individual_id'>
  >;
  applicantIndividualNote?: Resolver<
    Maybe<ResolversTypes['ApplicantIndividualNotes']>,
    ParentType,
    ContextType,
    Partial<QueryApplicantIndividualNoteArgs>
  >;
  applicantIndividualNotes?: Resolver<
    Maybe<ResolversTypes['ApplicantIndividualNotesPaginator']>,
    ParentType,
    ContextType,
    RequireFields<QueryApplicantIndividualNotesArgs, 'first'>
  >;
  applicantIndividuals?: Resolver<
    Maybe<ResolversTypes['ApplicantIndividualPaginator']>,
    ParentType,
    ContextType,
    RequireFields<QueryApplicantIndividualsArgs, 'first'>
  >;
  applicantKycLevel?: Resolver<
    Maybe<ResolversTypes['ApplicantKycLevel']>,
    ParentType,
    ContextType,
    Partial<QueryApplicantKycLevelArgs>
  >;
  applicantKycLevels?: Resolver<
    Maybe<ResolversTypes['ApplicantKycLevelPaginator']>,
    ParentType,
    ContextType,
    RequireFields<QueryApplicantKycLevelsArgs, 'first'>
  >;
  applicantLinkedCompanies?: Resolver<
    ReadonlyArray<ResolversTypes['ApplicantLinkedCompany']>,
    ParentType,
    ContextType,
    RequireFields<QueryApplicantLinkedCompaniesArgs, 'applicant_individual_id'>
  >;
  applicantProfile?: Resolver<Maybe<ResolversTypes['ApplicantProfile']>, ParentType, ContextType>;
  applicantRequisite?: Resolver<
    Maybe<ResolversTypes['ApplicantDetailsRequisites']>,
    ParentType,
    ContextType,
    Partial<QueryApplicantRequisiteArgs>
  >;
  applicantRequisites?: Resolver<ReadonlyArray<ResolversTypes['ApplicantRequisites']>, ParentType, ContextType>;
  applicantRiskLevel?: Resolver<
    Maybe<ResolversTypes['ApplicantRiskLevel']>,
    ParentType,
    ContextType,
    Partial<QueryApplicantRiskLevelArgs>
  >;
  applicantRiskLevelHistory?: Resolver<
    Maybe<ResolversTypes['ApplicantRiskLevelHistoryPaginator']>,
    ParentType,
    ContextType,
    RequireFields<QueryApplicantRiskLevelHistoryArgs, 'applicant_id' | 'first'>
  >;
  applicantRiskLevels?: Resolver<
    Maybe<ResolversTypes['ApplicantRiskLevelPaginator']>,
    ParentType,
    ContextType,
    RequireFields<QueryApplicantRiskLevelsArgs, 'first'>
  >;
  applicantState?: Resolver<
    Maybe<ResolversTypes['ApplicantState']>,
    ParentType,
    ContextType,
    Partial<QueryApplicantStateArgs>
  >;
  applicantStateReason?: Resolver<
    Maybe<ResolversTypes['ApplicantStateReason']>,
    ParentType,
    ContextType,
    Partial<QueryApplicantStateReasonArgs>
  >;
  applicantStateReasons?: Resolver<
    Maybe<ResolversTypes['ApplicantStateReasonPaginator']>,
    ParentType,
    ContextType,
    RequireFields<QueryApplicantStateReasonsArgs, 'first'>
  >;
  applicantStates?: Resolver<
    Maybe<ResolversTypes['ApplicantStatePaginator']>,
    ParentType,
    ContextType,
    RequireFields<QueryApplicantStatesArgs, 'first'>
  >;
  applicantStatus?: Resolver<
    Maybe<ResolversTypes['ApplicantStatus']>,
    ParentType,
    ContextType,
    Partial<QueryApplicantStatusArgs>
  >;
  applicantStatuses?: Resolver<
    Maybe<ResolversTypes['ApplicantStatusPaginator']>,
    ParentType,
    ContextType,
    RequireFields<QueryApplicantStatusesArgs, 'first'>
  >;
  applicantVerificationStatuses?: Resolver<
    ReadonlyArray<ResolversTypes['ApplicantVerificationStatus']>,
    ParentType,
    ContextType
  >;
  applicant_module?: Resolver<
    Maybe<ResolversTypes['ApplicantModules']>,
    ParentType,
    ContextType,
    Partial<QueryApplicant_ModuleArgs>
  >;
  applicant_modules?: Resolver<
    Maybe<ResolversTypes['ApplicantModulesPaginator']>,
    ParentType,
    ContextType,
    RequireFields<QueryApplicant_ModulesArgs, 'first'>
  >;
  authenticationLogs?: Resolver<
    Maybe<ResolversTypes['AuthenticationLogs']>,
    ParentType,
    ContextType,
    RequireFields<QueryAuthenticationLogsArgs, 'first' | 'page'>
  >;
  authenticationMemberLogs?: Resolver<
    Maybe<ResolversTypes['AuthenticationLogs']>,
    ParentType,
    ContextType,
    RequireFields<QueryAuthenticationMemberLogsArgs, 'first' | 'member_id' | 'page'>
  >;
  bankCorrespondent?: Resolver<
    ResolversTypes['BankCorrespondent'],
    ParentType,
    ContextType,
    RequireFields<QueryBankCorrespondentArgs, 'id'>
  >;
  bankCorrespondents?: Resolver<
    Maybe<ResolversTypes['BankCorrespondentPaginator']>,
    ParentType,
    ContextType,
    RequireFields<QueryBankCorrespondentsArgs, 'first'>
  >;
  businessActivities?: Resolver<
    Maybe<ResolversTypes['BusinessActivityPaginator']>,
    ParentType,
    ContextType,
    RequireFields<QueryBusinessActivitiesArgs, 'first'>
  >;
  businessActivity?: Resolver<
    Maybe<ResolversTypes['BusinessActivity']>,
    ParentType,
    ContextType,
    Partial<QueryBusinessActivityArgs>
  >;
  clientList?: Resolver<
    ReadonlyArray<ResolversTypes['AccountClient']>,
    ParentType,
    ContextType,
    Partial<QueryClientListArgs>
  >;
  commissionPriceList?: Resolver<
    Maybe<ResolversTypes['CommissionPriceList']>,
    ParentType,
    ContextType,
    Partial<QueryCommissionPriceListArgs>
  >;
  commissionPriceLists?: Resolver<
    Maybe<ResolversTypes['CommissionPriceListPaginator']>,
    ParentType,
    ContextType,
    RequireFields<QueryCommissionPriceListsArgs, 'first'>
  >;
  commissionTemplate?: Resolver<
    Maybe<ResolversTypes['CommissionTemplate']>,
    ParentType,
    ContextType,
    Partial<QueryCommissionTemplateArgs>
  >;
  commissionTemplateLimit?: Resolver<
    Maybe<ResolversTypes['CommissionTemplateLimit']>,
    ParentType,
    ContextType,
    Partial<QueryCommissionTemplateLimitArgs>
  >;
  commissionTemplateLimitActionType?: Resolver<
    Maybe<ResolversTypes['CommissionTemplateLimitActionType']>,
    ParentType,
    ContextType,
    Partial<QueryCommissionTemplateLimitActionTypeArgs>
  >;
  commissionTemplateLimitActionTypes?: Resolver<
    Maybe<ResolversTypes['CommissionTemplateLimitActionTypePaginator']>,
    ParentType,
    ContextType,
    RequireFields<QueryCommissionTemplateLimitActionTypesArgs, 'first'>
  >;
  commissionTemplateLimitPeriod?: Resolver<
    Maybe<ResolversTypes['CommissionTemplateLimitPeriod']>,
    ParentType,
    ContextType,
    Partial<QueryCommissionTemplateLimitPeriodArgs>
  >;
  commissionTemplateLimitPeriods?: Resolver<
    Maybe<ResolversTypes['CommissionTemplateLimitPeriodPaginator']>,
    ParentType,
    ContextType,
    RequireFields<QueryCommissionTemplateLimitPeriodsArgs, 'first'>
  >;
  commissionTemplateLimitTransferDirection?: Resolver<
    Maybe<ResolversTypes['CommissionTemplateLimitTransferDirection']>,
    ParentType,
    ContextType,
    Partial<QueryCommissionTemplateLimitTransferDirectionArgs>
  >;
  commissionTemplateLimitTransferDirections?: Resolver<
    Maybe<ResolversTypes['CommissionTemplateLimitTransferDirectionPaginator']>,
    ParentType,
    ContextType,
    RequireFields<QueryCommissionTemplateLimitTransferDirectionsArgs, 'first'>
  >;
  commissionTemplateLimitType?: Resolver<
    Maybe<ResolversTypes['CommissionTemplateLimitType']>,
    ParentType,
    ContextType,
    Partial<QueryCommissionTemplateLimitTypeArgs>
  >;
  commissionTemplateLimitTypes?: Resolver<
    Maybe<ResolversTypes['CommissionTemplateLimitTypePaginator']>,
    ParentType,
    ContextType,
    RequireFields<QueryCommissionTemplateLimitTypesArgs, 'first'>
  >;
  commissionTemplateLimits?: Resolver<
    Maybe<ResolversTypes['CommissionTemplateLimitPaginator']>,
    ParentType,
    ContextType,
    RequireFields<QueryCommissionTemplateLimitsArgs, 'first'>
  >;
  commissionTemplates?: Resolver<
    Maybe<ResolversTypes['CommissionTemplatePaginator']>,
    ParentType,
    ContextType,
    RequireFields<QueryCommissionTemplatesArgs, 'first'>
  >;
  companies?: Resolver<
    Maybe<ResolversTypes['CompanyPaginator']>,
    ParentType,
    ContextType,
    RequireFields<QueryCompaniesArgs, 'first'>
  >;
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType, Partial<QueryCompanyArgs>>;
  companyModuleIbanProviderPassword?: Resolver<
    Maybe<ResolversTypes['CompanyModuleIbanProviderPassword']>,
    ParentType,
    ContextType,
    RequireFields<QueryCompanyModuleIbanProviderPasswordArgs, 'id'>
  >;
  companyModuleProviderPassword?: Resolver<
    Maybe<ResolversTypes['CompanyModulePaymentProviderPassword']>,
    ParentType,
    ContextType,
    RequireFields<QueryCompanyModuleProviderPasswordArgs, 'id'>
  >;
  companyModules?: Resolver<
    ReadonlyArray<ResolversTypes['CompanyModule']>,
    ParentType,
    ContextType,
    RequireFields<QueryCompanyModulesArgs, 'company_id'>
  >;
  countries?: Resolver<
    Maybe<ResolversTypes['CountryPaginator']>,
    ParentType,
    ContextType,
    RequireFields<QueryCountriesArgs, 'first'>
  >;
  country?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType, Partial<QueryCountryArgs>>;
  currencies?: Resolver<
    Maybe<ResolversTypes['CurrenciesPaginator']>,
    ParentType,
    ContextType,
    RequireFields<QueryCurrenciesArgs, 'first'>
  >;
  currency?: Resolver<Maybe<ResolversTypes['Currencies']>, ParentType, ContextType, Partial<QueryCurrencyArgs>>;
  dashboardAccountsStatistic?: Resolver<
    Maybe<ReadonlyArray<Maybe<ResolversTypes['dashboardAccountsStatistic']>>>,
    ParentType,
    ContextType,
    Partial<QueryDashboardAccountsStatisticArgs>
  >;
  dashboardTicketsStatistic?: Resolver<
    Maybe<ReadonlyArray<Maybe<ResolversTypes['dashboardTicketsStatistic']>>>,
    ParentType,
    ContextType,
    Partial<QueryDashboardTicketsStatisticArgs>
  >;
  dashboardTransfersStatistic?: Resolver<
    Maybe<ReadonlyArray<Maybe<ResolversTypes['dashboardTransfersStatistic']>>>,
    ParentType,
    ContextType,
    Partial<QueryDashboardTransfersStatisticArgs>
  >;
  dashboardUsersStatistic?: Resolver<
    Maybe<ReadonlyArray<Maybe<ResolversTypes['dashboardUsersStatistic']>>>,
    ParentType,
    ContextType,
    Partial<QueryDashboardUsersStatisticArgs>
  >;
  department?: Resolver<Maybe<ResolversTypes['Department']>, ParentType, ContextType, Partial<QueryDepartmentArgs>>;
  departmentPosition?: Resolver<
    Maybe<ResolversTypes['DepartmentPosition']>,
    ParentType,
    ContextType,
    Partial<QueryDepartmentPositionArgs>
  >;
  departmentPositions?: Resolver<
    Maybe<ResolversTypes['DepartmentPositionPaginator']>,
    ParentType,
    ContextType,
    RequireFields<QueryDepartmentPositionsArgs, 'first'>
  >;
  departments?: Resolver<
    Maybe<ResolversTypes['DepartmentPaginator']>,
    ParentType,
    ContextType,
    RequireFields<QueryDepartmentsArgs, 'first'>
  >;
  documentStates?: Resolver<ReadonlyArray<ResolversTypes['DocumentState']>, ParentType, ContextType>;
  documentTypes?: Resolver<ReadonlyArray<ResolversTypes['DocumentType']>, ParentType, ContextType>;
  downloadAccountStatementCsv?: Resolver<
    Maybe<ResolversTypes['RawFile']>,
    ParentType,
    ContextType,
    RequireFields<QueryDownloadAccountStatementCsvArgs, 'account_id'>
  >;
  downloadAccountStatementPdf?: Resolver<
    Maybe<ResolversTypes['RawFile']>,
    ParentType,
    ContextType,
    RequireFields<QueryDownloadAccountStatementPdfArgs, 'account_id'>
  >;
  downloadAccountStatementXls?: Resolver<
    Maybe<ResolversTypes['RawFile']>,
    ParentType,
    ContextType,
    RequireFields<QueryDownloadAccountStatementXlsArgs, 'account_id'>
  >;
  downloadApplicantRequisiteDetails?: Resolver<
    Maybe<ResolversTypes['RawFile']>,
    ParentType,
    ContextType,
    Partial<QueryDownloadApplicantRequisiteDetailsArgs>
  >;
  downloadRequisiteDetails?: Resolver<
    Maybe<ResolversTypes['RawFile']>,
    ParentType,
    ContextType,
    Partial<QueryDownloadRequisiteDetailsArgs>
  >;
  emailNotification?: Resolver<
    Maybe<ResolversTypes['EmailNotification']>,
    ParentType,
    ContextType,
    RequireFields<QueryEmailNotificationArgs, 'company_id' | 'group_role_id' | 'group_type_id'>
  >;
  emailNotifications?: Resolver<
    Maybe<ResolversTypes['EmailNotificationPaginator']>,
    ParentType,
    ContextType,
    RequireFields<QueryEmailNotificationsArgs, 'first'>
  >;
  emailSmtp?: Resolver<
    Maybe<ResolversTypes['EmailSmtp']>,
    ParentType,
    ContextType,
    RequireFields<QueryEmailSmtpArgs, 'id'>
  >;
  emailSmtps?: Resolver<
    ReadonlyArray<ResolversTypes['EmailSmtp']>,
    ParentType,
    ContextType,
    RequireFields<QueryEmailSmtpsArgs, 'company_id'>
  >;
  emailTemplate?: Resolver<
    Maybe<ResolversTypes['EmailTemplate']>,
    ParentType,
    ContextType,
    Partial<QueryEmailTemplateArgs>
  >;
  emailTemplateLayout?: Resolver<
    Maybe<ResolversTypes['EmailTemplateLayout']>,
    ParentType,
    ContextType,
    Partial<QueryEmailTemplateLayoutArgs>
  >;
  emailTemplates?: Resolver<
    ReadonlyArray<ResolversTypes['EmailTemplate']>,
    ParentType,
    ContextType,
    Partial<QueryEmailTemplatesArgs>
  >;
  employees?: Resolver<ReadonlyArray<ResolversTypes['Employee']>, ParentType, ContextType>;
  feeDetails?: Resolver<ResolversTypes['Fee'], ParentType, ContextType, RequireFields<QueryFeeDetailsArgs, 'id'>>;
  feeModes?: Resolver<ReadonlyArray<ResolversTypes['FeeMode']>, ParentType, ContextType>;
  feePeriods?: Resolver<ReadonlyArray<ResolversTypes['FeePeriod']>, ParentType, ContextType>;
  feeTypes?: Resolver<ReadonlyArray<ResolversTypes['FeeType']>, ParentType, ContextType, Partial<QueryFeeTypesArgs>>;
  file?: Resolver<Maybe<ResolversTypes['Files']>, ParentType, ContextType, Partial<QueryFileArgs>>;
  files?: Resolver<
    Maybe<ResolversTypes['FilesPaginator']>,
    ParentType,
    ContextType,
    RequireFields<QueryFilesArgs, 'first'>
  >;
  getMatchedApplicantIndividuals?: Resolver<
    ReadonlyArray<ResolversTypes['ApplicantIndividualCompany']>,
    ParentType,
    ContextType,
    RequireFields<QueryGetMatchedApplicantIndividualsArgs, 'applicant_company_id'>
  >;
  getMatchedUsers?: Resolver<
    ReadonlyArray<ResolversTypes['ApplicantIndividualCompany']>,
    ParentType,
    ContextType,
    RequireFields<QueryGetMatchedUsersArgs, 'applicant_company_id'>
  >;
  getPaymentUrgencys?: Resolver<ReadonlyArray<ResolversTypes['PaymentUrgency']>, ParentType, ContextType>;
  getTicketComments?: Resolver<ReadonlyArray<ResolversTypes['TicketComments']>, ParentType, ContextType>;
  grantedBankingAccess?: Resolver<
    Maybe<ResolversTypes['ApplicantBankingAccesses']>,
    ParentType,
    ContextType,
    RequireFields<QueryGrantedBankingAccessArgs, 'applicant_company_id' | 'applicant_individual_id' | 'first' | 'page'>
  >;
  groupList?: Resolver<
    Maybe<ResolversTypes['GroupRoleViewPaginator']>,
    ParentType,
    ContextType,
    RequireFields<QueryGroupListArgs, 'first'>
  >;
  groupTypeList?: Resolver<
    Maybe<ResolversTypes['GroupTypePaginator']>,
    ParentType,
    ContextType,
    RequireFields<QueryGroupTypeListArgs, 'first'>
  >;
  group_type?: Resolver<Maybe<ResolversTypes['GroupType']>, ParentType, ContextType, Partial<QueryGroup_TypeArgs>>;
  group_types?: Resolver<
    ReadonlyArray<ResolversTypes['GroupType']>,
    ParentType,
    ContextType,
    Partial<QueryGroup_TypesArgs>
  >;
  groups?: Resolver<
    Maybe<ResolversTypes['GroupRolePaginator']>,
    ParentType,
    ContextType,
    RequireFields<QueryGroupsArgs, 'first'>
  >;
  kycTimeline?: Resolver<
    Maybe<ResolversTypes['KycTimeline']>,
    ParentType,
    ContextType,
    RequireFields<QueryKycTimelineArgs, 'id'>
  >;
  kycTimelines?: Resolver<
    Maybe<ResolversTypes['KycTimelines']>,
    ParentType,
    ContextType,
    RequireFields<QueryKycTimelinesArgs, 'applicant_id' | 'applicant_type' | 'company_id' | 'first' | 'page'>
  >;
  language?: Resolver<Maybe<ResolversTypes['Languages']>, ParentType, ContextType, Partial<QueryLanguageArgs>>;
  languages?: Resolver<
    Maybe<ResolversTypes['LanguagesPaginator']>,
    ParentType,
    ContextType,
    RequireFields<QueryLanguagesArgs, 'first'>
  >;
  member?: Resolver<Maybe<ResolversTypes['Members']>, ParentType, ContextType, Partial<QueryMemberArgs>>;
  memberAccessLimitation?: Resolver<
    Maybe<ResolversTypes['MemberAccessLimitation']>,
    ParentType,
    ContextType,
    Partial<QueryMemberAccessLimitationArgs>
  >;
  memberAccessLimitations?: Resolver<
    Maybe<ResolversTypes['MemberAccessLimitationPaginator']>,
    ParentType,
    ContextType,
    RequireFields<QueryMemberAccessLimitationsArgs, 'first' | 'member_id'>
  >;
  memberProfile?: Resolver<Maybe<ResolversTypes['MemberProfile']>, ParentType, ContextType>;
  memberStatuses?: Resolver<ReadonlyArray<ResolversTypes['MemberStatus']>, ParentType, ContextType>;
  members?: Resolver<
    Maybe<ResolversTypes['MembersPaginator']>,
    ParentType,
    ContextType,
    RequireFields<QueryMembersArgs, 'first'>
  >;
  module?: Resolver<Maybe<ResolversTypes['Module']>, ParentType, ContextType, Partial<QueryModuleArgs>>;
  modules?: Resolver<ReadonlyArray<ResolversTypes['Module']>, ParentType, ContextType, Partial<QueryModulesArgs>>;
  modulesWithKyc?: Resolver<
    Maybe<ReadonlyArray<ResolversTypes['Module']>>,
    ParentType,
    ContextType,
    Partial<QueryModulesWithKycArgs>
  >;
  operationTypes?: Resolver<
    ReadonlyArray<ResolversTypes['OperationType']>,
    ParentType,
    ContextType,
    Partial<QueryOperationTypesArgs>
  >;
  owners?: Resolver<
    ReadonlyArray<ResolversTypes['ApplicantIndividual']>,
    ParentType,
    ContextType,
    Partial<QueryOwnersArgs>
  >;
  payment?: Resolver<Maybe<ResolversTypes['Payments']>, ParentType, ContextType, Partial<QueryPaymentArgs>>;
  paymentBank?: Resolver<Maybe<ResolversTypes['PaymentBank']>, ParentType, ContextType, Partial<QueryPaymentBankArgs>>;
  paymentBanks?: Resolver<
    Maybe<ResolversTypes['PaymentBankPaginator']>,
    ParentType,
    ContextType,
    RequireFields<QueryPaymentBanksArgs, 'first'>
  >;
  paymentProvider?: Resolver<
    Maybe<ResolversTypes['PaymentProvider']>,
    ParentType,
    ContextType,
    Partial<QueryPaymentProviderArgs>
  >;
  paymentProviderIban?: Resolver<
    ResolversTypes['PaymentProviderIban'],
    ParentType,
    ContextType,
    RequireFields<QueryPaymentProviderIbanArgs, 'id'>
  >;
  paymentProviderIbans?: Resolver<
    Maybe<ResolversTypes['PaymentProviderIbanPaginator']>,
    ParentType,
    ContextType,
    RequireFields<QueryPaymentProviderIbansArgs, 'first'>
  >;
  paymentProviders?: Resolver<
    Maybe<ResolversTypes['PaymentProviderPaginator']>,
    ParentType,
    ContextType,
    RequireFields<QueryPaymentProvidersArgs, 'first'>
  >;
  paymentStatuses?: Resolver<
    ReadonlyArray<ResolversTypes['PaymentStatus']>,
    ParentType,
    ContextType,
    Partial<QueryPaymentStatusesArgs>
  >;
  paymentSystem?: Resolver<
    Maybe<ResolversTypes['PaymentSystem']>,
    ParentType,
    ContextType,
    Partial<QueryPaymentSystemArgs>
  >;
  paymentSystems?: Resolver<
    Maybe<ResolversTypes['PaymentSystemPaginator']>,
    ParentType,
    ContextType,
    RequireFields<QueryPaymentSystemsArgs, 'first'>
  >;
  paymentSystemsList?: Resolver<ReadonlyArray<ResolversTypes['PaymentSystem']>, ParentType, ContextType>;
  payments?: Resolver<
    Maybe<ResolversTypes['PaymentsPaginator']>,
    ParentType,
    ContextType,
    RequireFields<QueryPaymentsArgs, 'first'>
  >;
  permission?: Resolver<Maybe<ResolversTypes['Permissions']>, ParentType, ContextType, Partial<QueryPermissionArgs>>;
  permissions?: Resolver<
    Maybe<ReadonlyArray<Maybe<ResolversTypes['PermissionCategory']>>>,
    ParentType,
    ContextType,
    Partial<QueryPermissionsArgs>
  >;
  permissions_tree?: Resolver<Maybe<ResolversTypes['Permissions']>, ParentType, ContextType>;
  priceListFees?: Resolver<
    ReadonlyArray<ResolversTypes['PriceListFee']>,
    ParentType,
    ContextType,
    Partial<QueryPriceListFeesArgs>
  >;
  project?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType, Partial<QueryProjectArgs>>;
  projectApiSettingPassword?: Resolver<
    Maybe<ResolversTypes['ProjectApiSettingPassword']>,
    ParentType,
    ContextType,
    RequireFields<QueryProjectApiSettingPasswordArgs, 'id'>
  >;
  projectApiSettings?: Resolver<
    ReadonlyArray<ResolversTypes['ProjectApiSetting']>,
    ParentType,
    ContextType,
    RequireFields<QueryProjectApiSettingsArgs, 'project_id'>
  >;
  projects?: Resolver<
    Maybe<ResolversTypes['ProjectPaginator']>,
    ParentType,
    ContextType,
    RequireFields<QueryProjectsArgs, 'first'>
  >;
  region?: Resolver<ResolversTypes['Region'], ParentType, ContextType, RequireFields<QueryRegionArgs, 'id'>>;
  regions?: Resolver<
    Maybe<ResolversTypes['RegionPaginator']>,
    ParentType,
    ContextType,
    RequireFields<QueryRegionsArgs, 'first'>
  >;
  requisite?: Resolver<Maybe<ResolversTypes['Requisite']>, ParentType, ContextType, Partial<QueryRequisiteArgs>>;
  requisites?: Resolver<
    ReadonlyArray<ResolversTypes['Requisite']>,
    ParentType,
    ContextType,
    Partial<QueryRequisitesArgs>
  >;
  respondentFees?: Resolver<ReadonlyArray<ResolversTypes['RespondentFee']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['Role']>, ParentType, ContextType, Partial<QueryRoleArgs>>;
  roles?: Resolver<
    Maybe<ResolversTypes['RolePaginator']>,
    ParentType,
    ContextType,
    RequireFields<QueryRolesArgs, 'first'>
  >;
  sendApplicantRequisiteDetails?: Resolver<
    Maybe<ResolversTypes['StatusType']>,
    ParentType,
    ContextType,
    RequireFields<QuerySendApplicantRequisiteDetailsArgs, 'account_id' | 'email'>
  >;
  sendRequisiteDetails?: Resolver<
    Maybe<ResolversTypes['StatusType']>,
    ParentType,
    ContextType,
    RequireFields<QuerySendRequisiteDetailsArgs, 'account_id' | 'email'>
  >;
  senders?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['Sender']>>>, ParentType, ContextType>;
  stateReasons?: Resolver<ReadonlyArray<ResolversTypes['StateReason']>, ParentType, ContextType>;
  states?: Resolver<ReadonlyArray<ResolversTypes['State']>, ParentType, ContextType>;
  ticket?: Resolver<Maybe<ResolversTypes['Ticket']>, ParentType, ContextType, Partial<QueryTicketArgs>>;
  ticketComment?: Resolver<
    Maybe<ResolversTypes['TicketComments']>,
    ParentType,
    ContextType,
    Partial<QueryTicketCommentArgs>
  >;
  tickets?: Resolver<
    Maybe<ResolversTypes['TicketPaginator']>,
    ParentType,
    ContextType,
    RequireFields<QueryTicketsArgs, 'first'>
  >;
  transferIncoming?: Resolver<
    ResolversTypes['TransferIncoming'],
    ParentType,
    ContextType,
    RequireFields<QueryTransferIncomingArgs, 'id'>
  >;
  transferIncomingHistory?: Resolver<
    Maybe<ResolversTypes['TransferIncomingHistoryPaginator']>,
    ParentType,
    ContextType,
    RequireFields<QueryTransferIncomingHistoryArgs, 'first' | 'transfer_id'>
  >;
  transferIncomings?: Resolver<
    Maybe<ResolversTypes['TransferIncomingPaginator']>,
    ParentType,
    ContextType,
    RequireFields<QueryTransferIncomingsArgs, 'first'>
  >;
  transferIncomingsStatistic?: Resolver<
    Maybe<ReadonlyArray<Maybe<ResolversTypes['TransferIncomingStatistic']>>>,
    ParentType,
    ContextType,
    Partial<QueryTransferIncomingsStatisticArgs>
  >;
  transferOutgoing?: Resolver<
    ResolversTypes['TransferOutgoing'],
    ParentType,
    ContextType,
    RequireFields<QueryTransferOutgoingArgs, 'id'>
  >;
  transferOutgoingHistory?: Resolver<
    Maybe<ResolversTypes['TransferOutgoingHistoryPaginator']>,
    ParentType,
    ContextType,
    RequireFields<QueryTransferOutgoingHistoryArgs, 'first' | 'transfer_id'>
  >;
  transferOutgoings?: Resolver<
    Maybe<ResolversTypes['TransferOutgoingPaginator']>,
    ParentType,
    ContextType,
    RequireFields<QueryTransferOutgoingsArgs, 'first'>
  >;
  transferOutgoingsStatistic?: Resolver<
    Maybe<ReadonlyArray<Maybe<ResolversTypes['TransferOutgoingStatistic']>>>,
    ParentType,
    ContextType,
    Partial<QueryTransferOutgoingsStatisticArgs>
  >;
  twoFactorAuth?: Resolver<
    Maybe<ResolversTypes['TwoFactorAuthSettings']>,
    ParentType,
    ContextType,
    Partial<QueryTwoFactorAuthArgs>
  >;
  twoFactorsAuth?: Resolver<
    Maybe<ResolversTypes['TwoFactorAuthSettingsPaginator']>,
    ParentType,
    ContextType,
    RequireFields<QueryTwoFactorsAuthArgs, 'first'>
  >;
  typeOfIndustries?: Resolver<ReadonlyArray<ResolversTypes['TypeOfIndustry']>, ParentType, ContextType>;
  userAuthData?: Resolver<ResolversTypes['userAuthResponse'], ParentType, ContextType>;
  users?: Resolver<
    Maybe<ResolversTypes['UsersPaginator']>,
    ParentType,
    ContextType,
    RequireFields<QueryUsersArgs, 'first'>
  >;
};

export type RawFileResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RawFile'] = ResolversParentTypes['RawFile'],
> = {
  base64?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RegionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Region'] = ResolversParentTypes['Region'],
> = {
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  countries?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['Country']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RegionPaginatorResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RegionPaginator'] = ResolversParentTypes['RegionPaginator'],
> = {
  data?: Resolver<ReadonlyArray<ResolversTypes['Region']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RequisiteResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Requisite'] = ResolversParentTypes['Requisite'],
> = {
  account_number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bank?: Resolver<Maybe<ResolversTypes['PaymentBank']>, ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['Currencies']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['ApplicantIndividual']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RespondentFeeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RespondentFee'] = ResolversParentTypes['RespondentFee'],
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RoleResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Role'] = ResolversParentTypes['Role'],
> = {
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  group_type?: Resolver<Maybe<ResolversTypes['GroupType']>, ParentType, ContextType>;
  groups?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['GroupRole']>>>, ParentType, ContextType>;
  groups_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  is_all_companies?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  permission_category_all_member?: Resolver<
    Maybe<ReadonlyArray<Maybe<ResolversTypes['PermissionCategory']>>>,
    ParentType,
    ContextType
  >;
  permissions?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['Permissions']>>>, ParentType, ContextType>;
  permissions_tree?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RolePaginatorResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RolePaginator'] = ResolversParentTypes['RolePaginator'],
> = {
  data?: Resolver<ReadonlyArray<ResolversTypes['Role']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SenderResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Sender'] = ResolversParentTypes['Sender'],
> = {
  sender_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SimplePaginatorInfoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SimplePaginatorInfo'] = ResolversParentTypes['SimplePaginatorInfo'],
> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  currentPage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  firstItem?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  hasMorePages?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  lastItem?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  perPage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['State'] = ResolversParentTypes['State'],
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StateReasonResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['StateReason'] = ResolversParentTypes['StateReason'],
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StatusTypeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['StatusType'] = ResolversParentTypes['StatusType'],
> = {
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface StringIntegerScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['StringInteger'], any> {
  name: 'StringInteger';
}

export type TicketResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Ticket'] = ResolversParentTypes['Ticket'],
> = {
  client?: Resolver<Maybe<ResolversTypes['ApplicantIndividual']>, ParentType, ContextType>;
  comments?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['TicketComments']>>>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  department?: Resolver<Maybe<ResolversTypes['Department']>, ParentType, ContextType>;
  file_object?: Resolver<Maybe<ResolversTypes['Files']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  member?: Resolver<Maybe<ResolversTypes['Members']>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['DepartmentPosition']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['TicketStatus']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TicketCommentsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TicketComments'] = ResolversParentTypes['TicketComments'],
> = {
  client?: Resolver<Maybe<ResolversTypes['ApplicantIndividual']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  file_object?: Resolver<Maybe<ResolversTypes['Files']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ticket?: Resolver<Maybe<ResolversTypes['Ticket']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TicketPaginatorResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TicketPaginator'] = ResolversParentTypes['TicketPaginator'],
> = {
  data?: Resolver<ReadonlyArray<ResolversTypes['Ticket']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TicketStatusResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TicketStatus'] = ResolversParentTypes['TicketStatus'],
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TransferIncomingResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TransferIncoming'] = ResolversParentTypes['TransferIncoming'],
> = {
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  amount_debt?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  bank_message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  channel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['Currencies']>, ParentType, ContextType>;
  execution_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  fee?: Resolver<Maybe<ResolversTypes['Fee']>, ParentType, ContextType>;
  fees?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['Fee']>>>, ParentType, ContextType>;
  files?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['Files']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  payment_bank?: Resolver<Maybe<ResolversTypes['PaymentBank']>, ParentType, ContextType>;
  payment_number?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  payment_operation_type?: Resolver<Maybe<ResolversTypes['OperationType']>, ParentType, ContextType>;
  payment_provider?: Resolver<Maybe<ResolversTypes['PaymentProvider']>, ParentType, ContextType>;
  payment_provider_history?: Resolver<Maybe<ResolversTypes['PaymentProviderHistory']>, ParentType, ContextType>;
  payment_system?: Resolver<Maybe<ResolversTypes['PaymentSystem']>, ParentType, ContextType>;
  payment_urgency?: Resolver<Maybe<ResolversTypes['PaymentUrgency']>, ParentType, ContextType>;
  reason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  recipient?: Resolver<Maybe<ResolversTypes['Client']>, ParentType, ContextType>;
  respondent_fee?: Resolver<Maybe<ResolversTypes['RespondentFee']>, ParentType, ContextType>;
  sender_account?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sender_address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sender_bank_address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sender_bank_country?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType>;
  sender_bank_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sender_bank_swift?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sender_city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sender_country?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType>;
  sender_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sender_state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sender_zip?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['PaymentStatus']>, ParentType, ContextType>;
  system_message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  transfer_type?: Resolver<Maybe<ResolversTypes['TypeOfTransfer']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TransferIncomingHistoryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TransferIncomingHistory'] = ResolversParentTypes['TransferIncomingHistory'],
> = {
  action?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['PaymentStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TransferIncomingHistoryPaginatorResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['TransferIncomingHistoryPaginator'] = ResolversParentTypes['TransferIncomingHistoryPaginator'],
> = {
  data?: Resolver<ReadonlyArray<ResolversTypes['TransferIncomingHistory']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TransferIncomingPaginatorResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['TransferIncomingPaginator'] = ResolversParentTypes['TransferIncomingPaginator'],
> = {
  data?: Resolver<ReadonlyArray<ResolversTypes['TransferIncoming']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TransferIncomingStatisticResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['TransferIncomingStatistic'] = ResolversParentTypes['TransferIncomingStatistic'],
> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TransferOutgoingResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TransferOutgoing'] = ResolversParentTypes['TransferOutgoing'],
> = {
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  amount_debt?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  bank_message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  channel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['Currencies']>, ParentType, ContextType>;
  execution_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  fee?: Resolver<Maybe<ResolversTypes['Fee']>, ParentType, ContextType>;
  fees?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['Fee']>>>, ParentType, ContextType>;
  files?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['Files']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  payment_bank?: Resolver<Maybe<ResolversTypes['PaymentBank']>, ParentType, ContextType>;
  payment_number?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  payment_operation_type?: Resolver<Maybe<ResolversTypes['OperationType']>, ParentType, ContextType>;
  payment_provider?: Resolver<Maybe<ResolversTypes['PaymentProvider']>, ParentType, ContextType>;
  payment_provider_history?: Resolver<Maybe<ResolversTypes['PaymentProviderHistory']>, ParentType, ContextType>;
  payment_system?: Resolver<Maybe<ResolversTypes['PaymentSystem']>, ParentType, ContextType>;
  payment_urgency?: Resolver<Maybe<ResolversTypes['PaymentUrgency']>, ParentType, ContextType>;
  reason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  recipient_account?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  recipient_address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  recipient_bank_address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  recipient_bank_country?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType>;
  recipient_bank_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  recipient_bank_swift?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  recipient_city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  recipient_country?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType>;
  recipient_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  recipient_state?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  recipient_zip?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  requested_by?: Resolver<Maybe<ResolversTypes['Clientable']>, ParentType, ContextType>;
  respondent_fee?: Resolver<Maybe<ResolversTypes['RespondentFee']>, ParentType, ContextType>;
  sender?: Resolver<Maybe<ResolversTypes['Client']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['PaymentStatus']>, ParentType, ContextType>;
  system_message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  transfer_type?: Resolver<Maybe<ResolversTypes['TypeOfTransfer']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  user_type?: Resolver<Maybe<ResolversTypes['UserType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TransferOutgoingHistoryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TransferOutgoingHistory'] = ResolversParentTypes['TransferOutgoingHistory'],
> = {
  action?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['PaymentStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TransferOutgoingHistoryPaginatorResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['TransferOutgoingHistoryPaginator'] = ResolversParentTypes['TransferOutgoingHistoryPaginator'],
> = {
  data?: Resolver<ReadonlyArray<ResolversTypes['TransferOutgoingHistory']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TransferOutgoingPaginatorResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['TransferOutgoingPaginator'] = ResolversParentTypes['TransferOutgoingPaginator'],
> = {
  data?: Resolver<ReadonlyArray<ResolversTypes['TransferOutgoing']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TransferOutgoingStatisticResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['TransferOutgoingStatistic'] = ResolversParentTypes['TransferOutgoingStatistic'],
> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TwoFactorAuthSettingsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TwoFactorAuthSettings'] = ResolversParentTypes['TwoFactorAuthSettings'],
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TwoFactorAuthSettingsPaginatorResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['TwoFactorAuthSettingsPaginator'] = ResolversParentTypes['TwoFactorAuthSettingsPaginator'],
> = {
  data?: Resolver<ReadonlyArray<ResolversTypes['TwoFactorAuthSettings']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TwoFactorAuthTokenResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TwoFactorAuthToken'] = ResolversParentTypes['TwoFactorAuthToken'],
> = {
  auth_token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  two_factor?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TypeOfIndustryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TypeOfIndustry'] = ResolversParentTypes['TypeOfIndustry'],
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TypeOfTransferResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TypeOfTransfer'] = ResolversParentTypes['TypeOfTransfer'],
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Users'] = ResolversParentTypes['Users'],
> = {
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['EMAIL']>, ParentType, ContextType>;
  first_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  group?: Resolver<Maybe<ResolversTypes['GroupRole']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  last_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPaginatorResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UsersPaginator'] = ResolversParentTypes['UsersPaginator'],
> = {
  data?: Resolver<ReadonlyArray<ResolversTypes['Users']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DashboardAccountsStatisticResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['dashboardAccountsStatistic'] = ResolversParentTypes['dashboardAccountsStatistic'],
> = {
  account_state_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  account_state_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  payment_provider_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  payment_provider_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DashboardTicketsStatisticResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['dashboardTicketsStatistic'] = ResolversParentTypes['dashboardTicketsStatistic'],
> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  status_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  status_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DashboardTransfersStatisticResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['dashboardTransfersStatistic'] = ResolversParentTypes['dashboardTransfersStatistic'],
> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  status_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  transfer_type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DashboardUsersStatisticResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['dashboardUsersStatistic'] = ResolversParentTypes['dashboardUsersStatistic'],
> = {
  applicant_type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  status_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserAuthResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['userAuthResponse'] = ResolversParentTypes['userAuthResponse'],
> = {
  data?: Resolver<Maybe<ResolversTypes['Users']>, ParentType, ContextType>;
  permissions?: Resolver<ResolversTypes['PermissionAuth'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Account?: AccountResolvers<ContextType>;
  AccountClient?: AccountClientResolvers<ContextType>;
  AccountGenerateIbanResponse?: AccountGenerateIbanResponseResolvers<ContextType>;
  AccountLimit?: AccountLimitResolvers<ContextType>;
  AccountLimitPaginator?: AccountLimitPaginatorResolvers<ContextType>;
  AccountPaginator?: AccountPaginatorResolvers<ContextType>;
  AccountReachedLimit?: AccountReachedLimitResolvers<ContextType>;
  AccountReachedLimitPaginator?: AccountReachedLimitPaginatorResolvers<ContextType>;
  AccountState?: AccountStateResolvers<ContextType>;
  AccountStatement?: AccountStatementResolvers<ContextType>;
  AccountStatementTransaction?: AccountStatementTransactionResolvers<ContextType>;
  ActiveSession?: ActiveSessionResolvers<ContextType>;
  ActiveSessionMutatorResponse?: ActiveSessionMutatorResponseResolvers<ContextType>;
  ActiveSessions?: ActiveSessionsResolvers<ContextType>;
  ActivityLog?: ActivityLogResolvers<ContextType>;
  ActivityLogs?: ActivityLogsResolvers<ContextType>;
  ApplicantAccount?: ApplicantAccountResolvers<ContextType>;
  ApplicantBankingAccess?: ApplicantBankingAccessResolvers<ContextType>;
  ApplicantBankingAccesses?: ApplicantBankingAccessesResolvers<ContextType>;
  ApplicantCompany?: ApplicantCompanyResolvers<ContextType>;
  ApplicantCompanyBusinessType?: ApplicantCompanyBusinessTypeResolvers<ContextType>;
  ApplicantCompanyBusinessTypePaginator?: ApplicantCompanyBusinessTypePaginatorResolvers<ContextType>;
  ApplicantCompanyLabel?: ApplicantCompanyLabelResolvers<ContextType>;
  ApplicantCompanyLabelPaginator?: ApplicantCompanyLabelPaginatorResolvers<ContextType>;
  ApplicantCompanyModules?: ApplicantCompanyModulesResolvers<ContextType>;
  ApplicantCompanyNotes?: ApplicantCompanyNotesResolvers<ContextType>;
  ApplicantCompanyNotesPaginator?: ApplicantCompanyNotesPaginatorResolvers<ContextType>;
  ApplicantCompanyPaginator?: ApplicantCompanyPaginatorResolvers<ContextType>;
  ApplicantCompanyRiskLevelHistory?: ApplicantCompanyRiskLevelHistoryResolvers<ContextType>;
  ApplicantCompanyRiskLevelHistoryPaginator?: ApplicantCompanyRiskLevelHistoryPaginatorResolvers<ContextType>;
  ApplicantDetailsRequisites?: ApplicantDetailsRequisitesResolvers<ContextType>;
  ApplicantDevice?: ApplicantDeviceResolvers<ContextType>;
  ApplicantDocument?: ApplicantDocumentResolvers<ContextType>;
  ApplicantDocumentInternalNote?: ApplicantDocumentInternalNoteResolvers<ContextType>;
  ApplicantDocumentInternalNotePaginator?: ApplicantDocumentInternalNotePaginatorResolvers<ContextType>;
  ApplicantDocumentPaginator?: ApplicantDocumentPaginatorResolvers<ContextType>;
  ApplicantDocumentRejectDetail?: ApplicantDocumentRejectDetailResolvers<ContextType>;
  ApplicantDocumentTag?: ApplicantDocumentTagResolvers<ContextType>;
  ApplicantDocumentTagCategory?: ApplicantDocumentTagCategoryResolvers<ContextType>;
  ApplicantDocumentTagCategoryPaginator?: ApplicantDocumentTagCategoryPaginatorResolvers<ContextType>;
  ApplicantDocumentTagPaginator?: ApplicantDocumentTagPaginatorResolvers<ContextType>;
  ApplicantIndividual?: ApplicantIndividualResolvers<ContextType>;
  ApplicantIndividualCompany?: ApplicantIndividualCompanyResolvers<ContextType>;
  ApplicantIndividualCompanyPosition?: ApplicantIndividualCompanyPositionResolvers<ContextType>;
  ApplicantIndividualCompanyPositionPaginator?: ApplicantIndividualCompanyPositionPaginatorResolvers<ContextType>;
  ApplicantIndividualCompanyRelation?: ApplicantIndividualCompanyRelationResolvers<ContextType>;
  ApplicantIndividualCompanyRelationPaginator?: ApplicantIndividualCompanyRelationPaginatorResolvers<ContextType>;
  ApplicantIndividualLabel?: ApplicantIndividualLabelResolvers<ContextType>;
  ApplicantIndividualLabelPaginator?: ApplicantIndividualLabelPaginatorResolvers<ContextType>;
  ApplicantIndividualModules?: ApplicantIndividualModulesResolvers<ContextType>;
  ApplicantIndividualNotes?: ApplicantIndividualNotesResolvers<ContextType>;
  ApplicantIndividualNotesPaginator?: ApplicantIndividualNotesPaginatorResolvers<ContextType>;
  ApplicantIndividualPaginator?: ApplicantIndividualPaginatorResolvers<ContextType>;
  ApplicantKycLevel?: ApplicantKycLevelResolvers<ContextType>;
  ApplicantKycLevelPaginator?: ApplicantKycLevelPaginatorResolvers<ContextType>;
  ApplicantLinkedCompany?: ApplicantLinkedCompanyResolvers<ContextType>;
  ApplicantModules?: ApplicantModulesResolvers<ContextType>;
  ApplicantModulesPaginator?: ApplicantModulesPaginatorResolvers<ContextType>;
  ApplicantProfile?: ApplicantProfileResolvers<ContextType>;
  ApplicantRequisites?: ApplicantRequisitesResolvers<ContextType>;
  ApplicantRiskLevel?: ApplicantRiskLevelResolvers<ContextType>;
  ApplicantRiskLevelHistory?: ApplicantRiskLevelHistoryResolvers<ContextType>;
  ApplicantRiskLevelHistoryPaginator?: ApplicantRiskLevelHistoryPaginatorResolvers<ContextType>;
  ApplicantRiskLevelPaginator?: ApplicantRiskLevelPaginatorResolvers<ContextType>;
  ApplicantSettingsProfile?: ApplicantSettingsProfileResolvers<ContextType>;
  ApplicantState?: ApplicantStateResolvers<ContextType>;
  ApplicantStatePaginator?: ApplicantStatePaginatorResolvers<ContextType>;
  ApplicantStateReason?: ApplicantStateReasonResolvers<ContextType>;
  ApplicantStateReasonPaginator?: ApplicantStateReasonPaginatorResolvers<ContextType>;
  ApplicantStatus?: ApplicantStatusResolvers<ContextType>;
  ApplicantStatusPaginator?: ApplicantStatusPaginatorResolvers<ContextType>;
  ApplicantVerificationStatus?: ApplicantVerificationStatusResolvers<ContextType>;
  AuthenticationLog?: AuthenticationLogResolvers<ContextType>;
  AuthenticationLogs?: AuthenticationLogsResolvers<ContextType>;
  BankCorrespondent?: BankCorrespondentResolvers<ContextType>;
  BankCorrespondentPaginator?: BankCorrespondentPaginatorResolvers<ContextType>;
  BusinessActivity?: BusinessActivityResolvers<ContextType>;
  BusinessActivityPaginator?: BusinessActivityPaginatorResolvers<ContextType>;
  Client?: ClientResolvers<ContextType>;
  ClientAccountsDetails?: ClientAccountsDetailsResolvers<ContextType>;
  ClientIpAddress?: ClientIpAddressResolvers<ContextType>;
  Clientable?: ClientableResolvers<ContextType>;
  CommissionPriceList?: CommissionPriceListResolvers<ContextType>;
  CommissionPriceListPaginator?: CommissionPriceListPaginatorResolvers<ContextType>;
  CommissionTemplate?: CommissionTemplateResolvers<ContextType>;
  CommissionTemplateLimit?: CommissionTemplateLimitResolvers<ContextType>;
  CommissionTemplateLimitActionType?: CommissionTemplateLimitActionTypeResolvers<ContextType>;
  CommissionTemplateLimitActionTypePaginator?: CommissionTemplateLimitActionTypePaginatorResolvers<ContextType>;
  CommissionTemplateLimitPaginator?: CommissionTemplateLimitPaginatorResolvers<ContextType>;
  CommissionTemplateLimitPeriod?: CommissionTemplateLimitPeriodResolvers<ContextType>;
  CommissionTemplateLimitPeriodPaginator?: CommissionTemplateLimitPeriodPaginatorResolvers<ContextType>;
  CommissionTemplateLimitTransferDirection?: CommissionTemplateLimitTransferDirectionResolvers<ContextType>;
  CommissionTemplateLimitTransferDirectionPaginator?: CommissionTemplateLimitTransferDirectionPaginatorResolvers<ContextType>;
  CommissionTemplateLimitType?: CommissionTemplateLimitTypeResolvers<ContextType>;
  CommissionTemplateLimitTypePaginator?: CommissionTemplateLimitTypePaginatorResolvers<ContextType>;
  CommissionTemplatePaginator?: CommissionTemplatePaginatorResolvers<ContextType>;
  Company?: CompanyResolvers<ContextType>;
  CompanyModule?: CompanyModuleResolvers<ContextType>;
  CompanyModuleIbanProvider?: CompanyModuleIbanProviderResolvers<ContextType>;
  CompanyModuleIbanProviderPassword?: CompanyModuleIbanProviderPasswordResolvers<ContextType>;
  CompanyModulePaymentProvider?: CompanyModulePaymentProviderResolvers<ContextType>;
  CompanyModulePaymentProviderPassword?: CompanyModulePaymentProviderPasswordResolvers<ContextType>;
  CompanyPaginator?: CompanyPaginatorResolvers<ContextType>;
  Country?: CountryResolvers<ContextType>;
  CountryPaginator?: CountryPaginatorResolvers<ContextType>;
  Currencies?: CurrenciesResolvers<ContextType>;
  CurrenciesPaginator?: CurrenciesPaginatorResolvers<ContextType>;
  Date?: GraphQLScalarType;
  DateEnd?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  DateTimeUtc?: GraphQLScalarType;
  Decimal?: GraphQLScalarType;
  Department?: DepartmentResolvers<ContextType>;
  DepartmentPaginator?: DepartmentPaginatorResolvers<ContextType>;
  DepartmentPosition?: DepartmentPositionResolvers<ContextType>;
  DepartmentPositionPaginator?: DepartmentPositionPaginatorResolvers<ContextType>;
  DocumentState?: DocumentStateResolvers<ContextType>;
  DocumentType?: DocumentTypeResolvers<ContextType>;
  EMAIL?: GraphQLScalarType;
  EmailNotification?: EmailNotificationResolvers<ContextType>;
  EmailNotificationPaginator?: EmailNotificationPaginatorResolvers<ContextType>;
  EmailSmtp?: EmailSmtpResolvers<ContextType>;
  EmailTemplate?: EmailTemplateResolvers<ContextType>;
  EmailTemplateLayout?: EmailTemplateLayoutResolvers<ContextType>;
  EmailTemplateOnCompanyResponse?: EmailTemplateOnCompanyResponseResolvers<ContextType>;
  Employee?: EmployeeResolvers<ContextType>;
  Fee?: FeeResolvers<ContextType>;
  FeeItem?: FeeItemResolvers<ContextType>;
  FeeMode?: FeeModeResolvers<ContextType>;
  FeePeriod?: FeePeriodResolvers<ContextType>;
  FeeType?: FeeTypeResolvers<ContextType>;
  Files?: FilesResolvers<ContextType>;
  FilesPaginator?: FilesPaginatorResolvers<ContextType>;
  GroupRole?: GroupRoleResolvers<ContextType>;
  GroupRolePaginator?: GroupRolePaginatorResolvers<ContextType>;
  GroupRoleProvider?: GroupRoleProviderResolvers<ContextType>;
  GroupRoleView?: GroupRoleViewResolvers<ContextType>;
  GroupRoleViewPaginator?: GroupRoleViewPaginatorResolvers<ContextType>;
  GroupType?: GroupTypeResolvers<ContextType>;
  GroupTypePaginator?: GroupTypePaginatorResolvers<ContextType>;
  Groups?: GroupsResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  KycTimeline?: KycTimelineResolvers<ContextType>;
  KycTimelines?: KycTimelinesResolvers<ContextType>;
  Languages?: LanguagesResolvers<ContextType>;
  LanguagesPaginator?: LanguagesPaginatorResolvers<ContextType>;
  MemberAccessLimitation?: MemberAccessLimitationResolvers<ContextType>;
  MemberAccessLimitationPaginator?: MemberAccessLimitationPaginatorResolvers<ContextType>;
  MemberProfile?: MemberProfileResolvers<ContextType>;
  MemberStatus?: MemberStatusResolvers<ContextType>;
  Members?: MembersResolvers<ContextType>;
  MembersPaginator?: MembersPaginatorResolvers<ContextType>;
  Mixed?: GraphQLScalarType;
  Module?: ModuleResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  OperationType?: OperationTypeResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  PaginatorInfo?: PaginatorInfoResolvers<ContextType>;
  PaymentBank?: PaymentBankResolvers<ContextType>;
  PaymentBankPaginator?: PaymentBankPaginatorResolvers<ContextType>;
  PaymentProvider?: PaymentProviderResolvers<ContextType>;
  PaymentProviderHistory?: PaymentProviderHistoryResolvers<ContextType>;
  PaymentProviderIban?: PaymentProviderIbanResolvers<ContextType>;
  PaymentProviderIbanPaginator?: PaymentProviderIbanPaginatorResolvers<ContextType>;
  PaymentProviderPaginator?: PaymentProviderPaginatorResolvers<ContextType>;
  PaymentStatus?: PaymentStatusResolvers<ContextType>;
  PaymentSystem?: PaymentSystemResolvers<ContextType>;
  PaymentSystemPaginator?: PaymentSystemPaginatorResolvers<ContextType>;
  PaymentUrgency?: PaymentUrgencyResolvers<ContextType>;
  Payments?: PaymentsResolvers<ContextType>;
  PaymentsPaginator?: PaymentsPaginatorResolvers<ContextType>;
  PermissionAuth?: PermissionAuthResolvers<ContextType>;
  PermissionCategory?: PermissionCategoryResolvers<ContextType>;
  PermissionCategoryRole?: PermissionCategoryRoleResolvers<ContextType>;
  PermissionList?: PermissionListResolvers<ContextType>;
  PermissionType?: PermissionTypeResolvers<ContextType>;
  Permissions?: PermissionsResolvers<ContextType>;
  PriceListFee?: PriceListFeeResolvers<ContextType>;
  PriceListFeeCurrency?: PriceListFeeCurrencyResolvers<ContextType>;
  PriceListFeeScheduled?: PriceListFeeScheduledResolvers<ContextType>;
  Project?: ProjectResolvers<ContextType>;
  ProjectApiSetting?: ProjectApiSettingResolvers<ContextType>;
  ProjectApiSettingPassword?: ProjectApiSettingPasswordResolvers<ContextType>;
  ProjectPaginator?: ProjectPaginatorResolvers<ContextType>;
  ProjectSettings?: ProjectSettingsResolvers<ContextType>;
  ProviderType?: ProviderTypeResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RawFile?: RawFileResolvers<ContextType>;
  Region?: RegionResolvers<ContextType>;
  RegionPaginator?: RegionPaginatorResolvers<ContextType>;
  Requisite?: RequisiteResolvers<ContextType>;
  RespondentFee?: RespondentFeeResolvers<ContextType>;
  Role?: RoleResolvers<ContextType>;
  RolePaginator?: RolePaginatorResolvers<ContextType>;
  Sender?: SenderResolvers<ContextType>;
  SimplePaginatorInfo?: SimplePaginatorInfoResolvers<ContextType>;
  State?: StateResolvers<ContextType>;
  StateReason?: StateReasonResolvers<ContextType>;
  StatusType?: StatusTypeResolvers<ContextType>;
  StringInteger?: GraphQLScalarType;
  Ticket?: TicketResolvers<ContextType>;
  TicketComments?: TicketCommentsResolvers<ContextType>;
  TicketPaginator?: TicketPaginatorResolvers<ContextType>;
  TicketStatus?: TicketStatusResolvers<ContextType>;
  TransferIncoming?: TransferIncomingResolvers<ContextType>;
  TransferIncomingHistory?: TransferIncomingHistoryResolvers<ContextType>;
  TransferIncomingHistoryPaginator?: TransferIncomingHistoryPaginatorResolvers<ContextType>;
  TransferIncomingPaginator?: TransferIncomingPaginatorResolvers<ContextType>;
  TransferIncomingStatistic?: TransferIncomingStatisticResolvers<ContextType>;
  TransferOutgoing?: TransferOutgoingResolvers<ContextType>;
  TransferOutgoingHistory?: TransferOutgoingHistoryResolvers<ContextType>;
  TransferOutgoingHistoryPaginator?: TransferOutgoingHistoryPaginatorResolvers<ContextType>;
  TransferOutgoingPaginator?: TransferOutgoingPaginatorResolvers<ContextType>;
  TransferOutgoingStatistic?: TransferOutgoingStatisticResolvers<ContextType>;
  TwoFactorAuthSettings?: TwoFactorAuthSettingsResolvers<ContextType>;
  TwoFactorAuthSettingsPaginator?: TwoFactorAuthSettingsPaginatorResolvers<ContextType>;
  TwoFactorAuthToken?: TwoFactorAuthTokenResolvers<ContextType>;
  TypeOfIndustry?: TypeOfIndustryResolvers<ContextType>;
  TypeOfTransfer?: TypeOfTransferResolvers<ContextType>;
  Users?: UsersResolvers<ContextType>;
  UsersPaginator?: UsersPaginatorResolvers<ContextType>;
  dashboardAccountsStatistic?: DashboardAccountsStatisticResolvers<ContextType>;
  dashboardTicketsStatistic?: DashboardTicketsStatisticResolvers<ContextType>;
  dashboardTransfersStatistic?: DashboardTransfersStatisticResolvers<ContextType>;
  dashboardUsersStatistic?: DashboardUsersStatisticResolvers<ContextType>;
  userAuthResponse?: UserAuthResponseResolvers<ContextType>;
};

export type AllPositionsQueryVariables = Exact<{ [key: string]: never }>;

export type AllPositionsQuery = {
  readonly __typename?: 'Query';
  readonly applicantIndividualCompanyPositions?: {
    readonly __typename?: 'ApplicantIndividualCompanyPositionPaginator';
    readonly data: ReadonlyArray<{
      readonly __typename?: 'ApplicantIndividualCompanyPosition';
      readonly id: string;
      readonly name: string;
    }>;
  } | null;
};

export type AllRelationsQueryVariables = Exact<{ [key: string]: never }>;

export type AllRelationsQuery = {
  readonly __typename?: 'Query';
  readonly applicantIndividualCompanyRelations?: {
    readonly __typename?: 'ApplicantIndividualCompanyRelationPaginator';
    readonly data: ReadonlyArray<{
      readonly __typename?: 'ApplicantIndividualCompanyRelation';
      readonly id: string;
      readonly name: string;
    }>;
  } | null;
};

export const AllPositionsDocument = gql`
  query allPositions {
    applicantIndividualCompanyPositions {
      data {
        id
        name
      }
    }
  }
`;

/**
 * __useAllPositionsQuery__
 *
 * To run a query within a React component, call `useAllPositionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllPositionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllPositionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllPositionsQuery(
  baseOptions?: Apollo.QueryHookOptions<AllPositionsQuery, AllPositionsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllPositionsQuery, AllPositionsQueryVariables>(AllPositionsDocument, options);
}

export function useAllPositionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AllPositionsQuery, AllPositionsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllPositionsQuery, AllPositionsQueryVariables>(AllPositionsDocument, options);
}

export function useAllPositionsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<AllPositionsQuery, AllPositionsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<AllPositionsQuery, AllPositionsQueryVariables>(AllPositionsDocument, options);
}

export type AllPositionsQueryHookResult = ReturnType<typeof useAllPositionsQuery>;
export type AllPositionsLazyQueryHookResult = ReturnType<typeof useAllPositionsLazyQuery>;
export type AllPositionsSuspenseQueryHookResult = ReturnType<typeof useAllPositionsSuspenseQuery>;
export type AllPositionsQueryResult = Apollo.QueryResult<AllPositionsQuery, AllPositionsQueryVariables>;
export const AllRelationsDocument = gql`
  query allRelations {
    applicantIndividualCompanyRelations {
      data {
        id
        name
      }
    }
  }
`;

/**
 * __useAllRelationsQuery__
 *
 * To run a query within a React component, call `useAllRelationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllRelationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllRelationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllRelationsQuery(
  baseOptions?: Apollo.QueryHookOptions<AllRelationsQuery, AllRelationsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllRelationsQuery, AllRelationsQueryVariables>(AllRelationsDocument, options);
}

export function useAllRelationsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AllRelationsQuery, AllRelationsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllRelationsQuery, AllRelationsQueryVariables>(AllRelationsDocument, options);
}

export function useAllRelationsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<AllRelationsQuery, AllRelationsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<AllRelationsQuery, AllRelationsQueryVariables>(AllRelationsDocument, options);
}

export type AllRelationsQueryHookResult = ReturnType<typeof useAllRelationsQuery>;
export type AllRelationsLazyQueryHookResult = ReturnType<typeof useAllRelationsLazyQuery>;
export type AllRelationsSuspenseQueryHookResult = ReturnType<typeof useAllRelationsSuspenseQuery>;
export type AllRelationsQueryResult = Apollo.QueryResult<AllRelationsQuery, AllRelationsQueryVariables>;
