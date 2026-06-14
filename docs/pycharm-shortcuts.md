# PyCharm → VSCode shortcut equivalents

A translation table for the PyCharm/IntelliJ shortcuts you actually use day to day,
mapped to their **native VSCode** equivalents. The recommendation here is _not_ to
install the IntelliJ keymap extension (it remaps hundreds of keys, fights VSCode's
own chords, and breaks across updates) — just learn the handful below. See
[pycharm-look.md](pycharm-look.md) for the matching theme/layout setup.

> Shortcuts below are the VSCode defaults on Windows/Linux. On macOS, swap `Ctrl`
> for `Cmd` and `Alt` for `Option` in most cases.

## Navigation & search

| Action                   | PyCharm             | VSCode                            |
| ------------------------ | ------------------- | --------------------------------- |
| Search everywhere        | Shift Shift         | Ctrl+P (files) / Ctrl+T (symbols) |
| Go to file               | Ctrl+Shift+N        | Ctrl+P                            |
| Go to symbol (file)      | Ctrl+F12            | Ctrl+Shift+O                      |
| Go to symbol (workspace) | Ctrl+Alt+Shift+N    | Ctrl+T                            |
| Go to declaration        | Ctrl+B / Ctrl+Click | F12 / Ctrl+Click                  |
| Go to implementation     | Ctrl+Alt+B          | Ctrl+F12                          |
| Find usages              | Alt+F7              | Shift+F12                         |
| Recent files             | Ctrl+E              | Ctrl+P then type, or Ctrl+Tab     |
| Back / Forward           | Ctrl+Alt+← / →      | Alt+← / Alt+→                     |

## Editing

| Action                    | PyCharm               | VSCode          |
| ------------------------- | --------------------- | --------------- |
| Reformat code             | Ctrl+Alt+L            | Shift+Alt+F     |
| Rename symbol             | Shift+F6              | F2              |
| Quick fix / intentions    | Alt+Enter             | Ctrl+.          |
| Duplicate line            | Ctrl+D                | Shift+Alt+↓ / ↑ |
| Delete line               | Ctrl+Y                | Ctrl+Shift+K    |
| Move line up/down         | Shift+Alt+↑ / ↓       | Alt+↑ / ↓       |
| Comment line              | Ctrl+/                | Ctrl+/          |
| Comment block             | Ctrl+Shift+/          | Shift+Alt+A     |
| Extend/shrink selection   | Ctrl+W / Ctrl+Shift+W | Shift+Alt+→ / ← |
| Multi-cursor (next match) | Alt+J                 | Ctrl+D          |
| Column/box selection      | middle-drag           | Shift+Alt+drag  |

## Refactor & info

| Action              | PyCharm          | VSCode                  |
| ------------------- | ---------------- | ----------------------- |
| Refactor this       | Ctrl+Alt+Shift+T | Ctrl+Shift+R            |
| Quick documentation | Ctrl+Q           | hover, or Ctrl+K Ctrl+I |
| Parameter info      | Ctrl+P           | Ctrl+Shift+Space        |
| Show type / error   | Ctrl+F1          | hover                   |

## Run & debug

| Action                 | PyCharm            | VSCode                          |
| ---------------------- | ------------------ | ------------------------------- |
| Run                    | Shift+F10          | F5 (debug) / Ctrl+F5 (no debug) |
| Toggle breakpoint      | Ctrl+F8            | F9                              |
| Step over / into / out | F8 / F7 / Shift+F8 | F10 / F11 / Shift+F11           |
| Open terminal          | Alt+F12            | Ctrl+`                          |

## If you really want the keymap anyway

```bash
code --install-extension k--kato.intellij-idea-keybindings
```

This overrides everything above with the IntelliJ keymap. Reasonable if VSCode is
your _secondary_ editor and PyCharm muscle memory dominates — otherwise prefer the
native keys so every VSCode tutorial and answer you read still matches your setup.
