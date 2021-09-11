//           text :: String -> Node
export const text = value => ({
  type: 'text',
  value,
});

//    blockElement :: String -> StrMap String -> Array Node -> Node
const blockElement = tagName => attrs => children => ({
  type: 'element',
  tagName,
  format: 'block',
  selfClosing: false,
  attrs,
  children,
});

//    inlineElement :: String -> StrMap String -> Array Node -> Node
const inlineElement = tagName => attrs => children => ({
  type: 'element',
  tagName,
  format: children.some (node => node.format === 'block') ? 'block' : 'inline',
  selfClosing: false,
  attrs,
  children,
});

//    selfClosingElement :: String -> StrMap String -> Node
const selfClosingElement = tagName => attrs => ({
  type: 'element',
  tagName,
  format: 'inline',
  selfClosing: true,
  attrs,
});

const html_ = blockElement ('html');
const head_ = blockElement ('head');
const style_ = blockElement ('style');
const body_ = blockElement ('body');
const h1_ = inlineElement ('h1');
const table_ = blockElement ('table');
const colgroup_ = blockElement ('colgroup');
const tbody_ = blockElement ('tbody');
const thead_ = blockElement ('thead');
const tr_ = blockElement ('tr');
const td_ = inlineElement ('td');
const th_ = inlineElement ('th');

export const elements = {
  html_,
  html: html_ ({}),
  head_,
  head: head_ ({}),
  link: selfClosingElement ('link'),
  meta: selfClosingElement ('meta'),
  style_,
  style: style_ ({}),
  body_,
  body: body_ ({}),
  h1_,
  h1: h1_ ({}),
  table_,
  table: table_ ({}),
  colgroup_,
  colgroup: colgroup_ ({}),
  col: selfClosingElement ('col'),
  tbody_,
  tbody: tbody_ ({}),
  thead_,
  thead: thead_ ({}),
  tr_,
  tr: tr_ ({}),
  td_,
  td: td_ ({}),
  th_,
  th: th_ ({}),
};
