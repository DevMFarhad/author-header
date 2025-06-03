/**
 * =============<< ********* >>=============
 * Author       : Mohammad Farhad
 * Email        : mfarhad.dev@gmail.com
 * Created On   : 2025-06-03
 * Title        : Main Extension File
 * Description  : This is the main extension file.
 * Copyright (c) 2025 Mohammad Farhad.
 * =============<< ********* >>=============
 */

import * as vscode from 'vscode';
import generateMultilineHeader from './utils/generateMultilineHeader';

export function activate(context: vscode.ExtensionContext) {
  const insertHeader = vscode.commands.registerCommand('authorHeader.insertMultiline', () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      vscode.window.showErrorMessage('No active editor');
      return;
    }

    const langId = editor.document.languageId;
    const header = generateMultilineHeader(langId);

    editor.edit(editBuilder => {
      editBuilder.insert(new vscode.Position(0, 0), header);
    });
  });

  context.subscriptions.push(insertHeader);
}

export function deactivate() {}
