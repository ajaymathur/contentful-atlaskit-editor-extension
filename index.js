import React from 'react';
import { render } from 'react-dom';
import { Editor } from "@atlaskit/editor-core";
import AtlassianIcon from '@atlaskit/icon/glyph/atlassian';

const customInsertMenuItems = [
  {
    content: "Inline macro (EH)",
    value: { name: "inline-eh" },
    tooltipDescription: "Inline macro (Using extension handlers)",
    tooltipPosition: "right",
    elemBefore: <AtlassianIcon />,
    onClick: editorActions => editorActions.replaceDocument([
      {
        "type": "paragraph",
        "content": [
          {
            "type": "text",
            "text": "Some text in a paragraph"
          }
        ]
      }
    ])
  }
];

const App = () => (
  <div>
    <Editor appearance="comment" insertMenuItems={customInsertMenuItems} />
  </div>
);

render(
  <App />,
  document.getElementById('root')
)

