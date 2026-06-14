# PyCharm-style VSCode setup

A reference for reproducing the PyCharm/IntelliJ look in VSCode (theme + layout +
icons). All of this lives in your **user** `settings.json` — it is editor-wide, not
tied to this repo. This doc is just the record so you can rebuild it on any machine.

## 1. Extensions

Install all four from a terminal (path to the bundled VSCode CLI shown for Windows;
on macOS/Linux just use `code`):

```bash
code --install-extension c75.real-intellij-light          # Light theme (PyCharm "IntelliJ Light")
code --install-extension chadalen.vscode-jetbrains-icon-theme  # JetBrains file/folder icons
code --install-extension rokoroku.vscode-theme-darcula     # Dark theme (PyCharm "Darcula") — optional
code --install-extension nicohlr.pycharm                   # Extra PyCharm dark variants — optional
```

> Windows bundled CLI path, if `code` isn't on PATH:
> `"%LOCALAPPDATA%\Programs\Microsoft VS Code\bin\code.cmd" --install-extension <id>`

## 2. User settings

Add these keys to your user `settings.json` (Ctrl+Shift+P → _Preferences: Open User
Settings (JSON)_):

```jsonc
{
  // --- Theme ---
  "workbench.colorTheme": "Real IntelliJ Light",
  "workbench.iconTheme": "vscode-jetbrains-icon-theme-2023-light",

  // --- Layout (matches PyCharm's defaults) ---
  "workbench.activityBar.location": "default", // tool-window stripe on the LEFT edge
  "workbench.sideBar.location": "left", // Project tool window on the left
  "workbench.panel.defaultLocation": "bottom", // Terminal / Run / Problems at the bottom
  "workbench.tree.renderIndentGuides": "always", // project-tree indent guide lines
  "workbench.tree.indent": 20,
  "explorer.compactFolders": false, // never collapse a/b/c into one row
  "breadcrumbs.enabled": true, // the navigation bar above the editor
  "workbench.editor.tabSizing": "shrink", // single-row, shrinking editor tabs
  "workbench.editor.showTabs": "multiple",
}
```

For the **dark** PyCharm look instead, swap the two theme lines:

```jsonc
"workbench.colorTheme": "Darcula",
"workbench.iconTheme": "vscode-jetbrains-icon-theme-2023-dark",
```

## 3. Quick switching (no JSON needed)

- Color theme: **Ctrl+K Ctrl+T**
- File icon theme: **Ctrl+K Ctrl+M**

## 4. Reverting to VSCode defaults

```jsonc
"workbench.colorTheme": "Light Modern",
"workbench.iconTheme": "vs-seti"
```
