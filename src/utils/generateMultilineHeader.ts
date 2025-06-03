/**
 * =============<< ********* >>=============
 * Author       : Mohammad Farhad
 * Email        : mfarhad.dev@gmail.com
 * Created On   : 2025-06-03
 * Title        : Generate Multiline Header
 * Description  : This is the function which generate comments.
 * Copyright (c) 2025 Mohammad Farhad.
 * =============<< ********* >>=============
 */

import * as vscode from 'vscode';
import getSyntax from './getSyntax';

function generateMultilineHeader(langId: string): string {
  const config = vscode.workspace.getConfiguration('authorHeader');
  const name = config.get<string>('name');
  const email = config.get<string>('email');
  const org = config.get<string>('organization');
  const date = new Date().toISOString().split('T')[0];

  const { start, middle, end } = getSyntax(langId);

  const headerLines = [
    `${start}`,
    `${middle}=============<< ********* >>=============`,
    `${middle}Author       : ${name}`,
    `${middle}Email        : ${email}`,
    `${middle}Organization : ${org}`,
    `${middle}Created On   : ${date}`,
    `${middle}Title        :`,
    `${middle}Description  :`,
    `${middle}Copyright (c) 2025 ${org || name}.`,
    `${middle}=============<< ********* >>=============`,
    `${end}`,
    ``,
  ];

  return headerLines.join('\n');
}

export default generateMultilineHeader;