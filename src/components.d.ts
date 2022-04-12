/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { MarkdownHeading, SiteStructureItem } from "./global/definitions";
import { Project } from "@matthiasmax/cv-api";
import { TimeLineItem } from "./components/time-line/time-line-item.interface";
export namespace Components {
    interface AnnouncementBar {
    }
    interface AppBurger {
        "toggleLeftSidebar": () => void;
    }
    interface AppIcon {
        "name"?: string;
    }
    interface AppRoot {
    }
    interface BlogComponent {
        "page"?: string;
    }
    interface BlogList {
    }
    interface CaseComponent {
        "page"?: string;
    }
    interface CaseList {
    }
    interface ContactPage {
    }
    interface ContributorList {
        "contributors"?: string[];
    }
    interface CustomClock {
    }
    interface CvPage {
    }
    interface DeliverableList {
    }
    interface DemoCard {
        "SourceBufferList"?: string;
        "demoUrl"?: string;
        "description"?: string;
        "imgPath"?: string;
        "name"?: string;
        "sourceUrl"?: string;
    }
    interface DsgvoNotice {
    }
    interface FeaturePill {
        "link": string;
    }
    interface FocusTopics {
    }
    interface GuideCallout {
    }
    interface HighlightCode {
    }
    interface HubspotModal {
        "active": boolean;
    }
    interface InPageNavigation {
        "currentPageUrl": string;
        "pageLinks": MarkdownHeading[];
        "srcUrl": string;
    }
    interface InfoBadge {
    }
    interface KpiValue {
        "label"?: string;
        "value"?: string;
        "valueFn"?: () => any;
    }
    interface LandingPage {
    }
    interface LifecycleChart {
    }
    interface LowerContentNav {
        "next"?: SiteStructureItem;
        "prev"?: SiteStructureItem;
    }
    interface NewsletterSignup {
    }
    interface NotfoundPage {
    }
    interface PreFooter {
    }
    interface ProGlshader {
        "frag": string;
        "media"?: string;
        "ready": boolean;
        "retina": boolean;
        "uniforms": any;
        "vert": string;
    }
    interface ProjectCard {
        "project": Project;
    }
    interface ProjectDeliverablesFilter {
    }
    interface ProjectIndustryFilter {
    }
    interface ProjectList {
        "deliverable"?: string;
        "industry"?: string;
    }
    interface SearchBar {
        "debounce"?: number;
        "handleInput"?: (ev: any) => void;
        "placeholder"?: string;
        "searchTerm"?: string;
    }
    interface SiteHeader {
    }
    interface SiteTopBar {
    }
    interface SkewContainer {
    }
    interface TimeLine {
        "items": TimeLineItem[];
    }
}
declare global {
    interface HTMLAnnouncementBarElement extends Components.AnnouncementBar, HTMLStencilElement {
    }
    var HTMLAnnouncementBarElement: {
        prototype: HTMLAnnouncementBarElement;
        new (): HTMLAnnouncementBarElement;
    };
    interface HTMLAppBurgerElement extends Components.AppBurger, HTMLStencilElement {
    }
    var HTMLAppBurgerElement: {
        prototype: HTMLAppBurgerElement;
        new (): HTMLAppBurgerElement;
    };
    interface HTMLAppIconElement extends Components.AppIcon, HTMLStencilElement {
    }
    var HTMLAppIconElement: {
        prototype: HTMLAppIconElement;
        new (): HTMLAppIconElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLBlogComponentElement extends Components.BlogComponent, HTMLStencilElement {
    }
    var HTMLBlogComponentElement: {
        prototype: HTMLBlogComponentElement;
        new (): HTMLBlogComponentElement;
    };
    interface HTMLBlogListElement extends Components.BlogList, HTMLStencilElement {
    }
    var HTMLBlogListElement: {
        prototype: HTMLBlogListElement;
        new (): HTMLBlogListElement;
    };
    interface HTMLCaseComponentElement extends Components.CaseComponent, HTMLStencilElement {
    }
    var HTMLCaseComponentElement: {
        prototype: HTMLCaseComponentElement;
        new (): HTMLCaseComponentElement;
    };
    interface HTMLCaseListElement extends Components.CaseList, HTMLStencilElement {
    }
    var HTMLCaseListElement: {
        prototype: HTMLCaseListElement;
        new (): HTMLCaseListElement;
    };
    interface HTMLContactPageElement extends Components.ContactPage, HTMLStencilElement {
    }
    var HTMLContactPageElement: {
        prototype: HTMLContactPageElement;
        new (): HTMLContactPageElement;
    };
    interface HTMLContributorListElement extends Components.ContributorList, HTMLStencilElement {
    }
    var HTMLContributorListElement: {
        prototype: HTMLContributorListElement;
        new (): HTMLContributorListElement;
    };
    interface HTMLCustomClockElement extends Components.CustomClock, HTMLStencilElement {
    }
    var HTMLCustomClockElement: {
        prototype: HTMLCustomClockElement;
        new (): HTMLCustomClockElement;
    };
    interface HTMLCvPageElement extends Components.CvPage, HTMLStencilElement {
    }
    var HTMLCvPageElement: {
        prototype: HTMLCvPageElement;
        new (): HTMLCvPageElement;
    };
    interface HTMLDeliverableListElement extends Components.DeliverableList, HTMLStencilElement {
    }
    var HTMLDeliverableListElement: {
        prototype: HTMLDeliverableListElement;
        new (): HTMLDeliverableListElement;
    };
    interface HTMLDemoCardElement extends Components.DemoCard, HTMLStencilElement {
    }
    var HTMLDemoCardElement: {
        prototype: HTMLDemoCardElement;
        new (): HTMLDemoCardElement;
    };
    interface HTMLDsgvoNoticeElement extends Components.DsgvoNotice, HTMLStencilElement {
    }
    var HTMLDsgvoNoticeElement: {
        prototype: HTMLDsgvoNoticeElement;
        new (): HTMLDsgvoNoticeElement;
    };
    interface HTMLFeaturePillElement extends Components.FeaturePill, HTMLStencilElement {
    }
    var HTMLFeaturePillElement: {
        prototype: HTMLFeaturePillElement;
        new (): HTMLFeaturePillElement;
    };
    interface HTMLFocusTopicsElement extends Components.FocusTopics, HTMLStencilElement {
    }
    var HTMLFocusTopicsElement: {
        prototype: HTMLFocusTopicsElement;
        new (): HTMLFocusTopicsElement;
    };
    interface HTMLGuideCalloutElement extends Components.GuideCallout, HTMLStencilElement {
    }
    var HTMLGuideCalloutElement: {
        prototype: HTMLGuideCalloutElement;
        new (): HTMLGuideCalloutElement;
    };
    interface HTMLHighlightCodeElement extends Components.HighlightCode, HTMLStencilElement {
    }
    var HTMLHighlightCodeElement: {
        prototype: HTMLHighlightCodeElement;
        new (): HTMLHighlightCodeElement;
    };
    interface HTMLHubspotModalElement extends Components.HubspotModal, HTMLStencilElement {
    }
    var HTMLHubspotModalElement: {
        prototype: HTMLHubspotModalElement;
        new (): HTMLHubspotModalElement;
    };
    interface HTMLInPageNavigationElement extends Components.InPageNavigation, HTMLStencilElement {
    }
    var HTMLInPageNavigationElement: {
        prototype: HTMLInPageNavigationElement;
        new (): HTMLInPageNavigationElement;
    };
    interface HTMLInfoBadgeElement extends Components.InfoBadge, HTMLStencilElement {
    }
    var HTMLInfoBadgeElement: {
        prototype: HTMLInfoBadgeElement;
        new (): HTMLInfoBadgeElement;
    };
    interface HTMLKpiValueElement extends Components.KpiValue, HTMLStencilElement {
    }
    var HTMLKpiValueElement: {
        prototype: HTMLKpiValueElement;
        new (): HTMLKpiValueElement;
    };
    interface HTMLLandingPageElement extends Components.LandingPage, HTMLStencilElement {
    }
    var HTMLLandingPageElement: {
        prototype: HTMLLandingPageElement;
        new (): HTMLLandingPageElement;
    };
    interface HTMLLifecycleChartElement extends Components.LifecycleChart, HTMLStencilElement {
    }
    var HTMLLifecycleChartElement: {
        prototype: HTMLLifecycleChartElement;
        new (): HTMLLifecycleChartElement;
    };
    interface HTMLLowerContentNavElement extends Components.LowerContentNav, HTMLStencilElement {
    }
    var HTMLLowerContentNavElement: {
        prototype: HTMLLowerContentNavElement;
        new (): HTMLLowerContentNavElement;
    };
    interface HTMLNewsletterSignupElement extends Components.NewsletterSignup, HTMLStencilElement {
    }
    var HTMLNewsletterSignupElement: {
        prototype: HTMLNewsletterSignupElement;
        new (): HTMLNewsletterSignupElement;
    };
    interface HTMLNotfoundPageElement extends Components.NotfoundPage, HTMLStencilElement {
    }
    var HTMLNotfoundPageElement: {
        prototype: HTMLNotfoundPageElement;
        new (): HTMLNotfoundPageElement;
    };
    interface HTMLPreFooterElement extends Components.PreFooter, HTMLStencilElement {
    }
    var HTMLPreFooterElement: {
        prototype: HTMLPreFooterElement;
        new (): HTMLPreFooterElement;
    };
    interface HTMLProGlshaderElement extends Components.ProGlshader, HTMLStencilElement {
    }
    var HTMLProGlshaderElement: {
        prototype: HTMLProGlshaderElement;
        new (): HTMLProGlshaderElement;
    };
    interface HTMLProjectCardElement extends Components.ProjectCard, HTMLStencilElement {
    }
    var HTMLProjectCardElement: {
        prototype: HTMLProjectCardElement;
        new (): HTMLProjectCardElement;
    };
    interface HTMLProjectDeliverablesFilterElement extends Components.ProjectDeliverablesFilter, HTMLStencilElement {
    }
    var HTMLProjectDeliverablesFilterElement: {
        prototype: HTMLProjectDeliverablesFilterElement;
        new (): HTMLProjectDeliverablesFilterElement;
    };
    interface HTMLProjectIndustryFilterElement extends Components.ProjectIndustryFilter, HTMLStencilElement {
    }
    var HTMLProjectIndustryFilterElement: {
        prototype: HTMLProjectIndustryFilterElement;
        new (): HTMLProjectIndustryFilterElement;
    };
    interface HTMLProjectListElement extends Components.ProjectList, HTMLStencilElement {
    }
    var HTMLProjectListElement: {
        prototype: HTMLProjectListElement;
        new (): HTMLProjectListElement;
    };
    interface HTMLSearchBarElement extends Components.SearchBar, HTMLStencilElement {
    }
    var HTMLSearchBarElement: {
        prototype: HTMLSearchBarElement;
        new (): HTMLSearchBarElement;
    };
    interface HTMLSiteHeaderElement extends Components.SiteHeader, HTMLStencilElement {
    }
    var HTMLSiteHeaderElement: {
        prototype: HTMLSiteHeaderElement;
        new (): HTMLSiteHeaderElement;
    };
    interface HTMLSiteTopBarElement extends Components.SiteTopBar, HTMLStencilElement {
    }
    var HTMLSiteTopBarElement: {
        prototype: HTMLSiteTopBarElement;
        new (): HTMLSiteTopBarElement;
    };
    interface HTMLSkewContainerElement extends Components.SkewContainer, HTMLStencilElement {
    }
    var HTMLSkewContainerElement: {
        prototype: HTMLSkewContainerElement;
        new (): HTMLSkewContainerElement;
    };
    interface HTMLTimeLineElement extends Components.TimeLine, HTMLStencilElement {
    }
    var HTMLTimeLineElement: {
        prototype: HTMLTimeLineElement;
        new (): HTMLTimeLineElement;
    };
    interface HTMLElementTagNameMap {
        "announcement-bar": HTMLAnnouncementBarElement;
        "app-burger": HTMLAppBurgerElement;
        "app-icon": HTMLAppIconElement;
        "app-root": HTMLAppRootElement;
        "blog-component": HTMLBlogComponentElement;
        "blog-list": HTMLBlogListElement;
        "case-component": HTMLCaseComponentElement;
        "case-list": HTMLCaseListElement;
        "contact-page": HTMLContactPageElement;
        "contributor-list": HTMLContributorListElement;
        "custom-clock": HTMLCustomClockElement;
        "cv-page": HTMLCvPageElement;
        "deliverable-list": HTMLDeliverableListElement;
        "demo-card": HTMLDemoCardElement;
        "dsgvo-notice": HTMLDsgvoNoticeElement;
        "feature-pill": HTMLFeaturePillElement;
        "focus-topics": HTMLFocusTopicsElement;
        "guide-callout": HTMLGuideCalloutElement;
        "highlight-code": HTMLHighlightCodeElement;
        "hubspot-modal": HTMLHubspotModalElement;
        "in-page-navigation": HTMLInPageNavigationElement;
        "info-badge": HTMLInfoBadgeElement;
        "kpi-value": HTMLKpiValueElement;
        "landing-page": HTMLLandingPageElement;
        "lifecycle-chart": HTMLLifecycleChartElement;
        "lower-content-nav": HTMLLowerContentNavElement;
        "newsletter-signup": HTMLNewsletterSignupElement;
        "notfound-page": HTMLNotfoundPageElement;
        "pre-footer": HTMLPreFooterElement;
        "pro-glshader": HTMLProGlshaderElement;
        "project-card": HTMLProjectCardElement;
        "project-deliverables-filter": HTMLProjectDeliverablesFilterElement;
        "project-industry-filter": HTMLProjectIndustryFilterElement;
        "project-list": HTMLProjectListElement;
        "search-bar": HTMLSearchBarElement;
        "site-header": HTMLSiteHeaderElement;
        "site-top-bar": HTMLSiteTopBarElement;
        "skew-container": HTMLSkewContainerElement;
        "time-line": HTMLTimeLineElement;
    }
}
declare namespace LocalJSX {
    interface AnnouncementBar {
    }
    interface AppBurger {
        "toggleLeftSidebar"?: () => void;
    }
    interface AppIcon {
        "name"?: string;
    }
    interface AppRoot {
    }
    interface BlogComponent {
        "page"?: string;
    }
    interface BlogList {
    }
    interface CaseComponent {
        "page"?: string;
    }
    interface CaseList {
    }
    interface ContactPage {
    }
    interface ContributorList {
        "contributors"?: string[];
    }
    interface CustomClock {
    }
    interface CvPage {
    }
    interface DeliverableList {
    }
    interface DemoCard {
        "SourceBufferList"?: string;
        "demoUrl"?: string;
        "description"?: string;
        "imgPath"?: string;
        "name"?: string;
        "sourceUrl"?: string;
    }
    interface DsgvoNotice {
    }
    interface FeaturePill {
        "link"?: string;
    }
    interface FocusTopics {
    }
    interface GuideCallout {
        "onToggleModal"?: (event: CustomEvent<any>) => void;
    }
    interface HighlightCode {
    }
    interface HubspotModal {
        "active"?: boolean;
        "onToggleModal"?: (event: CustomEvent<any>) => void;
    }
    interface InPageNavigation {
        "currentPageUrl"?: string;
        "pageLinks"?: MarkdownHeading[];
        "srcUrl"?: string;
    }
    interface InfoBadge {
    }
    interface KpiValue {
        "label"?: string;
        "value"?: string;
        "valueFn"?: () => any;
    }
    interface LandingPage {
    }
    interface LifecycleChart {
    }
    interface LowerContentNav {
        "next"?: SiteStructureItem;
        "prev"?: SiteStructureItem;
    }
    interface NewsletterSignup {
    }
    interface NotfoundPage {
    }
    interface PreFooter {
    }
    interface ProGlshader {
        "frag"?: string;
        "media"?: string;
        "ready"?: boolean;
        "retina"?: boolean;
        "uniforms"?: any;
        "vert"?: string;
    }
    interface ProjectCard {
        "project": Project;
    }
    interface ProjectDeliverablesFilter {
        "onMmChange"?: (event: CustomEvent<string>) => void;
    }
    interface ProjectIndustryFilter {
        "onMmChange"?: (event: CustomEvent<string>) => void;
    }
    interface ProjectList {
        "deliverable"?: string;
        "industry"?: string;
    }
    interface SearchBar {
        "debounce"?: number;
        "handleInput"?: (ev: any) => void;
        "placeholder"?: string;
        "searchTerm"?: string;
    }
    interface SiteHeader {
    }
    interface SiteTopBar {
    }
    interface SkewContainer {
    }
    interface TimeLine {
        "items": TimeLineItem[];
    }
    interface IntrinsicElements {
        "announcement-bar": AnnouncementBar;
        "app-burger": AppBurger;
        "app-icon": AppIcon;
        "app-root": AppRoot;
        "blog-component": BlogComponent;
        "blog-list": BlogList;
        "case-component": CaseComponent;
        "case-list": CaseList;
        "contact-page": ContactPage;
        "contributor-list": ContributorList;
        "custom-clock": CustomClock;
        "cv-page": CvPage;
        "deliverable-list": DeliverableList;
        "demo-card": DemoCard;
        "dsgvo-notice": DsgvoNotice;
        "feature-pill": FeaturePill;
        "focus-topics": FocusTopics;
        "guide-callout": GuideCallout;
        "highlight-code": HighlightCode;
        "hubspot-modal": HubspotModal;
        "in-page-navigation": InPageNavigation;
        "info-badge": InfoBadge;
        "kpi-value": KpiValue;
        "landing-page": LandingPage;
        "lifecycle-chart": LifecycleChart;
        "lower-content-nav": LowerContentNav;
        "newsletter-signup": NewsletterSignup;
        "notfound-page": NotfoundPage;
        "pre-footer": PreFooter;
        "pro-glshader": ProGlshader;
        "project-card": ProjectCard;
        "project-deliverables-filter": ProjectDeliverablesFilter;
        "project-industry-filter": ProjectIndustryFilter;
        "project-list": ProjectList;
        "search-bar": SearchBar;
        "site-header": SiteHeader;
        "site-top-bar": SiteTopBar;
        "skew-container": SkewContainer;
        "time-line": TimeLine;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "announcement-bar": LocalJSX.AnnouncementBar & JSXBase.HTMLAttributes<HTMLAnnouncementBarElement>;
            "app-burger": LocalJSX.AppBurger & JSXBase.HTMLAttributes<HTMLAppBurgerElement>;
            "app-icon": LocalJSX.AppIcon & JSXBase.HTMLAttributes<HTMLAppIconElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "blog-component": LocalJSX.BlogComponent & JSXBase.HTMLAttributes<HTMLBlogComponentElement>;
            "blog-list": LocalJSX.BlogList & JSXBase.HTMLAttributes<HTMLBlogListElement>;
            "case-component": LocalJSX.CaseComponent & JSXBase.HTMLAttributes<HTMLCaseComponentElement>;
            "case-list": LocalJSX.CaseList & JSXBase.HTMLAttributes<HTMLCaseListElement>;
            "contact-page": LocalJSX.ContactPage & JSXBase.HTMLAttributes<HTMLContactPageElement>;
            "contributor-list": LocalJSX.ContributorList & JSXBase.HTMLAttributes<HTMLContributorListElement>;
            "custom-clock": LocalJSX.CustomClock & JSXBase.HTMLAttributes<HTMLCustomClockElement>;
            "cv-page": LocalJSX.CvPage & JSXBase.HTMLAttributes<HTMLCvPageElement>;
            "deliverable-list": LocalJSX.DeliverableList & JSXBase.HTMLAttributes<HTMLDeliverableListElement>;
            "demo-card": LocalJSX.DemoCard & JSXBase.HTMLAttributes<HTMLDemoCardElement>;
            "dsgvo-notice": LocalJSX.DsgvoNotice & JSXBase.HTMLAttributes<HTMLDsgvoNoticeElement>;
            "feature-pill": LocalJSX.FeaturePill & JSXBase.HTMLAttributes<HTMLFeaturePillElement>;
            "focus-topics": LocalJSX.FocusTopics & JSXBase.HTMLAttributes<HTMLFocusTopicsElement>;
            "guide-callout": LocalJSX.GuideCallout & JSXBase.HTMLAttributes<HTMLGuideCalloutElement>;
            "highlight-code": LocalJSX.HighlightCode & JSXBase.HTMLAttributes<HTMLHighlightCodeElement>;
            "hubspot-modal": LocalJSX.HubspotModal & JSXBase.HTMLAttributes<HTMLHubspotModalElement>;
            "in-page-navigation": LocalJSX.InPageNavigation & JSXBase.HTMLAttributes<HTMLInPageNavigationElement>;
            "info-badge": LocalJSX.InfoBadge & JSXBase.HTMLAttributes<HTMLInfoBadgeElement>;
            "kpi-value": LocalJSX.KpiValue & JSXBase.HTMLAttributes<HTMLKpiValueElement>;
            "landing-page": LocalJSX.LandingPage & JSXBase.HTMLAttributes<HTMLLandingPageElement>;
            "lifecycle-chart": LocalJSX.LifecycleChart & JSXBase.HTMLAttributes<HTMLLifecycleChartElement>;
            "lower-content-nav": LocalJSX.LowerContentNav & JSXBase.HTMLAttributes<HTMLLowerContentNavElement>;
            "newsletter-signup": LocalJSX.NewsletterSignup & JSXBase.HTMLAttributes<HTMLNewsletterSignupElement>;
            "notfound-page": LocalJSX.NotfoundPage & JSXBase.HTMLAttributes<HTMLNotfoundPageElement>;
            "pre-footer": LocalJSX.PreFooter & JSXBase.HTMLAttributes<HTMLPreFooterElement>;
            "pro-glshader": LocalJSX.ProGlshader & JSXBase.HTMLAttributes<HTMLProGlshaderElement>;
            "project-card": LocalJSX.ProjectCard & JSXBase.HTMLAttributes<HTMLProjectCardElement>;
            "project-deliverables-filter": LocalJSX.ProjectDeliverablesFilter & JSXBase.HTMLAttributes<HTMLProjectDeliverablesFilterElement>;
            "project-industry-filter": LocalJSX.ProjectIndustryFilter & JSXBase.HTMLAttributes<HTMLProjectIndustryFilterElement>;
            "project-list": LocalJSX.ProjectList & JSXBase.HTMLAttributes<HTMLProjectListElement>;
            "search-bar": LocalJSX.SearchBar & JSXBase.HTMLAttributes<HTMLSearchBarElement>;
            "site-header": LocalJSX.SiteHeader & JSXBase.HTMLAttributes<HTMLSiteHeaderElement>;
            "site-top-bar": LocalJSX.SiteTopBar & JSXBase.HTMLAttributes<HTMLSiteTopBarElement>;
            "skew-container": LocalJSX.SkewContainer & JSXBase.HTMLAttributes<HTMLSkewContainerElement>;
            "time-line": LocalJSX.TimeLine & JSXBase.HTMLAttributes<HTMLTimeLineElement>;
        }
    }
}
