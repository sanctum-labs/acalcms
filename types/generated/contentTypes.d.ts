import type { Attribute, Schema } from '@strapi/strapi';

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    description: '';
    displayName: 'Api Token';
    name: 'Api Token';
    pluralName: 'api-tokens';
    singularName: 'api-token';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    expiresAt: Attribute.DateTime;
    lastUsedAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    description: '';
    displayName: 'API Token Permission';
    name: 'API Token Permission';
    pluralName: 'api-token-permissions';
    singularName: 'api-token-permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'Permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'Role';
    pluralName: 'roles';
    singularName: 'role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    description: Attribute.String;
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    description: '';
    displayName: 'Transfer Token';
    name: 'Transfer Token';
    pluralName: 'transfer-tokens';
    singularName: 'transfer-token';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    expiresAt: Attribute.DateTime;
    lastUsedAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    description: '';
    displayName: 'Transfer Token Permission';
    name: 'Transfer Token Permission';
    pluralName: 'transfer-token-permissions';
    singularName: 'transfer-token-permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'User';
    pluralName: 'users';
    singularName: 'user';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    preferedLanguage: Attribute.String;
    registrationToken: Attribute.String & Attribute.Private;
    resetPasswordToken: Attribute.String & Attribute.Private;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    username: Attribute.String;
  };
}

export interface ApiAboutUsMissionPageAboutUsMissionPage
  extends Schema.SingleType {
  collectionName: 'about_us_mission_pages';
  info: {
    description: '';
    displayName: 'About Us / Mission Page';
    pluralName: 'about-us-mission-pages';
    singularName: 'about-us-mission-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    _softDeletedAt: Attribute.DateTime & Attribute.Private;
    _softDeletedById: Attribute.Integer & Attribute.Private;
    _softDeletedByType: Attribute.String & Attribute.Private;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::about-us-mission-page.about-us-mission-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    Hero: Attribute.Component<'sections.hero'>;
    Overview: Attribute.Component<'sections.title-and-description'> &
      Attribute.Required;
    publishedAt: Attribute.DateTime;
    Quote: Attribute.Text;
    Transformation: Attribute.Component<'sections.overview'> &
      Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::about-us-mission-page.about-us-mission-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    Values: Attribute.Component<'sections.title-and-description'>;
    Vision: Attribute.Component<'sections.title-and-description'>;
  };
}

export interface ApiAboutUsOurPeoplePageAboutUsOurPeoplePage
  extends Schema.SingleType {
  collectionName: 'about_us_our_people_pages';
  info: {
    description: '';
    displayName: 'About Us / Our People Page';
    pluralName: 'about-us-our-people-pages';
    singularName: 'about-us-our-people-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    _softDeletedAt: Attribute.DateTime & Attribute.Private;
    _softDeletedById: Attribute.Integer & Attribute.Private;
    _softDeletedByType: Attribute.String & Attribute.Private;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::about-us-our-people-page.about-us-our-people-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    Hero: Attribute.Component<'sections.hero'>;
    Overview: Attribute.Component<'sections.title-and-description'>;
    People: Attribute.Component<'sections.people-group-row', true> &
      Attribute.Required;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::about-us-our-people-page.about-us-our-people-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAboutUsSustainabilityAboutUsSustainability
  extends Schema.SingleType {
  collectionName: 'about_us_sustainabilities';
  info: {
    description: '';
    displayName: 'About Us / Sustainability';
    pluralName: 'about-us-sustainabilities';
    singularName: 'about-us-sustainability';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    _softDeletedAt: Attribute.DateTime & Attribute.Private;
    _softDeletedById: Attribute.Integer & Attribute.Private;
    _softDeletedByType: Attribute.String & Attribute.Private;
    Content: Attribute.Component<'sections.banner', true> & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::about-us-sustainability.about-us-sustainability',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    Hero: Attribute.Component<'sections.hero'> & Attribute.Required;
    Overview: Attribute.Component<'sections.overview'> & Attribute.Required;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::about-us-sustainability.about-us-sustainability',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAboutUsWhoWeAreAboutUsWhoWeAre extends Schema.SingleType {
  collectionName: 'about_us_who_we_ares';
  info: {
    description: '';
    displayName: 'About Us / Who We Are';
    pluralName: 'about-us-who-we-ares';
    singularName: 'about-us-who-we-are';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    _softDeletedAt: Attribute.DateTime & Attribute.Private;
    _softDeletedById: Attribute.Integer & Attribute.Private;
    _softDeletedByType: Attribute.String & Attribute.Private;
    Body: Attribute.RichText & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::about-us-who-we-are.about-us-who-we-are',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    Hero: Attribute.Component<'sections.hero'> & Attribute.Required;
    MediaBanner: Attribute.Media<'images' | 'videos'>;
    Overview: Attribute.Component<'sections.overview'> & Attribute.Required;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::about-us-who-we-are.about-us-who-we-are',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAboutUsAboutUs extends Schema.SingleType {
  collectionName: 'about_uses';
  info: {
    displayName: 'About Us';
    pluralName: 'about-uses';
    singularName: 'about-us';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    _softDeletedAt: Attribute.DateTime & Attribute.Private;
    _softDeletedById: Attribute.Integer & Attribute.Private;
    _softDeletedByType: Attribute.String & Attribute.Private;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::about-us.about-us',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.Text &
      Attribute.DefaultTo<'Being a game changer is in our DNA: get to know our values , our management , our network . Getting in touch with our experts is easy \u2013 wherever you are.'>;
    publishedAt: Attribute.DateTime;
    title: Attribute.String & Attribute.DefaultTo<'About Us'>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::about-us.about-us',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiApproachApproach extends Schema.SingleType {
  collectionName: 'approaches';
  info: {
    description: '';
    displayName: 'About Us / Approach';
    pluralName: 'approaches';
    singularName: 'approach';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    _softDeletedAt: Attribute.DateTime & Attribute.Private;
    _softDeletedById: Attribute.Integer & Attribute.Private;
    _softDeletedByType: Attribute.String & Attribute.Private;
    banner: Attribute.Component<'sections.banner'>;
    body: Attribute.RichText & Attribute.Required;
    clientFocus: Attribute.Component<'sections.card-grid'> & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::approach.approach',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    Hero: Attribute.Component<'sections.hero'>;
    Overview: Attribute.Component<'sections.overview'>;
    publishedAt: Attribute.DateTime;
    quote: Attribute.Text & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::approach.approach',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBusinessAgilityAndContinuityPageBusinessAgilityAndContinuityPage
  extends Schema.SingleType {
  collectionName: 'business_agility_and_continuity_pages';
  info: {
    description: '';
    displayName: 'Business Agility and Continuity Page';
    pluralName: 'business-agility-and-continuity-pages';
    singularName: 'business-agility-and-continuity-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    _softDeletedAt: Attribute.DateTime & Attribute.Private;
    _softDeletedById: Attribute.Integer & Attribute.Private;
    _softDeletedByType: Attribute.String & Attribute.Private;
    BuildResilience: Attribute.Component<'sections.title-and-description'>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::business-agility-and-continuity-page.business-agility-and-continuity-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    Description: Attribute.Component<'sections.title-and-description'>;
    DigitalDiscipline: Attribute.Component<'sections.overview'>;
    Guidelines: Attribute.Component<'sections.title-and-description'>;
    Hero: Attribute.Component<'sections.hero'>;
    Overview: Attribute.Component<'sections.title-and-description'>;
    publishedAt: Attribute.DateTime;
    Quote: Attribute.Text;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::business-agility-and-continuity-page.business-agility-and-continuity-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    ValueProposition: Attribute.Component<'sections.overview'>;
  };
}

export interface ApiCareersOpenRolesPageCareersOpenRolesPage
  extends Schema.SingleType {
  collectionName: 'careers_open_roles_pages';
  info: {
    description: '';
    displayName: 'Careers / Open Roles Page';
    pluralName: 'careers-open-roles-pages';
    singularName: 'careers-open-roles-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    _softDeletedAt: Attribute.DateTime & Attribute.Private;
    _softDeletedById: Attribute.Integer & Attribute.Private;
    _softDeletedByType: Attribute.String & Attribute.Private;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::careers-open-roles-page.careers-open-roles-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    Description: Attribute.Component<'sections.title-and-description'>;
    Hero: Attribute.Component<'sections.hero'>;
    Overview: Attribute.Component<'sections.title-and-description'>;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::careers-open-roles-page.careers-open-roles-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCareersPageCareersPage extends Schema.SingleType {
  collectionName: 'careers_pages';
  info: {
    description: '';
    displayName: 'Careers';
    pluralName: 'careers-pages';
    singularName: 'careers-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    _softDeletedAt: Attribute.DateTime & Attribute.Private;
    _softDeletedById: Attribute.Integer & Attribute.Private;
    _softDeletedByType: Attribute.String & Attribute.Private;
    BuildConnectGrow: Attribute.Component<'sections.title-and-description'>;
    ConnectingAspirations: Attribute.Component<'sections.title-and-description'>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::careers-page.careers-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    FindYourIdealJob: Attribute.Component<'sections.title-and-description'>;
    GrowingLeaders: Attribute.Component<'sections.title-and-description'>;
    Hero: Attribute.Component<'sections.hero'>;
    Overview: Attribute.Component<'sections.title-and-description'>;
    publishedAt: Attribute.DateTime;
    Quote: Attribute.Text;
    Roles: Attribute.Component<'sections.title-and-description'>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::careers-page.careers-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiClientClient extends Schema.CollectionType {
  collectionName: 'clients';
  info: {
    description: '';
    displayName: 'Client';
    pluralName: 'clients';
    singularName: 'client';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    _softDeletedAt: Attribute.DateTime & Attribute.Private;
    _softDeletedById: Attribute.Integer & Attribute.Private;
    _softDeletedByType: Attribute.String & Attribute.Private;
    countOfServicesProvided: Attribute.Integer;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::client.client',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    logo: Attribute.Media<'images'> & Attribute.Required;
    name: Attribute.String & Attribute.Required & Attribute.Unique;
    publishedAt: Attribute.DateTime;
    slug: Attribute.UID<'api::client.client', 'name'>;
    Type: Attribute.Enumeration<['Kenyan', 'International', 'Other']> &
      Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::client.client',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    url: Attribute.Component<'elements.url'>;
  };
}

export interface ApiClientsPageClientsPage extends Schema.SingleType {
  collectionName: 'clients_pages';
  info: {
    displayName: 'Clients Page';
    pluralName: 'clients-pages';
    singularName: 'clients-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    _softDeletedAt: Attribute.DateTime & Attribute.Private;
    _softDeletedById: Attribute.Integer & Attribute.Private;
    _softDeletedByType: Attribute.String & Attribute.Private;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::clients-page.clients-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    Hero: Attribute.Component<'sections.hero'> & Attribute.Required;
    Overview: Attribute.Component<'sections.overview'> & Attribute.Required;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::clients-page.clients-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiExpertiseLandingPageExpertiseLandingPage
  extends Schema.SingleType {
  collectionName: 'expertise_landing_pages';
  info: {
    displayName: 'Expertise Landing Page';
    pluralName: 'expertise-landing-pages';
    singularName: 'expertise-landing-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    _softDeletedAt: Attribute.DateTime & Attribute.Private;
    _softDeletedById: Attribute.Integer & Attribute.Private;
    _softDeletedByType: Attribute.String & Attribute.Private;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::expertise-landing-page.expertise-landing-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    Description: Attribute.RichText & Attribute.Required;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::expertise-landing-page.expertise-landing-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiExpertiseExpertise extends Schema.CollectionType {
  collectionName: 'expertisen';
  info: {
    description: '';
    displayName: 'Expertise';
    pluralName: 'expertisen';
    singularName: 'expertise';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    _softDeletedAt: Attribute.DateTime & Attribute.Private;
    _softDeletedById: Attribute.Integer & Attribute.Private;
    _softDeletedByType: Attribute.String & Attribute.Private;
    banner: Attribute.Media<'images'> & Attribute.Required;
    category: Attribute.Enumeration<['Industries', 'Services']> &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::expertise.expertise',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.RichText & Attribute.Required;
    mediaBanner: Attribute.Media<'images' | 'videos'>;
    name: Attribute.String & Attribute.Required & Attribute.Unique;
    projects: Attribute.Relation<
      'api::expertise.expertise',
      'oneToMany',
      'api::project.project'
    >;
    publishedAt: Attribute.DateTime;
    slug: Attribute.UID<'api::expertise.expertise', 'name'> &
      Attribute.Required;
    title: Attribute.String & Attribute.Required & Attribute.Unique;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::expertise.expertise',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGlobalGlobal extends Schema.SingleType {
  collectionName: 'globals';
  info: {
    displayName: 'Global';
    name: 'global';
    pluralName: 'globals';
    singularName: 'global';
  };
  options: {
    draftAndPublish: false;
    increments: true;
    timestamps: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    _softDeletedAt: Attribute.DateTime & Attribute.Private;
    _softDeletedById: Attribute.Integer & Attribute.Private;
    _softDeletedByType: Attribute.String & Attribute.Private;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::global.global',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    favicon: Attribute.Media<'images'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    footer: Attribute.Component<'layout.footer'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    metadata: Attribute.Component<'meta.metadata'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    metaTitleSuffix: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    navbar: Attribute.Component<'layout.navbar'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    notificationBanner: Attribute.Component<'elements.notification-banner'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::global.global',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHomePageKenyaHomePageKenya extends Schema.SingleType {
  collectionName: 'home_page_kenyas';
  info: {
    description: '';
    displayName: 'Home Page Kenya';
    pluralName: 'home-page-kenyas';
    singularName: 'home-page-kenya';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    _softDeletedAt: Attribute.DateTime & Attribute.Private;
    _softDeletedById: Attribute.Integer & Attribute.Private;
    _softDeletedByType: Attribute.String & Attribute.Private;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::home-page-kenya.home-page-kenya',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    Hero: Attribute.Component<'sections.hero'>;
    JoinTheTeam: Attribute.Component<'elements.card', true>;
    Overview: Attribute.Component<'sections.overview'>;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::home-page-kenya.home-page-kenya',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHomePageMalawiHomePageMalawi extends Schema.SingleType {
  collectionName: 'home_page_malawis';
  info: {
    displayName: 'Home Page Malawi';
    pluralName: 'home-page-malawis';
    singularName: 'home-page-malawi';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    _softDeletedAt: Attribute.DateTime & Attribute.Private;
    _softDeletedById: Attribute.Integer & Attribute.Private;
    _softDeletedByType: Attribute.String & Attribute.Private;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::home-page-malawi.home-page-malawi',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    Hero: Attribute.Component<'sections.hero'>;
    JoinTheTeam: Attribute.Component<'elements.card', true>;
    Overview: Attribute.Component<'sections.overview'>;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::home-page-malawi.home-page-malawi',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHomePageRwandaHomePageRwanda extends Schema.SingleType {
  collectionName: 'home_page_rwandas';
  info: {
    displayName: 'Home Page Rwanda';
    pluralName: 'home-page-rwandas';
    singularName: 'home-page-rwanda';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    _softDeletedAt: Attribute.DateTime & Attribute.Private;
    _softDeletedById: Attribute.Integer & Attribute.Private;
    _softDeletedByType: Attribute.String & Attribute.Private;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::home-page-rwanda.home-page-rwanda',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    Hero: Attribute.Component<'sections.hero'>;
    JoinTheTeam: Attribute.Component<'elements.card', true>;
    Overview: Attribute.Component<'sections.overview'>;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::home-page-rwanda.home-page-rwanda',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHomePageTanzaniaHomePageTanzania extends Schema.SingleType {
  collectionName: 'home_page_tanzanias';
  info: {
    displayName: 'Home Page Tanzania';
    pluralName: 'home-page-tanzanias';
    singularName: 'home-page-tanzania';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    _softDeletedAt: Attribute.DateTime & Attribute.Private;
    _softDeletedById: Attribute.Integer & Attribute.Private;
    _softDeletedByType: Attribute.String & Attribute.Private;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::home-page-tanzania.home-page-tanzania',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    Hero: Attribute.Component<'sections.hero'>;
    JoinTheTeam: Attribute.Component<'elements.card', true>;
    Overview: Attribute.Component<'sections.overview'>;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::home-page-tanzania.home-page-tanzania',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHomePageUgandaHomePageUganda extends Schema.SingleType {
  collectionName: 'home_page_ugandas';
  info: {
    displayName: 'Home Page Uganda';
    pluralName: 'home-page-ugandas';
    singularName: 'home-page-uganda';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    _softDeletedAt: Attribute.DateTime & Attribute.Private;
    _softDeletedById: Attribute.Integer & Attribute.Private;
    _softDeletedByType: Attribute.String & Attribute.Private;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::home-page-uganda.home-page-uganda',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    Hero: Attribute.Component<'sections.hero'>;
    JoinTheTeam: Attribute.Component<'elements.card', true>;
    Overview: Attribute.Component<'sections.overview'>;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::home-page-uganda.home-page-uganda',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHomeHome extends Schema.SingleType {
  collectionName: 'homes';
  info: {
    description: '';
    displayName: 'Home Page';
    pluralName: 'homes';
    singularName: 'home';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    _softDeletedAt: Attribute.DateTime & Attribute.Private;
    _softDeletedById: Attribute.Integer & Attribute.Private;
    _softDeletedByType: Attribute.String & Attribute.Private;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::home.home', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    Hero: Attribute.Component<'sections.hero'> & Attribute.Required;
    JoinTheTeam: Attribute.Component<'elements.card', true> &
      Attribute.Required;
    Overview: Attribute.Component<'sections.overview'>;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<'api::home.home', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiInsightInsight extends Schema.CollectionType {
  collectionName: 'insights';
  info: {
    description: '';
    displayName: 'Insight';
    pluralName: 'insights';
    singularName: 'insight';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    _softDeletedAt: Attribute.DateTime & Attribute.Private;
    _softDeletedById: Attribute.Integer & Attribute.Private;
    _softDeletedByType: Attribute.String & Attribute.Private;
    AuthorQuote: Attribute.Component<'elements.person-quote', true>;
    Body: Attribute.RichText & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::insight.insight',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    Hero: Attribute.Component<'sections.hero'> & Attribute.Required;
    Image: Attribute.Media<'images'> & Attribute.Required;
    Name: Attribute.String & Attribute.Required;
    Overview: Attribute.Component<'sections.overview'> & Attribute.Required;
    people: Attribute.Relation<
      'api::insight.insight',
      'oneToMany',
      'api::person.person'
    >;
    publishedAt: Attribute.DateTime;
    RelatedInsights: Attribute.Relation<
      'api::insight.insight',
      'oneToMany',
      'api::insight.insight'
    >;
    slug: Attribute.UID<'api::insight.insight', 'Name'> & Attribute.Required;
    Type: Attribute.Enumeration<
      ['Article', 'Publication', 'Study', 'Topic', 'Report']
    > &
      Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::insight.insight',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiInsightsPageInsightsPage extends Schema.SingleType {
  collectionName: 'insights_pages';
  info: {
    description: '';
    displayName: 'Insights Landing Page';
    pluralName: 'insights-pages';
    singularName: 'insights-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    _softDeletedAt: Attribute.DateTime & Attribute.Private;
    _softDeletedById: Attribute.Integer & Attribute.Private;
    _softDeletedByType: Attribute.String & Attribute.Private;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::insights-page.insights-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    Hero: Attribute.Component<'sections.hero'>;
    insights: Attribute.Relation<
      'api::insights-page.insights-page',
      'oneToMany',
      'api::insight.insight'
    >;
    Overview: Attribute.Component<'sections.overview'> & Attribute.Required;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::insights-page.insights-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiJobApplicationJobApplication extends Schema.CollectionType {
  collectionName: 'job_applications';
  info: {
    description: '';
    displayName: 'Job Application';
    pluralName: 'job-applications';
    singularName: 'job-application';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    _softDeletedAt: Attribute.DateTime & Attribute.Private;
    _softDeletedById: Attribute.Integer & Attribute.Private;
    _softDeletedByType: Attribute.String & Attribute.Private;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::job-application.job-application',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    email: Attribute.Email & Attribute.Required;
    firstName: Attribute.String & Attribute.Required;
    job: Attribute.Relation<
      'api::job-application.job-application',
      'manyToOne',
      'api::job.job'
    >;
    lastName: Attribute.String & Attribute.Required;
    message: Attribute.Text;
    phoneNumber: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<'plugin::strapi-phone-validator.phone'>;
    publishedAt: Attribute.DateTime;
    resume: Attribute.Media<'files'> & Attribute.Required;
    status: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::job-application.job-application',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiJobJob extends Schema.CollectionType {
  collectionName: 'jobs';
  info: {
    description: '';
    displayName: 'Job';
    pluralName: 'jobs';
    singularName: 'job';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    _softDeletedAt: Attribute.DateTime & Attribute.Private;
    _softDeletedById: Attribute.Integer & Attribute.Private;
    _softDeletedByType: Attribute.String & Attribute.Private;
    available: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    closingDate: Attribute.Date & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::job.job', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    department: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    howToApply: Attribute.RichText;
    job_applications: Attribute.Relation<
      'api::job.job',
      'oneToMany',
      'api::job-application.job-application'
    >;
    jobSpecifications: Attribute.RichText;
    keyCompetenciesAndSkills: Attribute.RichText;
    level: Attribute.String & Attribute.Required;
    location: Attribute.String & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    personSpecifications: Attribute.RichText;
    publishedAt: Attribute.DateTime;
    requirements: Attribute.RichText & Attribute.Required;
    responsibilities: Attribute.RichText & Attribute.Required;
    salary: Attribute.BigInteger;
    slug: Attribute.UID<'api::job.job', 'name'> & Attribute.Required;
    termsOfService: Attribute.RichText;
    type: Attribute.Enumeration<
      [
        'Permanent Full Time',
        'Permanent Part Time',
        'Temporary Full Time',
        'Temporary Part Time'
      ]
    > &
      Attribute.Required &
      Attribute.DefaultTo<'Permanent Full Time'>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<'api::job.job', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiJobadvertJobadvert extends Schema.CollectionType {
  collectionName: 'jobadverts';
  info: {
    displayName: 'Job Adverts';
    pluralName: 'jobadverts';
    singularName: 'jobadvert';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    _softDeletedAt: Attribute.DateTime & Attribute.Private;
    _softDeletedById: Attribute.Integer & Attribute.Private;
    _softDeletedByType: Attribute.String & Attribute.Private;
    Advert: Attribute.Media<'files'> & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::jobadvert.jobadvert',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    publishedAt: Attribute.DateTime;
    slug: Attribute.UID<'api::jobadvert.jobadvert', 'Title'> &
      Attribute.Required;
    Title: Attribute.String & Attribute.Required & Attribute.Unique;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::jobadvert.jobadvert',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLandValueCaptureLandValueCapture extends Schema.SingleType {
  collectionName: 'land_value_captures';
  info: {
    description: '';
    displayName: 'Land Value Capture Page';
    pluralName: 'land-value-captures';
    singularName: 'land-value-capture';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    _softDeletedAt: Attribute.DateTime & Attribute.Private;
    _softDeletedById: Attribute.Integer & Attribute.Private;
    _softDeletedByType: Attribute.String & Attribute.Private;
    Background: Attribute.Component<'sections.overview'> & Attribute.Required;
    Benefits: Attribute.Component<'sections.overview'>;
    Case: Attribute.Component<'sections.overview'>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::land-value-capture.land-value-capture',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    Description: Attribute.Component<'sections.overview'> & Attribute.Required;
    Hero: Attribute.Component<'sections.hero'>;
    Overview: Attribute.Component<'sections.title-and-description'>;
    publishedAt: Attribute.DateTime;
    Report: Attribute.Media<'images' | 'files'>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::land-value-capture.land-value-capture',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLeadFormSubmissionLeadFormSubmission
  extends Schema.CollectionType {
  collectionName: 'lead_form_submissions';
  info: {
    displayName: 'Lead form submission';
    name: 'lead-form-submission';
    pluralName: 'lead-form-submissions';
    singularName: 'lead-form-submission';
  };
  options: {
    draftAndPublish: false;
    increments: true;
    timestamps: true;
  };
  attributes: {
    _softDeletedAt: Attribute.DateTime & Attribute.Private;
    _softDeletedById: Attribute.Integer & Attribute.Private;
    _softDeletedByType: Attribute.String & Attribute.Private;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::lead-form-submission.lead-form-submission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    email: Attribute.String;
    location: Attribute.String;
    status: Attribute.Enumeration<['seen', 'contacted', 'ignored']>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::lead-form-submission.lead-form-submission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLeadershipPageLeadershipPage extends Schema.SingleType {
  collectionName: 'leadership_pages';
  info: {
    description: '';
    displayName: 'Leadership Page';
    pluralName: 'leadership-pages';
    singularName: 'leadership-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    _softDeletedAt: Attribute.DateTime & Attribute.Private;
    _softDeletedById: Attribute.Integer & Attribute.Private;
    _softDeletedByType: Attribute.String & Attribute.Private;
    BusinessAndContinuity: Attribute.Component<'sections.title-and-description'> &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::leadership-page.leadership-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    Description: Attribute.Component<'sections.title-and-description'> &
      Attribute.Required;
    Framework: Attribute.Media<'images' | 'files'>;
    Hero: Attribute.Component<'sections.hero'>;
    HowWeWork: Attribute.Component<'sections.overview'>;
    Overview: Attribute.Component<'sections.title-and-description'> &
      Attribute.Required;
    publishedAt: Attribute.DateTime;
    Quote: Attribute.Text;
    team: Attribute.Relation<
      'api::leadership-page.leadership-page',
      'oneToMany',
      'api::person.person'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::leadership-page.leadership-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    WhatWeDo: Attribute.Component<'sections.overview'> & Attribute.Required;
  };
}

export interface ApiLocationLocation extends Schema.CollectionType {
  collectionName: 'locations';
  info: {
    description: '';
    displayName: 'Location';
    pluralName: 'locations';
    singularName: 'location';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    _softDeletedAt: Attribute.DateTime & Attribute.Private;
    _softDeletedById: Attribute.Integer & Attribute.Private;
    _softDeletedByType: Attribute.String & Attribute.Private;
    building: Attribute.String;
    city: Attribute.String & Attribute.Required;
    communication: Attribute.Component<'elements.label-and-text', true>;
    country: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<'plugin::country-select.country'>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::location.location',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    postOfficeBox: Attribute.String;
    publishedAt: Attribute.DateTime;
    slug: Attribute.UID<'api::location.location', 'city'>;
    street: Attribute.String & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::location.location',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPagePage extends Schema.CollectionType {
  collectionName: 'pages';
  info: {
    displayName: 'Page';
    name: 'page';
    pluralName: 'pages';
    singularName: 'page';
  };
  options: {
    draftAndPublish: true;
    increments: true;
    timestamps: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    _softDeletedAt: Attribute.DateTime & Attribute.Private;
    _softDeletedById: Attribute.Integer & Attribute.Private;
    _softDeletedByType: Attribute.String & Attribute.Private;
    contentSections: Attribute.DynamicZone<
      [
        'sections.hero',
        'sections.bottom-actions',
        'sections.feature-columns-group',
        'sections.feature-rows-group',
        'sections.testimonials-group',
        'sections.large-video',
        'sections.rich-text',
        'sections.pricing',
        'sections.lead-form'
      ]
    > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::page.page', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    metadata: Attribute.Component<'meta.metadata'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    publishedAt: Attribute.DateTime;
    shortName: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    slug: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<'api::page.page', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiPersonPerson extends Schema.CollectionType {
  collectionName: 'people';
  info: {
    description: '';
    displayName: 'People';
    pluralName: 'people';
    singularName: 'person';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    _softDeletedAt: Attribute.DateTime & Attribute.Private;
    _softDeletedById: Attribute.Integer & Attribute.Private;
    _softDeletedByType: Attribute.String & Attribute.Private;
    Avatar: Attribute.Media<'images'> & Attribute.Required;
    Bio: Attribute.Text & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::person.person',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    expertise: Attribute.Relation<
      'api::person.person',
      'oneToMany',
      'api::expertise.expertise'
    >;
    JobTitle: Attribute.String & Attribute.Required;
    Location: Attribute.String;
    Name: Attribute.String & Attribute.Required & Attribute.Unique;
    PhoneNumber: Attribute.String &
      Attribute.CustomField<
        'plugin::strapi-phone-validator.phone',
        {
          country: 'ke';
        }
      >;
    publishedAt: Attribute.DateTime;
    Quote: Attribute.Text;
    slug: Attribute.UID<'api::person.person', 'Name'> & Attribute.Required;
    Social: Attribute.Component<'shared.meta-social', true> &
      Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::person.person',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPrivacyNoticePagePrivacyNoticePage
  extends Schema.SingleType {
  collectionName: 'privacy_notice_pages';
  info: {
    displayName: 'Information / Privacy Notice Page';
    pluralName: 'privacy-notice-pages';
    singularName: 'privacy-notice-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    _softDeletedAt: Attribute.DateTime & Attribute.Private;
    _softDeletedById: Attribute.Integer & Attribute.Private;
    _softDeletedByType: Attribute.String & Attribute.Private;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::privacy-notice-page.privacy-notice-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    Description: Attribute.Component<'sections.title-and-description'>;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::privacy-notice-page.privacy-notice-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProjectProject extends Schema.CollectionType {
  collectionName: 'projects';
  info: {
    description: '';
    displayName: 'Project';
    pluralName: 'projects';
    singularName: 'project';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    _softDeletedAt: Attribute.DateTime & Attribute.Private;
    _softDeletedById: Attribute.Integer & Attribute.Private;
    _softDeletedByType: Attribute.String & Attribute.Private;
    Abbreviation: Attribute.String & Attribute.Required & Attribute.Unique;
    Approach: Attribute.Component<'sections.overview'>;
    Assignment: Attribute.RichText & Attribute.Required;
    Background: Attribute.RichText & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::project.project',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    Description: Attribute.Text & Attribute.Required;
    expertise: Attribute.Relation<
      'api::project.project',
      'manyToOne',
      'api::expertise.expertise'
    >;
    Goal: Attribute.RichText;
    Image: Attribute.Media<'images'> & Attribute.Required;
    Impact: Attribute.RichText;
    Name: Attribute.String & Attribute.Required & Attribute.Unique;
    ProjectDetails: Attribute.Component<'elements.label-and-text', true> &
      Attribute.Required;
    ProjectType: Attribute.String & Attribute.Required;
    publishedAt: Attribute.DateTime;
    Rank: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Attribute.DefaultTo<999>;
    Scope: Attribute.RichText;
    slug: Attribute.UID<'api::project.project', 'Name'> & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::project.project',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiServicesLandingPageServicesLandingPage
  extends Schema.SingleType {
  collectionName: 'services_landing_pages';
  info: {
    displayName: 'Services Landing Page';
    pluralName: 'services-landing-pages';
    singularName: 'services-landing-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    _softDeletedAt: Attribute.DateTime & Attribute.Private;
    _softDeletedById: Attribute.Integer & Attribute.Private;
    _softDeletedByType: Attribute.String & Attribute.Private;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::services-landing-page.services-landing-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    Description: Attribute.RichText & Attribute.Required;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::services-landing-page.services-landing-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSocialMediaLinkSocialMediaLink
  extends Schema.CollectionType {
  collectionName: 'social_media_links';
  info: {
    displayName: 'Social Media Link';
    pluralName: 'social-media-links';
    singularName: 'social-media-link';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    _softDeletedAt: Attribute.DateTime & Attribute.Private;
    _softDeletedById: Attribute.Integer & Attribute.Private;
    _softDeletedByType: Attribute.String & Attribute.Private;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::social-media-link.social-media-link',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    publishedAt: Attribute.DateTime;
    slug: Attribute.UID<'api::social-media-link.social-media-link', 'title'> &
      Attribute.Required;
    title: Attribute.String & Attribute.Required & Attribute.Unique;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::social-media-link.social-media-link',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    url: Attribute.String & Attribute.Required & Attribute.Unique;
  };
}

export interface ApiTheNeedTheNeed extends Schema.SingleType {
  collectionName: 'the_needs';
  info: {
    description: '';
    displayName: 'About Us / The Need';
    pluralName: 'the-needs';
    singularName: 'the-need';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    _softDeletedAt: Attribute.DateTime & Attribute.Private;
    _softDeletedById: Attribute.Integer & Attribute.Private;
    _softDeletedByType: Attribute.String & Attribute.Private;
    body: Attribute.RichText & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::the-need.the-need',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    Hero: Attribute.Component<'sections.hero'> & Attribute.Required;
    Overview: Attribute.Component<'sections.overview'>;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::the-need.the-need',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    displayName: 'Release';
    pluralName: 'releases';
    singularName: 'release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    scheduledAt: Attribute.DateTime;
    status: Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Attribute.Required;
    timezone: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
  collectionName: 'strapi_release_actions';
  info: {
    displayName: 'Release Action';
    pluralName: 'release-actions';
    singularName: 'release-action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentType: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    isEntryValid: Attribute.Boolean;
    locale: Attribute.String;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginEntityNotesNote extends Schema.CollectionType {
  collectionName: 'notes';
  info: {
    displayName: 'notes';
    pluralName: 'notes';
    singularName: 'note';
  };
  options: {
    comment: '';
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    content: Attribute.Text;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::entity-notes.note',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    entityId: Attribute.Integer;
    entitySlug: Attribute.String;
    title: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::entity-notes.note',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginGraphsBuilderGraph extends Schema.CollectionType {
  collectionName: 'graphs_builder_graph';
  info: {
    description: '';
    displayName: 'Graph';
    name: 'graph';
    pluralName: 'graphs';
    singularName: 'graph';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  pluginOptions: {
    'content-manager': {
      visible: true;
    };
    'content-type-builder': {
      visible: true;
    };
  };
  attributes: {
    collectionX: Attribute.String & Attribute.Required;
    collectionXAttribute: Attribute.String;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::graphs-builder.graph',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    title: Attribute.String & Attribute.Required;
    type: Attribute.Enumeration<['pie', 'bar', 'line', 'dateLine']> &
      Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::graphs-builder.graph',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginPublisherAction extends Schema.CollectionType {
  collectionName: 'actions';
  info: {
    displayName: 'actions';
    pluralName: 'actions';
    singularName: 'action';
  };
  options: {
    comment: '';
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::publisher.action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    entityId: Attribute.Integer;
    entitySlug: Attribute.String;
    executeAt: Attribute.DateTime;
    mode: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::publisher.action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginSlugifySlug extends Schema.CollectionType {
  collectionName: 'slugs';
  info: {
    displayName: 'slug';
    pluralName: 'slugs';
    singularName: 'slug';
  };
  options: {
    comment: '';
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    count: Attribute.Integer;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::slugify.slug',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    slug: Attribute.Text;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::slugify.slug',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    description: '';
    displayName: 'File';
    pluralName: 'files';
    singularName: 'file';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    alternativeText: Attribute.String;
    caption: Attribute.String;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    ext: Attribute.String;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    height: Attribute.Integer;
    mime: Attribute.String & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    size: Attribute.Decimal & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    url: Attribute.String & Attribute.Required;
    width: Attribute.Integer;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    displayName: 'Folder';
    pluralName: 'folders';
    singularName: 'folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'role';
    pluralName: 'roles';
    singularName: 'role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.String;
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    type: Attribute.String & Attribute.Unique;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'user';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    resetPasswordToken: Attribute.String & Attribute.Private;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::permission': AdminPermission;
      'admin::role': AdminRole;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'admin::user': AdminUser;
      'api::about-us-mission-page.about-us-mission-page': ApiAboutUsMissionPageAboutUsMissionPage;
      'api::about-us-our-people-page.about-us-our-people-page': ApiAboutUsOurPeoplePageAboutUsOurPeoplePage;
      'api::about-us-sustainability.about-us-sustainability': ApiAboutUsSustainabilityAboutUsSustainability;
      'api::about-us-who-we-are.about-us-who-we-are': ApiAboutUsWhoWeAreAboutUsWhoWeAre;
      'api::about-us.about-us': ApiAboutUsAboutUs;
      'api::approach.approach': ApiApproachApproach;
      'api::business-agility-and-continuity-page.business-agility-and-continuity-page': ApiBusinessAgilityAndContinuityPageBusinessAgilityAndContinuityPage;
      'api::careers-open-roles-page.careers-open-roles-page': ApiCareersOpenRolesPageCareersOpenRolesPage;
      'api::careers-page.careers-page': ApiCareersPageCareersPage;
      'api::client.client': ApiClientClient;
      'api::clients-page.clients-page': ApiClientsPageClientsPage;
      'api::expertise-landing-page.expertise-landing-page': ApiExpertiseLandingPageExpertiseLandingPage;
      'api::expertise.expertise': ApiExpertiseExpertise;
      'api::global.global': ApiGlobalGlobal;
      'api::home-page-kenya.home-page-kenya': ApiHomePageKenyaHomePageKenya;
      'api::home-page-malawi.home-page-malawi': ApiHomePageMalawiHomePageMalawi;
      'api::home-page-rwanda.home-page-rwanda': ApiHomePageRwandaHomePageRwanda;
      'api::home-page-tanzania.home-page-tanzania': ApiHomePageTanzaniaHomePageTanzania;
      'api::home-page-uganda.home-page-uganda': ApiHomePageUgandaHomePageUganda;
      'api::home.home': ApiHomeHome;
      'api::insight.insight': ApiInsightInsight;
      'api::insights-page.insights-page': ApiInsightsPageInsightsPage;
      'api::job-application.job-application': ApiJobApplicationJobApplication;
      'api::job.job': ApiJobJob;
      'api::jobadvert.jobadvert': ApiJobadvertJobadvert;
      'api::land-value-capture.land-value-capture': ApiLandValueCaptureLandValueCapture;
      'api::lead-form-submission.lead-form-submission': ApiLeadFormSubmissionLeadFormSubmission;
      'api::leadership-page.leadership-page': ApiLeadershipPageLeadershipPage;
      'api::location.location': ApiLocationLocation;
      'api::page.page': ApiPagePage;
      'api::person.person': ApiPersonPerson;
      'api::privacy-notice-page.privacy-notice-page': ApiPrivacyNoticePagePrivacyNoticePage;
      'api::project.project': ApiProjectProject;
      'api::services-landing-page.services-landing-page': ApiServicesLandingPageServicesLandingPage;
      'api::social-media-link.social-media-link': ApiSocialMediaLinkSocialMediaLink;
      'api::the-need.the-need': ApiTheNeedTheNeed;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::entity-notes.note': PluginEntityNotesNote;
      'plugin::graphs-builder.graph': PluginGraphsBuilderGraph;
      'plugin::publisher.action': PluginPublisherAction;
      'plugin::slugify.slug': PluginSlugifySlug;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
    }
  }
}
