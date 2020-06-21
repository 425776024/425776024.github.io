#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author  : xinfa.jiang
# @File    : Generate_codes_html.py

import os


def get_file_text(path):
    with open(path, encoding='utf-8') as f:
        return f.read()


def get_index_temp_html(path):
    assert '.html' in path
    return get_file_text(path)




def save_html(path, html):
    with open(path, 'w', encoding='utf-8') as of:
        of.write(html)


html_dir = 'codes_html'

replace_str = '#ALLCODELIS'


def run(html_dir=html_dir):
    name_list = []
    tp_li = '<li><a href="/codes_html/#FILE" target="_blank">#NAME</a></li>\n'
    for fname in os.listdir(html_dir):
        if '.html' not in fname:
            continue
        name = fname.replace('.html', '')
        li_str = tp_li.replace('#FILE', fname).replace('#NAME', name)
        name_list.append(li_str)
    ALLCODELIS = ''.join(name_list)
    index_html = get_index_temp_html('temp_index.html')
    insert_code = ALLCODELIS

    out_path = 'index.html'
    code_html = index_html.replace(replace_str, insert_code)

    save_html(out_path, code_html)


run()
