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


def get_python_code(path):
    assert '.py' in path
    return get_file_text(path)


def get_md_code(path):
    assert '.md' in path
    return get_file_text(path)


def save_html(path, html):
    with open(path, 'w', encoding='utf-8') as of:
        of.write(html)


data_path = '/Users/jiang/Documents/Github/easy_leetcode/easyleetcode'
code_dir = os.path.join(data_path, 'leetcodes')
md_dir = os.path.join(data_path, 'leetcodes_md')
temp_html = get_index_temp_html('temp_code.html')

replace_code_str = '#CODE'
replace_md_str = '#MARKDOWN'


def run(code_dir=code_dir, md_dir=md_dir):
    fname_list = []
    for fname in os.listdir(code_dir):
        if '.py' not in fname:
            continue
        fname_list.append(fname)
    s_fname_list = sorted(fname_list)
    for fname in s_fname_list:
        name = fname[:-3]
        py_path = os.path.join(code_dir, fname)
        md_path = os.path.join(md_dir, name + '.md')
        insert_code = get_python_code(py_path)
        insert_md = get_md_code(md_path)

        out_path = 'codes_html/' + name + '.html'
        code_html = temp_html.replace(replace_code_str, insert_code).replace('#TITLE', name)
        code_md_html = code_html.replace(replace_md_str, insert_md)

        save_html(out_path, code_md_html)


run()
