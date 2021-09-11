//    escape :: String -> String
const escape = text => (
  text
  .replace (/&/g, '&amp;')
  .replace (/</g, '&lt;')
  .replace (/>/g, '&gt;')
);

//    renderFragment :: String -> Integer -> Boolean -> Array Node -> String
const renderFragment = indent => level => inline => nodes => (
  nodes
  .map (node => {
    if (node.type === 'text') return escape (node.value);

    const indentation = indent.repeat (level);
    const attrs = (
      Object.getOwnPropertyNames (node.attrs)
      .flatMap (name => [
        ' ',
        name,
        '="',
        escape (node.attrs[name]),
        '"',
      ])
      .join ('')
    );
    if (node.selfClosing) {
      return (
        indentation + '<' + node.tagName + attrs + '>' + (inline ? '' : '\n')
      );
    } else if (node.format === 'inline') {
      return (
        indentation + '<' + node.tagName + attrs + '>' +
        renderFragment (indent) (0) (true) (node.children) +
        '</' + node.tagName + '>' + (inline ? '' : '\n')
      );
    } else {
      return (
        indentation + '<' + node.tagName + attrs + '>\n' +
        renderFragment (indent) (level + 1) (false) (node.children) +
        indentation + '</' + node.tagName + '>\n'
      );
    }
  })
  .join ('')
);

export default renderFragment;
