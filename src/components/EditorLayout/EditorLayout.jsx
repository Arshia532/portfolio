import "./EditorLayout.css";

export function EditorLayout() {
  return (
    <div className="editor-layout">
      <div className="titlebar"></div>
      <div className="workbench">
        <div className="explorer"></div>
        <div className="editor-pane">
          <div className="tab-bar"></div>
          <div className="breadcrumb"></div>
          <div className="page-view"></div>
        </div>
      </div>
      <div className="status-bar"></div>
    </div>
  );
}
