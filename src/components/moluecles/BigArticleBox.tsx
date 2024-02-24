import React from 'react'
import { ArticleBox } from '.'
import { Article1, Article2, Article3 } from '../atom/assets'

export default function BigArticleBox() {
    return (
        <div>
            <div className="big-box flex flex-wrap justify-between items-center gap-y-10 my-14">
                <ArticleBox date='12 Sep 2024' ArticleImage={Article1} ArticleTitle='Volksvagen Polo (2019)' ArticleContent='is simply dummy text of the printing and typesetting industry. Lorem Ipsum ..'/>
                <ArticleBox date='12 Sep 2024' ArticleImage={Article2} ArticleTitle='Volksvagen Polo (2019)' ArticleContent='is simply dummy text of the printing and typesetting industry. Lorem Ipsum ..'/>
                <ArticleBox date='12 Sep 2024' ArticleImage={Article3} ArticleTitle='Volksvagen Polo (2019)' ArticleContent='is simply dummy text of the printing and typesetting industry. Lorem Ipsum ..'/>
            </div>
        </div>
    )
}
