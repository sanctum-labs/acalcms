import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media<'images' | 'files' | 'videos'>;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
    description: '';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<
      ['Facebook', 'Twitter', 'Email', 'LinkedIn', 'Instagram']
    > &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media<'images' | 'files' | 'videos'>;
    Url: Attribute.String & Attribute.Required;
  };
}

export interface SectionsTitleAndDescription extends Schema.Component {
  collectionName: 'components_sections_title_and_descriptions';
  info: {
    displayName: 'TitleAndDescription';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    Description: Attribute.RichText & Attribute.Required;
  };
}

export interface SectionsTestimonialsGroup extends Schema.Component {
  collectionName: 'components_slices_testimonials_groups';
  info: {
    name: 'TestimonialsGroup';
    displayName: 'Testimonials group';
    icon: 'user-friends';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    link: Attribute.Component<'links.link'>;
    logos: Attribute.Component<'elements.logos', true>;
    testimonials: Attribute.Component<'elements.testimonial', true>;
  };
}

export interface SectionsRichText extends Schema.Component {
  collectionName: 'components_sections_rich_texts';
  info: {
    name: 'RichText';
    displayName: 'Rich text';
    icon: 'text-height';
  };
  attributes: {
    content: Attribute.RichText;
  };
}

export interface SectionsPricing extends Schema.Component {
  collectionName: 'components_sections_pricings';
  info: {
    name: 'Pricing';
    displayName: 'Pricing';
    icon: 'dollar-sign';
  };
  attributes: {
    title: Attribute.String;
    plans: Attribute.Component<'elements.plan', true>;
  };
}

export interface SectionsPeopleGroupRow extends Schema.Component {
  collectionName: 'components_sections_people_group_rows';
  info: {
    displayName: 'People Group Row';
  };
  attributes: {
    GroupTitle: Attribute.String & Attribute.Required;
    people: Attribute.Relation<
      'sections.people-group-row',
      'oneToMany',
      'api::person.person'
    >;
  };
}

export interface SectionsOverview extends Schema.Component {
  collectionName: 'components_sections_overviews';
  info: {
    displayName: 'Overview';
    icon: 'pencil';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    Image: Attribute.Media<'images'>;
    description: Attribute.RichText;
  };
}

export interface SectionsLeadForm extends Schema.Component {
  collectionName: 'components_sections_lead_forms';
  info: {
    name: 'Lead form';
    displayName: 'Lead form';
    icon: 'at';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    emailPlaceholder: Attribute.String;
    submitButton: Attribute.Component<'links.button'>;
    location: Attribute.String;
  };
}

export interface SectionsLargeVideo extends Schema.Component {
  collectionName: 'components_slices_large_videos';
  info: {
    name: 'LargeVideo';
    displayName: 'Large video';
    icon: 'play-circle';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    video: Attribute.Media<'videos'> & Attribute.Required;
    poster: Attribute.Media<'images'>;
  };
}

export interface SectionsHero extends Schema.Component {
  collectionName: 'components_slices_heroes';
  info: {
    name: 'Hero';
    displayName: 'Hero';
    icon: 'heading';
    description: '';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface SectionsFeatureRowsGroup extends Schema.Component {
  collectionName: 'components_slices_feature_rows_groups';
  info: {
    name: 'FeatureRowsGroup';
    displayName: 'Feaures row group';
    icon: 'bars';
  };
  attributes: {
    features: Attribute.Component<'elements.feature-row', true>;
  };
}

export interface SectionsFeatureColumnsGroup extends Schema.Component {
  collectionName: 'components_slices_feature_columns_groups';
  info: {
    name: 'FeatureColumnsGroup';
    displayName: 'Feature columns group';
    icon: 'star-of-life';
  };
  attributes: {
    features: Attribute.Component<'elements.feature-column', true>;
  };
}

export interface SectionsCardGrid extends Schema.Component {
  collectionName: 'components_sections_card_grids';
  info: {
    displayName: 'Card Grid';
    icon: 'apps';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    cards: Attribute.Component<'elements.card', true> & Attribute.Required;
  };
}

export interface SectionsBottomActions extends Schema.Component {
  collectionName: 'components_slices_bottom_actions';
  info: {
    name: 'BottomActions';
    displayName: 'Bottom actions';
    icon: 'angle-double-right';
  };
  attributes: {
    title: Attribute.String;
    buttons: Attribute.Component<'links.button-link', true>;
  };
}

export interface SectionsBanner extends Schema.Component {
  collectionName: 'components_sections_banners';
  info: {
    displayName: 'Banner';
    icon: 'landscape';
  };
  attributes: {
    banner: Attribute.Media<'images' | 'videos'> & Attribute.Required;
    description: Attribute.RichText & Attribute.Required;
  };
}

export interface LinksLink extends Schema.Component {
  collectionName: 'components_links_links';
  info: {
    name: 'Link';
    displayName: 'Link';
    icon: 'link';
    description: '';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
    newTab: Attribute.Boolean & Attribute.DefaultTo<false>;
    text: Attribute.String & Attribute.Required;
  };
}

export interface LinksButton extends Schema.Component {
  collectionName: 'components_links_simple_buttons';
  info: {
    name: 'Button';
    displayName: 'Button';
    icon: 'fingerprint';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    type: Attribute.Enumeration<['primary', 'secondary']>;
  };
}

export interface LinksButtonLink extends Schema.Component {
  collectionName: 'components_links_buttons';
  info: {
    name: 'Button-link';
    displayName: 'Button link';
    icon: 'fingerprint';
    description: '';
  };
  attributes: {
    url: Attribute.String;
    newTab: Attribute.Boolean & Attribute.DefaultTo<false>;
    text: Attribute.String;
    type: Attribute.Enumeration<['primary', 'secondary']>;
  };
}

export interface MetaMetadata extends Schema.Component {
  collectionName: 'components_meta_metadata';
  info: {
    name: 'Metadata';
    displayName: 'Metadata';
    icon: 'robot';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
    shareImage: Attribute.Media<'images'>;
    twitterCardType: Attribute.Enumeration<
      ['summary', 'summary_large_image', 'app', 'player']
    > &
      Attribute.DefaultTo<'summary'>;
    twitterUsername: Attribute.String;
  };
}

export interface LayoutNavbar extends Schema.Component {
  collectionName: 'components_layout_navbars';
  info: {
    name: 'Navbar';
    displayName: 'Navbar';
    icon: 'map-signs';
    description: '';
  };
  attributes: {
    links: Attribute.Component<'links.link', true>;
    button: Attribute.Component<'links.button-link'>;
    logo: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface LayoutFooter extends Schema.Component {
  collectionName: 'components_layout_footers';
  info: {
    name: 'Footer';
    displayName: 'Footer';
    icon: 'caret-square-down';
  };
  attributes: {
    logo: Attribute.Media<'images'>;
    columns: Attribute.Component<'elements.footer-section', true>;
    smallText: Attribute.String;
  };
}

export interface ElementsUrl extends Schema.Component {
  collectionName: 'components_elements_urls';
  info: {
    displayName: 'URL';
    icon: 'link';
    description: '';
  };
  attributes: {
    value: Attribute.String & Attribute.Required;
  };
}

export interface ElementsTestimonial extends Schema.Component {
  collectionName: 'components_slices_testimonials';
  info: {
    name: 'Testimonial';
    displayName: 'Testimonial';
    icon: 'user-check';
  };
  attributes: {
    logo: Attribute.Media<'images'>;
    picture: Attribute.Media<'images'>;
    text: Attribute.Text;
    authorName: Attribute.String;
    authorTitle: Attribute.String;
    link: Attribute.String;
  };
}

export interface ElementsPlan extends Schema.Component {
  collectionName: 'components_elements_plans';
  info: {
    name: 'plan';
    displayName: 'Pricing plan';
    icon: 'search-dollar';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.Text;
    features: Attribute.Component<'elements.feature', true>;
    isRecommended: Attribute.Boolean;
    price: Attribute.Decimal;
    pricePeriod: Attribute.String;
  };
}

export interface ElementsPersonQuote extends Schema.Component {
  collectionName: 'components_elements_person_quotes';
  info: {
    displayName: 'Person Quote';
    icon: 'quote';
  };
  attributes: {
    Person: Attribute.Relation<
      'elements.person-quote',
      'oneToOne',
      'api::person.person'
    >;
    Quote: Attribute.Text & Attribute.Required;
  };
}

export interface ElementsNotificationBanner extends Schema.Component {
  collectionName: 'components_elements_notification_banners';
  info: {
    name: 'NotificationBanner';
    displayName: 'Notification banner';
    icon: 'exclamation';
  };
  attributes: {
    text: Attribute.RichText;
    type: Attribute.Enumeration<['alert', 'info', 'warning']> &
      Attribute.Required;
  };
}

export interface ElementsLogos extends Schema.Component {
  collectionName: 'components_elements_logos';
  info: {
    name: 'logos';
    displayName: 'Logos';
    icon: 'apple-alt';
  };
  attributes: {
    title: Attribute.String;
    logo: Attribute.Media<'images'>;
  };
}

export interface ElementsLabelAndText extends Schema.Component {
  collectionName: 'components_elements_label_and_texts';
  info: {
    displayName: 'Label & text';
    description: '';
  };
  attributes: {
    Label: Attribute.String & Attribute.Required;
    Text: Attribute.String & Attribute.Required;
  };
}

export interface ElementsFooterSection extends Schema.Component {
  collectionName: 'components_links_footer_sections';
  info: {
    name: 'FooterSection';
    displayName: 'Footer section';
    icon: 'chevron-circle-down';
  };
  attributes: {
    title: Attribute.String;
    links: Attribute.Component<'links.link', true>;
  };
}

export interface ElementsFeature extends Schema.Component {
  collectionName: 'components_elements_features';
  info: {
    name: 'feature';
    displayName: 'Feature';
    icon: 'traffic-light';
  };
  attributes: {
    name: Attribute.String;
  };
}

export interface ElementsFeatureRow extends Schema.Component {
  collectionName: 'components_slices_feature_rows';
  info: {
    name: 'FeatureRow';
    displayName: 'Feature row';
    icon: 'arrows-alt-h';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    media: Attribute.Media<'images' | 'videos'> & Attribute.Required;
    link: Attribute.Component<'links.link'>;
  };
}

export interface ElementsFeatureColumn extends Schema.Component {
  collectionName: 'components_slices_feature_columns';
  info: {
    name: 'FeatureColumn';
    displayName: 'Feature column';
    icon: 'align-center';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    icon: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface ElementsCard extends Schema.Component {
  collectionName: 'components_elements_cards';
  info: {
    name: 'card';
    displayName: 'Card';
    icon: 'folder';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    picture: Attribute.Media<'images'> & Attribute.Required;
    url: Attribute.Component<'elements.url'>;
    tag: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.seo': SharedSeo;
      'shared.meta-social': SharedMetaSocial;
      'sections.title-and-description': SectionsTitleAndDescription;
      'sections.testimonials-group': SectionsTestimonialsGroup;
      'sections.rich-text': SectionsRichText;
      'sections.pricing': SectionsPricing;
      'sections.people-group-row': SectionsPeopleGroupRow;
      'sections.overview': SectionsOverview;
      'sections.lead-form': SectionsLeadForm;
      'sections.large-video': SectionsLargeVideo;
      'sections.hero': SectionsHero;
      'sections.feature-rows-group': SectionsFeatureRowsGroup;
      'sections.feature-columns-group': SectionsFeatureColumnsGroup;
      'sections.card-grid': SectionsCardGrid;
      'sections.bottom-actions': SectionsBottomActions;
      'sections.banner': SectionsBanner;
      'links.link': LinksLink;
      'links.button': LinksButton;
      'links.button-link': LinksButtonLink;
      'meta.metadata': MetaMetadata;
      'layout.navbar': LayoutNavbar;
      'layout.footer': LayoutFooter;
      'elements.url': ElementsUrl;
      'elements.testimonial': ElementsTestimonial;
      'elements.plan': ElementsPlan;
      'elements.person-quote': ElementsPersonQuote;
      'elements.notification-banner': ElementsNotificationBanner;
      'elements.logos': ElementsLogos;
      'elements.label-and-text': ElementsLabelAndText;
      'elements.footer-section': ElementsFooterSection;
      'elements.feature': ElementsFeature;
      'elements.feature-row': ElementsFeatureRow;
      'elements.feature-column': ElementsFeatureColumn;
      'elements.card': ElementsCard;
    }
  }
}
