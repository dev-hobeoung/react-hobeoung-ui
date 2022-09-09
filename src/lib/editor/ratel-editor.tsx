import React from 'react';
import styled from 'styled-components';

const RatelEditorContainerStyledComponent = styled.div`
  display: flex;
  height: 100%;
`;

const RatelEditorRulerStyledComponent = styled.div`
  width: 1rem;
  background-color: aqua;
`;

const RatelEditorTextareaStyledComponent = styled.textarea`
  display: block;
  height: 100%;
  resize: none;
  flex-grow: 1;
  :focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
`;

export interface EditorProp {
  text: string;
  setText: (text: string) => void;
}

export const Editor: React.FC<EditorProp> = (props: EditorProp) => {
  const { text, setText } = props;

  const onInputChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <RatelEditorContainerStyledComponent id="ratel-editor-container" className="flex h-full">
      <RatelEditorRulerStyledComponent id="ratel-editor-ruler" className="w-4 bg-orange-400">
        {text.split(/\r|\r\n|\n/).map((value: string, index: number) => (
          <div>{index + 1}</div>
        ))}
      </RatelEditorRulerStyledComponent>
      <RatelEditorTextareaStyledComponent
        id="ratel-editor-textarea"
        className="block h-full resize-none grow focus:outline-none"
        value={text}
        onChange={onInputChangeHandler}
      />
    </RatelEditorContainerStyledComponent>
  );
};
