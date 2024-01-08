/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface SlateAppBar {
    }
    interface SlateAppNav {
        "align"?: 'start' | 'center' | 'end';
        "gap"?: | '4xs'
    | '3xs'
    | '2xs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | 'full';
        "justify"?: | 'start'
    | 'center'
    | 'end'
    | 'stretch'
    | 'around'
    | 'between'
    | 'evenly';
        "open"?: boolean;
        "role": HTMLElement['role'];
        "wrap"?: boolean;
    }
    interface SlateAppNavContent {
        "gap"?: | '4xs'
    | '3xs'
    | '2xs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | 'full';
    }
    interface SlateAppNavMenuButton {
        "label": string;
    }
    interface SlateContainer {
        "align": 'start' | 'center' | 'end';
        "size": 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    }
    interface SlateHeading {
        "level": HTMLElement['ariaLevel'];
        "role": HTMLElement['role'];
        "size"?: | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl';
        "transform"?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
        "variant"?: 'primary' | 'secondary';
        "weight"?: 'light' | 'normal' | 'bold';
        "wrap"?: boolean;
    }
    interface SlateLink {
        "href": string;
        "rel"?: string;
        "target"?: '_self' | '_blank';
    }
    interface SlateStack {
        "align": 'baseline' | 'start' | 'center' | 'end' | 'stretch';
        "direction": 'row' | 'column';
        "gap": | '4xs'
    | '3xs'
    | '2xs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | 'full';
        "justify": 'start' | 'center' | 'end' | 'stretch';
        "wrap": boolean;
    }
    interface SlateTag {
    }
    interface SlateText {
        "size"?: | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl';
        "transform"?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
        "variant"?: 'primary' | 'secondary';
        "weight"?: 'light' | 'normal' | 'bold';
        "wrap"?: boolean;
    }
}
declare global {
    interface HTMLSlateAppBarElement extends Components.SlateAppBar, HTMLStencilElement {
    }
    var HTMLSlateAppBarElement: {
        prototype: HTMLSlateAppBarElement;
        new (): HTMLSlateAppBarElement;
    };
    interface HTMLSlateAppNavElement extends Components.SlateAppNav, HTMLStencilElement {
    }
    var HTMLSlateAppNavElement: {
        prototype: HTMLSlateAppNavElement;
        new (): HTMLSlateAppNavElement;
    };
    interface HTMLSlateAppNavContentElement extends Components.SlateAppNavContent, HTMLStencilElement {
    }
    var HTMLSlateAppNavContentElement: {
        prototype: HTMLSlateAppNavContentElement;
        new (): HTMLSlateAppNavContentElement;
    };
    interface HTMLSlateAppNavMenuButtonElement extends Components.SlateAppNavMenuButton, HTMLStencilElement {
    }
    var HTMLSlateAppNavMenuButtonElement: {
        prototype: HTMLSlateAppNavMenuButtonElement;
        new (): HTMLSlateAppNavMenuButtonElement;
    };
    interface HTMLSlateContainerElement extends Components.SlateContainer, HTMLStencilElement {
    }
    var HTMLSlateContainerElement: {
        prototype: HTMLSlateContainerElement;
        new (): HTMLSlateContainerElement;
    };
    interface HTMLSlateHeadingElement extends Components.SlateHeading, HTMLStencilElement {
    }
    var HTMLSlateHeadingElement: {
        prototype: HTMLSlateHeadingElement;
        new (): HTMLSlateHeadingElement;
    };
    interface HTMLSlateLinkElement extends Components.SlateLink, HTMLStencilElement {
    }
    var HTMLSlateLinkElement: {
        prototype: HTMLSlateLinkElement;
        new (): HTMLSlateLinkElement;
    };
    interface HTMLSlateStackElement extends Components.SlateStack, HTMLStencilElement {
    }
    var HTMLSlateStackElement: {
        prototype: HTMLSlateStackElement;
        new (): HTMLSlateStackElement;
    };
    interface HTMLSlateTagElement extends Components.SlateTag, HTMLStencilElement {
    }
    var HTMLSlateTagElement: {
        prototype: HTMLSlateTagElement;
        new (): HTMLSlateTagElement;
    };
    interface HTMLSlateTextElement extends Components.SlateText, HTMLStencilElement {
    }
    var HTMLSlateTextElement: {
        prototype: HTMLSlateTextElement;
        new (): HTMLSlateTextElement;
    };
    interface HTMLElementTagNameMap {
        "slate-app-bar": HTMLSlateAppBarElement;
        "slate-app-nav": HTMLSlateAppNavElement;
        "slate-app-nav-content": HTMLSlateAppNavContentElement;
        "slate-app-nav-menu-button": HTMLSlateAppNavMenuButtonElement;
        "slate-container": HTMLSlateContainerElement;
        "slate-heading": HTMLSlateHeadingElement;
        "slate-link": HTMLSlateLinkElement;
        "slate-stack": HTMLSlateStackElement;
        "slate-tag": HTMLSlateTagElement;
        "slate-text": HTMLSlateTextElement;
    }
}
declare namespace LocalJSX {
    interface SlateAppBar {
    }
    interface SlateAppNav {
        "align"?: 'start' | 'center' | 'end';
        "gap"?: | '4xs'
    | '3xs'
    | '2xs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | 'full';
        "justify"?: | 'start'
    | 'center'
    | 'end'
    | 'stretch'
    | 'around'
    | 'between'
    | 'evenly';
        "open"?: boolean;
        "role"?: HTMLElement['role'];
        "wrap"?: boolean;
    }
    interface SlateAppNavContent {
        "gap"?: | '4xs'
    | '3xs'
    | '2xs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | 'full';
    }
    interface SlateAppNavMenuButton {
        "label"?: string;
    }
    interface SlateContainer {
        "align"?: 'start' | 'center' | 'end';
        "size"?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    }
    interface SlateHeading {
        "level"?: HTMLElement['ariaLevel'];
        "role"?: HTMLElement['role'];
        "size"?: | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl';
        "transform"?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
        "variant"?: 'primary' | 'secondary';
        "weight"?: 'light' | 'normal' | 'bold';
        "wrap"?: boolean;
    }
    interface SlateLink {
        "href"?: string;
        "rel"?: string;
        "target"?: '_self' | '_blank';
    }
    interface SlateStack {
        "align"?: 'baseline' | 'start' | 'center' | 'end' | 'stretch';
        "direction"?: 'row' | 'column';
        "gap"?: | '4xs'
    | '3xs'
    | '2xs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | 'full';
        "justify"?: 'start' | 'center' | 'end' | 'stretch';
        "wrap"?: boolean;
    }
    interface SlateTag {
    }
    interface SlateText {
        "size"?: | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl';
        "transform"?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
        "variant"?: 'primary' | 'secondary';
        "weight"?: 'light' | 'normal' | 'bold';
        "wrap"?: boolean;
    }
    interface IntrinsicElements {
        "slate-app-bar": SlateAppBar;
        "slate-app-nav": SlateAppNav;
        "slate-app-nav-content": SlateAppNavContent;
        "slate-app-nav-menu-button": SlateAppNavMenuButton;
        "slate-container": SlateContainer;
        "slate-heading": SlateHeading;
        "slate-link": SlateLink;
        "slate-stack": SlateStack;
        "slate-tag": SlateTag;
        "slate-text": SlateText;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "slate-app-bar": LocalJSX.SlateAppBar & JSXBase.HTMLAttributes<HTMLSlateAppBarElement>;
            "slate-app-nav": LocalJSX.SlateAppNav & JSXBase.HTMLAttributes<HTMLSlateAppNavElement>;
            "slate-app-nav-content": LocalJSX.SlateAppNavContent & JSXBase.HTMLAttributes<HTMLSlateAppNavContentElement>;
            "slate-app-nav-menu-button": LocalJSX.SlateAppNavMenuButton & JSXBase.HTMLAttributes<HTMLSlateAppNavMenuButtonElement>;
            "slate-container": LocalJSX.SlateContainer & JSXBase.HTMLAttributes<HTMLSlateContainerElement>;
            "slate-heading": LocalJSX.SlateHeading & JSXBase.HTMLAttributes<HTMLSlateHeadingElement>;
            "slate-link": LocalJSX.SlateLink & JSXBase.HTMLAttributes<HTMLSlateLinkElement>;
            "slate-stack": LocalJSX.SlateStack & JSXBase.HTMLAttributes<HTMLSlateStackElement>;
            "slate-tag": LocalJSX.SlateTag & JSXBase.HTMLAttributes<HTMLSlateTagElement>;
            "slate-text": LocalJSX.SlateText & JSXBase.HTMLAttributes<HTMLSlateTextElement>;
        }
    }
}