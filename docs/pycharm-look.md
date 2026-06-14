# PyCharm-style VSCode setup

A reference for reproducing the PyCharm/IntelliJ look in VSCode (theme + layout +
icons). Most of this lives in your **user** `settings.json` — it is editor-wide, not
tied to this repo. This doc is just the record so you can rebuild it on any machine.
The one repo-level exception is the parameter-underline override (see section 3),
which is committed in this project's `.vscode/settings.json`.

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

## 3. Per-repo: clear the parameter underline

The IntelliJ-look themes underline every function parameter. Real PyCharm only
underlines _reassigned_ parameters, so the theme over-applies the effect. This
override clears it, matching Python's plain-parameter look.

Unlike the user settings above, this key is committed in this project's
`.vscode/settings.json` (not your user settings), so it applies for anyone who
opens the repo with the theme active:

```jsonc
{
  // Clear the theme's underline on parameters to match PyCharm's Python look.
  "editor.semanticTokenColorCustomizations": {
    "rules": {
      "parameter": {
        "fontStyle": "",
      },
    },
  },
}
```

`fontStyle: ""` removes the underline (and any bold/italic) while keeping the
theme's color. If an underline still lingers, the theme is also setting it via a
TextMate scope; add a matching `editor.tokenColorCustomizations` rule for
`variable.parameter` as a fallback.

## 4. Quick switching (no JSON needed)

- Color theme: **Ctrl+K Ctrl+T**
- File icon theme: **Ctrl+K Ctrl+M**

## 5. Reverting to VSCode defaults

```jsonc
"workbench.colorTheme": "Light Modern",
"workbench.iconTheme": "vs-seti"
```
