import { Editor } from 'amis-editor';
import { useParams } from 'react-router-dom';
import { EditorProps } from 'amis-editor-core/lib/component/Editor';
import { Ref } from 'react';
import '@fortawesome/fontawesome-free/js/all';

import 'amis/lib/themes/cxd.css';
import 'amis/lib/helper.css';
import 'amis-editor-core/lib/style.css'

interface TestEditorProps extends EditorProps { amisEditor: Ref<Editor> }

export default function TestEditor(props: TestEditorProps) {
  const routeParams = useParams();

  return (
    <Editor
      {...props}
      theme={'cxd'}
      ref={props.amisEditor}
      />
  );
}
