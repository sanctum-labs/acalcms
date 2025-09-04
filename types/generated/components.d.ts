import type { Schema, Struct } from '@strapi/strapi';

export interface ElementsCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_cards';
  info: {
    description: '';
    displayName: 'Card';
    icon: 'folder';
    name: 'card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    picture: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    tag: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.Component<'elements.url', false>;
  };
}

export interface ElementsFeature extends Struct.ComponentSchema {
  collectionName: 'components_elements_features';
  info: {
    displayName: 'Feature';
    icon: 'traffic-light';
    name: 'feature';
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

export interface ElementsFeatureColumn extends Struct.ComponentSchema {
  collectionName: 'components_slices_feature_columns';
  info: {
    description: '';
    displayName: 'Feature column';
    icon: 'align-center';
    name: 'FeatureColumn';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsFeatureRow extends Struct.ComponentSchema {
  collectionName: 'components_slices_feature_rows';
  info: {
    description: '';
    displayName: 'Feature row';
    icon: 'arrows-alt-h';
    name: 'FeatureRow';
  };
  attributes: {
    description: Schema.Attribute.Text;
    link: Schema.Attribute.Component<'links.link', false>;
    media: Schema.Attribute.Media<'images' | 'videos'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsFooterSection extends Struct.ComponentSchema {
  collectionName: 'components_links_footer_sections';
  info: {
    displayName: 'Footer section';
    icon: 'chevron-circle-down';
    name: 'FooterSection';
  };
  attributes: {
    links: Schema.Attribute.Component<'links.link', true>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsLabelAndText extends Struct.ComponentSchema {
  collectionName: 'components_elements_label_and_texts';
  info: {
    description: '';
    displayName: 'Label & text';
  };
  attributes: {
    Label: Schema.Attribute.String & Schema.Attribute.Required;
    Text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsLogos extends Struct.ComponentSchema {
  collectionName: 'components_elements_logos';
  info: {
    displayName: 'Logos';
    icon: 'apple-alt';
    name: 'logos';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsNotificationBanner extends Struct.ComponentSchema {
  collectionName: 'components_elements_notification_banners';
  info: {
    displayName: 'Notification banner';
    icon: 'exclamation';
    name: 'NotificationBanner';
  };
  attributes: {
    text: Schema.Attribute.RichText;
    type: Schema.Attribute.Enumeration<['alert', 'info', 'warning']> &
      Schema.Attribute.Required;
  };
}

export interface ElementsPersonQuote extends Struct.ComponentSchema {
  collectionName: 'components_elements_person_quotes';
  info: {
    displayName: 'Person Quote';
    icon: 'quote';
  };
  attributes: {
    Person: Schema.Attribute.Relation<'oneToOne', 'api::person.person'>;
    Quote: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface ElementsPlan extends Struct.ComponentSchema {
  collectionName: 'components_elements_plans';
  info: {
    displayName: 'Pricing plan';
    icon: 'search-dollar';
    name: 'plan';
  };
  attributes: {
    description: Schema.Attribute.Text;
    features: Schema.Attribute.Component<'elements.feature', true>;
    isRecommended: Schema.Attribute.Boolean;
    name: Schema.Attribute.String;
    price: Schema.Attribute.Decimal;
    pricePeriod: Schema.Attribute.String;
  };
}

export interface ElementsTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_slices_testimonials';
  info: {
    displayName: 'Testimonial';
    icon: 'user-check';
    name: 'Testimonial';
  };
  attributes: {
    authorName: Schema.Attribute.String;
    authorTitle: Schema.Attribute.String;
    link: Schema.Attribute.String;
    logo: Schema.Attribute.Media<'images'>;
    picture: Schema.Attribute.Media<'images'>;
    text: Schema.Attribute.Text;
  };
}

export interface ElementsUrl extends Struct.ComponentSchema {
  collectionName: 'components_elements_urls';
  info: {
    description: '';
    displayName: 'URL';
    icon: 'link';
  };
  attributes: {
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
    icon: 'caret-square-down';
    name: 'Footer';
  };
  attributes: {
    columns: Schema.Attribute.Component<'elements.footer-section', true>;
    logo: Schema.Attribute.Media<'images'>;
    smallText: Schema.Attribute.String;
  };
}

export interface LayoutNavbar extends Struct.ComponentSchema {
  collectionName: 'components_layout_navbars';
  info: {
    description: '';
    displayName: 'Navbar';
    icon: 'map-signs';
    name: 'Navbar';
  };
  attributes: {
    button: Schema.Attribute.Component<'links.button-link', false>;
    links: Schema.Attribute.Component<'links.link', true>;
    logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface LinksButton extends Struct.ComponentSchema {
  collectionName: 'components_links_simple_buttons';
  info: {
    description: '';
    displayName: 'Button';
    icon: 'fingerprint';
    name: 'Button';
  };
  attributes: {
    text: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['primary', 'secondary']>;
  };
}

export interface LinksButtonLink extends Struct.ComponentSchema {
  collectionName: 'components_links_buttons';
  info: {
    description: '';
    displayName: 'Button link';
    icon: 'fingerprint';
    name: 'Button-link';
  };
  attributes: {
    newTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['primary', 'secondary']>;
    url: Schema.Attribute.String;
  };
}

export interface LinksLink extends Struct.ComponentSchema {
  collectionName: 'components_links_links';
  info: {
    description: '';
    displayName: 'Link';
    icon: 'link';
    name: 'Link';
  };
  attributes: {
    newTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface MetaMetadata extends Struct.ComponentSchema {
  collectionName: 'components_meta_metadata';
  info: {
    displayName: 'Metadata';
    icon: 'robot';
    name: 'Metadata';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
    twitterCardType: Schema.Attribute.Enumeration<
      ['summary', 'summary_large_image', 'app', 'player']
    > &
      Schema.Attribute.DefaultTo<'summary'>;
    twitterUsername: Schema.Attribute.String;
  };
}

export interface SectionsBanner extends Struct.ComponentSchema {
  collectionName: 'components_sections_banners';
  info: {
    displayName: 'Banner';
    icon: 'landscape';
  };
  attributes: {
    banner: Schema.Attribute.Media<'images' | 'videos'> &
      Schema.Attribute.Required;
    description: Schema.Attribute.RichText & Schema.Attribute.Required;
  };
}

export interface SectionsBottomActions extends Struct.ComponentSchema {
  collectionName: 'components_slices_bottom_actions';
  info: {
    displayName: 'Bottom actions';
    icon: 'angle-double-right';
    name: 'BottomActions';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'links.button-link', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsCardGrid extends Struct.ComponentSchema {
  collectionName: 'components_sections_card_grids';
  info: {
    description: '';
    displayName: 'Card Grid';
    icon: 'apps';
  };
  attributes: {
    cards: Schema.Attribute.Component<'elements.card', true> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface SectionsFeatureColumnsGroup extends Struct.ComponentSchema {
  collectionName: 'components_slices_feature_columns_groups';
  info: {
    displayName: 'Feature columns group';
    icon: 'star-of-life';
    name: 'FeatureColumnsGroup';
  };
  attributes: {
    features: Schema.Attribute.Component<'elements.feature-column', true>;
  };
}

export interface SectionsFeatureRowsGroup extends Struct.ComponentSchema {
  collectionName: 'components_slices_feature_rows_groups';
  info: {
    displayName: 'Feaures row group';
    icon: 'bars';
    name: 'FeatureRowsGroup';
  };
  attributes: {
    features: Schema.Attribute.Component<'elements.feature-row', true>;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_slices_heroes';
  info: {
    description: '';
    displayName: 'Hero';
    icon: 'heading';
    name: 'Hero';
  };
  attributes: {
    media: Schema.Attribute.Media<'images' | 'videos'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsLargeVideo extends Struct.ComponentSchema {
  collectionName: 'components_slices_large_videos';
  info: {
    displayName: 'Large video';
    icon: 'play-circle';
    name: 'LargeVideo';
  };
  attributes: {
    description: Schema.Attribute.String;
    poster: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
    video: Schema.Attribute.Media<'videos'> & Schema.Attribute.Required;
  };
}

export interface SectionsLeadForm extends Struct.ComponentSchema {
  collectionName: 'components_sections_lead_forms';
  info: {
    description: '';
    displayName: 'Lead form';
    icon: 'at';
    name: 'Lead form';
  };
  attributes: {
    emailPlaceholder: Schema.Attribute.String;
    location: Schema.Attribute.String;
    submitButton: Schema.Attribute.Component<'links.button', false>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsOverview extends Struct.ComponentSchema {
  collectionName: 'components_sections_overviews';
  info: {
    description: '';
    displayName: 'Overview';
    icon: 'pencil';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    Image: Schema.Attribute.Media<'images'>;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsPeopleGroupRow extends Struct.ComponentSchema {
  collectionName: 'components_sections_people_group_rows';
  info: {
    displayName: 'People Group Row';
  };
  attributes: {
    GroupTitle: Schema.Attribute.String & Schema.Attribute.Required;
    people: Schema.Attribute.Relation<'oneToMany', 'api::person.person'>;
  };
}

export interface SectionsPricing extends Struct.ComponentSchema {
  collectionName: 'components_sections_pricings';
  info: {
    displayName: 'Pricing';
    icon: 'dollar-sign';
    name: 'Pricing';
  };
  attributes: {
    plans: Schema.Attribute.Component<'elements.plan', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsRichText extends Struct.ComponentSchema {
  collectionName: 'components_sections_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'text-height';
    name: 'RichText';
  };
  attributes: {
    content: Schema.Attribute.RichText;
  };
}

export interface SectionsTestimonialsGroup extends Struct.ComponentSchema {
  collectionName: 'components_slices_testimonials_groups';
  info: {
    displayName: 'Testimonials group';
    icon: 'user-friends';
    name: 'TestimonialsGroup';
  };
  attributes: {
    description: Schema.Attribute.Text;
    link: Schema.Attribute.Component<'links.link', false>;
    logos: Schema.Attribute.Component<'elements.logos', true>;
    testimonials: Schema.Attribute.Component<'elements.testimonial', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsTitleAndDescription extends Struct.ComponentSchema {
  collectionName: 'components_sections_title_and_descriptions';
  info: {
    displayName: 'TitleAndDescription';
  };
  attributes: {
    Description: Schema.Attribute.RichText & Schema.Attribute.Required;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedMetaSocial extends Struct.ComponentSchema {
  collectionName: 'components_shared_meta_socials';
  info: {
    description: '';
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    description: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    socialNetwork: Schema.Attribute.Enumeration<
      ['Facebook', 'Twitter', 'Email', 'LinkedIn', 'Instagram']
    > &
      Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    Url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
    metaImage: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    metaRobots: Schema.Attribute.String;
    metaSocial: Schema.Attribute.Component<'shared.meta-social', true>;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Schema.Attribute.String;
    structuredData: Schema.Attribute.JSON;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'elements.card': ElementsCard;
      'elements.feature': ElementsFeature;
      'elements.feature-column': ElementsFeatureColumn;
      'elements.feature-row': ElementsFeatureRow;
      'elements.footer-section': ElementsFooterSection;
      'elements.label-and-text': ElementsLabelAndText;
      'elements.logos': ElementsLogos;
      'elements.notification-banner': ElementsNotificationBanner;
      'elements.person-quote': ElementsPersonQuote;
      'elements.plan': ElementsPlan;
      'elements.testimonial': ElementsTestimonial;
      'elements.url': ElementsUrl;
      'layout.footer': LayoutFooter;
      'layout.navbar': LayoutNavbar;
      'links.button': LinksButton;
      'links.button-link': LinksButtonLink;
      'links.link': LinksLink;
      'meta.metadata': MetaMetadata;
      'sections.banner': SectionsBanner;
      'sections.bottom-actions': SectionsBottomActions;
      'sections.card-grid': SectionsCardGrid;
      'sections.feature-columns-group': SectionsFeatureColumnsGroup;
      'sections.feature-rows-group': SectionsFeatureRowsGroup;
      'sections.hero': SectionsHero;
      'sections.large-video': SectionsLargeVideo;
      'sections.lead-form': SectionsLeadForm;
      'sections.overview': SectionsOverview;
      'sections.people-group-row': SectionsPeopleGroupRow;
      'sections.pricing': SectionsPricing;
      'sections.rich-text': SectionsRichText;
      'sections.testimonials-group': SectionsTestimonialsGroup;
      'sections.title-and-description': SectionsTitleAndDescription;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
