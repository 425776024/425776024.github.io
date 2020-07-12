#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author  : xinfa.jiang
# @File    : Generate_codes_html.py

import os


def get_file_text(path):
    try:
        with open(path, encoding='utf-8') as f:
            return f.read()
    except:
        return ''


def get_index_temp_html(path):
    assert '.html' in path
    return get_file_text(path)


def save_html(path, html):
    with open(path, 'w', encoding='utf-8') as of:
        of.write(html)


html_dir = 'codes_html'

data_path = '/Users/jiang/Documents/Github/easy_leetcode/easyleetcode'
code_dir = os.path.join(data_path, 'leetcodes')
md_dir = os.path.join(data_path, 'leetcodes_md')


def run(html_dir=html_dir):
    name_list = []
    tp_li = '''
    <ul align="left">
        <button><a href="/codes_html/#FILENAME.html" target="_blank">#NAME</a></button>
        <button style="float:right"><a href="https://github.com/425776024/easy_leetcode/blob/master/easyleetcode/leetcodes/#FILENAME.py" target="_blank">Edit Github Code</a></button>
        <button style="float:right"><a href="https://github.com/425776024/easy_leetcode/blob/master/easyleetcode/leetcodes_md/#FILENAME.md" target="_blank">Edit Github Markdown</a></button>
        <pre>#SUMMARY</pre>
    </ul>
    '''
    fname_list = []
    for fname in os.listdir(html_dir):
        if '.html' not in fname:
            continue
        fname_list.append(fname)
    s_fname_list = sorted(fname_list)

    for fname in s_fname_list:
        if '.html' not in fname:
            continue
        FILENAME = fname.replace('.html', '')
        NAME = FILENAME.replace('_', ' ')

        md_name = fname.replace('.html', '.md')
        md_file = os.path.join(md_dir, md_name)

        md_summary = get_file_text(md_file)
        if len(md_summary) > 300 and '```' in md_summary:
            md_summary = md_summary.split('```')[1]
        if 'class Solution' in md_summary:
            md_summary = NAME

        md_summary = md_summary.replace('#', '').replace('_', ' ').replace("```", '').replace('---', '')
        li_str = tp_li.replace('#FILENAME', FILENAME).replace('#NAME', NAME).replace('#SUMMARY', md_summary)
        name_list.append(li_str)
    ALLCODELIS = ''.join(name_list)
    index_html = get_index_temp_html('temp_all_list.html')
    insert_code = ALLCODELIS

    code_html = index_html.replace('#ALLCODELIS', insert_code)

    save_html('all_list.html', code_html)


run()
