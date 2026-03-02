import type { Attribute, Schema } from '@strapi/strapi';

export interface ElementsCard extends Schema.Component {
  collectionName: 'components_elements_cards';
  info: {
    description: '';
    displayName: 'Card';
    icon: 'folder';
    name: 'card';
  };
  attributes: {
    description: Attribute.Text;
    picture: Attribute.Media<'images'> & Attribute.Required;
    tag: Attribute.String;
    title: Attribute.String & Attribute.Required;
    url: Attribute.Component<'elements.url'>;
  };
}

export interface ElementsFeature extends Schema.Component {
  collectionName: 'components_elements_features';
  info: {
    displayName: 'Feature';
    icon: 'traffic-light';
    name: 'feature';
  };
  attributes: {
    name: Attribute.String;
  };
}

export interface ElementsFeatureColumn extends Schema.Component {
  collectionName: 'components_slices_feature_columns';
  info: {
    description: '';
    displayName: 'Feature column';
    icon: 'align-center';
    name: 'FeatureColumn';
  };
  attributes: {
    description: Attribute.Text;
    icon: Attribute.Media<'images'> & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface ElementsFeatureRow extends Schema.Component {
  collectionName: 'components_slices_feature_rows';
  info: {
    description: '';
    displayName: 'Feature row';
    icon: 'arrows-alt-h';
    name: 'FeatureRow';
  };
  attributes: {
    description: Attribute.Text;
    link: Attribute.Component<'links.link'>;
    media: Attribute.Media<'images' | 'videos'> & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface ElementsFooterSection extends Schema.Component {
  collectionName: 'components_links_footer_sections';
  info: {
    displayName: 'Footer section';
    icon: 'chevron-circle-down';
    name: 'FooterSection';
  };
  attributes: {
    links: Attribute.Component<'links.link', true>;
    title: Attribute.String;
  };
}

export interface ElementsLabelAndText extends Schema.Component {
  collectionName: 'components_elements_label_and_texts';
  info: {
    description: '';
    displayName: 'Label & text';
  };
  attributes: {
    Label: Attribute.String & Attribute.Required;
    Text: Attribute.String & Attribute.Required;
  };
}

export interface ElementsLogos extends Schema.Component {
  collectionName: 'components_elements_logos';
  info: {
    displayName: 'Logos';
    icon: 'apple-alt';
    name: 'logos';
  };
  attributes: {
    logo: Attribute.Media<'images'>;
    title: Attribute.String;
  };
}

export interface ElementsNotificationBanner extends Schema.Component {
  collectionName: 'components_elements_notification_banners';
  info: {
    displayName: 'Notification banner';
    icon: 'exclamation';
    name: 'NotificationBanner';
  };
  attributes: {
    text: Attribute.RichText;
    type: Attribute.Enumeration<['alert', 'info', 'warning']> &
      Attribute.Required;
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

export interface ElementsPlan extends Schema.Component {
  collectionName: 'components_elements_plans';
  info: {
    displayName: 'Pricing plan';
    icon: 'search-dollar';
    name: 'plan';
  };
  attributes: {
    description: Attribute.Text;
    features: Attribute.Component<'elements.feature', true>;
    isRecommended: Attribute.Boolean;
    name: Attribute.String;
    price: Attribute.Decimal;
    pricePeriod: Attribute.String;
  };
}

export interface ElementsTestimonial extends Schema.Component {
  collectionName: 'components_slices_testimonials';
  info: {
    displayName: 'Testimonial';
    icon: 'user-check';
    name: 'Testimonial';
  };
  attributes: {
    authorName: Attribute.String;
    authorTitle: Attribute.String;
    link: Attribute.String;
    logo: Attribute.Media<'images'>;
    picture: Attribute.Media<'images'>;
    text: Attribute.Text;
  };
}

export interface ElementsUrl extends Schema.Component {
  collectionName: 'components_elements_urls';
  info: {
    description: '';
    displayName: 'URL';
    icon: 'link';
  };
  attributes: {
    value: Attribute.String & Attribute.Required;
  };
}

export interface LayoutFooter extends Schema.Component {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
    icon: 'caret-square-down';
    name: 'Footer';
  };
  attributes: {
    columns: Attribute.Component<'elements.footer-section', true>;
    logo: Attribute.Media<'images'>;
    smallText: Attribute.String;
  };
}

export interface LayoutNavbar extends Schema.Component {
  collectionName: 'components_layout_navbars';
  info: {
    description: '';
    displayName: 'Navbar';
    icon: 'map-signs';
    name: 'Navbar';
  };
  attributes: {
    button: Attribute.Component<'links.button-link'>;
    links: Attribute.Component<'links.link', true>;
    logo: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface LinksApplyOnline extends Schema.Component {
  collectionName: 'components_links_apply_onlines';
  info: {
    displayName: 'applyOnline';
  };
  attributes: {
    link: Attribute.String;
    visible: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface LinksButton extends Schema.Component {
  collectionName: 'components_links_simple_buttons';
  info: {
    description: '';
    displayName: 'Button';
    icon: 'fingerprint';
    name: 'Button';
  };
  attributes: {
    text: Attribute.String;
    type: Attribute.Enumeration<['primary', 'secondary']>;
  };
}

export interface LinksButtonLink extends Schema.Component {
  collectionName: 'components_links_buttons';
  info: {
    description: '';
    displayName: 'Button link';
    icon: 'fingerprint';
    name: 'Button-link';
  };
  attributes: {
    newTab: Attribute.Boolean & Attribute.DefaultTo<false>;
    text: Attribute.String;
    type: Attribute.Enumeration<['primary', 'secondary']>;
    url: Attribute.String;
  };
}

export interface LinksLink extends Schema.Component {
  collectionName: 'components_links_links';
  info: {
    description: '';
    displayName: 'Link';
    icon: 'link';
    name: 'Link';
  };
  attributes: {
    newTab: Attribute.Boolean & Attribute.DefaultTo<false>;
    text: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
  };
}

export interface MetaMetadata extends Schema.Component {
  collectionName: 'components_meta_metadata';
  info: {
    displayName: 'Metadata';
    icon: 'robot';
    name: 'Metadata';
  };
  attributes: {
    metaDescription: Attribute.Text & Attribute.Required;
    metaTitle: Attribute.String & Attribute.Required;
    shareImage: Attribute.Media<'images'>;
    twitterCardType: Attribute.Enumeration<
      ['summary', 'summary_large_image', 'app', 'player']
    > &
      Attribute.DefaultTo<'summary'>;
    twitterUsername: Attribute.String;
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

export interface SectionsBottomActions extends Schema.Component {
  collectionName: 'components_slices_bottom_actions';
  info: {
    displayName: 'Bottom actions';
    icon: 'angle-double-right';
    name: 'BottomActions';
  };
  attributes: {
    buttons: Attribute.Component<'links.button-link', true>;
    title: Attribute.String;
  };
}

export interface SectionsCardGrid extends Schema.Component {
  collectionName: 'components_sections_card_grids';
  info: {
    description: '';
    displayName: 'Card Grid';
    icon: 'apps';
  };
  attributes: {
    cards: Attribute.Component<'elements.card', true> & Attribute.Required;
    title: Attribute.String;
  };
}

export interface SectionsFeatureColumnsGroup extends Schema.Component {
  collectionName: 'components_slices_feature_columns_groups';
  info: {
    displayName: 'Feature columns group';
    icon: 'star-of-life';
    name: 'FeatureColumnsGroup';
  };
  attributes: {
    features: Attribute.Component<'elements.feature-column', true>;
  };
}

export interface SectionsFeatureRowsGroup extends Schema.Component {
  collectionName: 'components_slices_feature_rows_groups';
  info: {
    displayName: 'Feaures row group';
    icon: 'bars';
    name: 'FeatureRowsGroup';
  };
  attributes: {
    features: Attribute.Component<'elements.feature-row', true>;
  };
}

export interface SectionsHero extends Schema.Component {
  collectionName: 'components_slices_heroes';
  info: {
    description: '';
    displayName: 'Hero';
    icon: 'heading';
    name: 'Hero';
  };
  attributes: {
    media: Attribute.Media<'images' | 'videos'>;
    title: Attribute.String;
  };
}

export interface SectionsLargeVideo extends Schema.Component {
  collectionName: 'components_slices_large_videos';
  info: {
    displayName: 'Large video';
    icon: 'play-circle';
    name: 'LargeVideo';
  };
  attributes: {
    description: Attribute.String;
    poster: Attribute.Media<'images'>;
    title: Attribute.String;
    video: Attribute.Media<'videos'> & Attribute.Required;
  };
}

export interface SectionsLeadForm extends Schema.Component {
  collectionName: 'components_sections_lead_forms';
  info: {
    description: '';
    displayName: 'Lead form';
    icon: 'at';
    name: 'Lead form';
  };
  attributes: {
    emailPlaceholder: Attribute.String;
    location: Attribute.String;
    submitButton: Attribute.Component<'links.button'>;
    title: Attribute.String;
  };
}

export interface SectionsOverview extends Schema.Component {
  collectionName: 'components_sections_overviews';
  info: {
    description: '';
    displayName: 'Overview';
    icon: 'pencil';
  };
  attributes: {
    description: Attribute.RichText;
    Image: Attribute.Media<'images'>;
    Title: Attribute.String & Attribute.Required;
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

export interface SectionsPricing extends Schema.Component {
  collectionName: 'components_sections_pricings';
  info: {
    displayName: 'Pricing';
    icon: 'dollar-sign';
    name: 'Pricing';
  };
  attributes: {
    plans: Attribute.Component<'elements.plan', true>;
    title: Attribute.String;
  };
}

export interface SectionsRichText extends Schema.Component {
  collectionName: 'components_sections_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'text-height';
    name: 'RichText';
  };
  attributes: {
    content: Attribute.RichText;
  };
}

export interface SectionsTestimonialsGroup extends Schema.Component {
  collectionName: 'components_slices_testimonials_groups';
  info: {
    displayName: 'Testimonials group';
    icon: 'user-friends';
    name: 'TestimonialsGroup';
  };
  attributes: {
    description: Attribute.Text;
    link: Attribute.Component<'links.link'>;
    logos: Attribute.Component<'elements.logos', true>;
    testimonials: Attribute.Component<'elements.testimonial', true>;
    title: Attribute.String;
  };
}

export interface SectionsTitleAndDescription extends Schema.Component {
  collectionName: 'components_sections_title_and_descriptions';
  info: {
    displayName: 'TitleAndDescription';
  };
  attributes: {
    Description: Attribute.RichText & Attribute.Required;
    Title: Attribute.String & Attribute.Required;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    description: '';
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media<'images' | 'files' | 'videos'>;
    socialNetwork: Attribute.Enumeration<
      ['Facebook', 'Twitter', 'Email', 'LinkedIn', 'Instagram']
    > &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    Url: Attribute.String & Attribute.Required;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Attribute.String;
    keywords: Attribute.Text;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
    metaImage: Attribute.Media<'images' | 'files' | 'videos'>;
    metaRobots: Attribute.String;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Attribute.String;
    structuredData: Attribute.JSON;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
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
      'links.apply-online': LinksApplyOnline;
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
