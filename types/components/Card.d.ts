import * as React from 'react';

import CardImg from './CardImg';

import { BsPrefixComponent } from './helpers';

declare class CardTitle<
  As extends React.ElementType = 'div'
> extends BsPrefixComponent<As> {}

declare class CardSubtitle<
  As extends React.ElementType = 'div'
> extends BsPrefixComponent<As> {}

declare class CardBody<
  As extends React.ElementType = 'div'
> extends BsPrefixComponent<As> {}

declare class CardLink<
  As extends React.ElementType = 'a'
> extends BsPrefixComponent<As> {}

declare class CardText<
  As extends React.ElementType = 'p'
> extends BsPrefixComponent<As> {}

declare class CardHeader<
  As extends React.ElementType = 'div'
> extends BsPrefixComponent<As> {}

declare class CardFooter<
  As extends React.ElementType = 'div'
> extends BsPrefixComponent<As> {}

declare class CardImgOverlay<
  As extends React.ElementType = 'div'
> extends BsPrefixComponent<As> {}

export interface CardProps {
  bg?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'dark'
    | 'light';
  text?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'dark'
    | 'light'
    | 'white'
    | 'muted';
  border?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'dark'
    | 'light';
  body?: boolean;
}

declare class Card<
  As extends React.ElementType = 'div'
> extends BsPrefixComponent<As, CardProps> {
  static Img: typeof CardImg;
  static Title: typeof CardTitle;
  static Subtitle: typeof CardSubtitle;
  static Body: typeof CardBody;
  static Link: typeof CardLink;
  static Text: typeof CardText;
  static Header: typeof CardHeader;
  static Footer: typeof CardFooter;
  static ImgOverlay: typeof CardImgOverlay;
}

export default Card;
