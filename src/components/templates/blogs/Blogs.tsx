import { Article1, Article2, Article3 } from '@/components/atom/assets'
import { ArticleBox, BigArticleBox, MainHeading } from '@/components/moluecles'
import React from 'react'

export default function Blogs() {
    return (
        <div className="articles container mx-auto my-10 px-7">
            <MainHeading heading="Articles" />
            <div className="big-box flex flex-wrap justify-between items-center gap-y-10 my-14">
                <ArticleBox date='12 Sep 2024' ArticleImage={Article1} ArticleTitle='Volksvagen Polo (2019)' ArticleContent='is simply dummy text of the printing and typesetting industry. Lorem Ipsum ..'/>
                <ArticleBox date='12 Sep 2024' ArticleImage={Article2} ArticleTitle='Volksvagen Polo (2019)' ArticleContent='is simply dummy text of the printing and typesetting industry. Lorem Ipsum ..'/>
                <ArticleBox date='12 Sep 2024' ArticleImage={Article3} ArticleTitle='Volksvagen Polo (2019)' ArticleContent='is simply dummy text of the printing and typesetting industry. Lorem Ipsum ..'/>
                <ArticleBox date='12 Sep 2024' ArticleImage={Article3} ArticleTitle='Volksvagen Polo (2019)' ArticleContent='is simply dummy text of the printing and typesetting industry. Lorem Ipsum ..'/>
                <ArticleBox date='12 Sep 2024' ArticleImage={Article1} ArticleTitle='Volksvagen Polo (2019)' ArticleContent='is simply dummy text of the printing and typesetting industry. Lorem Ipsum ..'/>
                <ArticleBox date='12 Sep 2024' ArticleImage={Article2} ArticleTitle='Volksvagen Polo (2019)' ArticleContent='is simply dummy text of the printing and typesetting industry. Lorem Ipsum ..'/>
                <ArticleBox date='12 Sep 2024' ArticleImage={Article3} ArticleTitle='Volksvagen Polo (2019)' ArticleContent='is simply dummy text of the printing and typesetting industry. Lorem Ipsum ..'/>
                <ArticleBox date='12 Sep 2024' ArticleImage={Article1} ArticleTitle='Volksvagen Polo (2019)' ArticleContent='is simply dummy text of the printing and typesetting industry. Lorem Ipsum ..'/>
                <ArticleBox date='12 Sep 2024' ArticleImage={Article2} ArticleTitle='Volksvagen Polo (2019)' ArticleContent='is simply dummy text of the printing and typesetting industry. Lorem Ipsum ..'/>
                <ArticleBox date='12 Sep 2024' ArticleImage={Article3} ArticleTitle='Volksvagen Polo (2019)' ArticleContent='is simply dummy text of the printing and typesetting industry. Lorem Ipsum ..'/>
                <ArticleBox date='12 Sep 2024' ArticleImage={Article1} ArticleTitle='Volksvagen Polo (2019)' ArticleContent='is simply dummy text of the printing and typesetting industry. Lorem Ipsum ..'/>
                <ArticleBox date='12 Sep 2024' ArticleImage={Article2} ArticleTitle='Volksvagen Polo (2019)' ArticleContent='is simply dummy text of the printing and typesetting industry. Lorem Ipsum ..'/>
            </div>
        </div>
    )
}
