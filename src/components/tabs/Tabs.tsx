import React, { useState, ReactNode } from 'react';
import ArticleCard from '../card/ArticleCard';

interface Tab {
  _id: string;
  categoryName: string;
}

interface Article {
  _id: string;
  views: number;
  title: string;
  description: string;
  category: { _id: string }; // Make sure category has _id property
}

interface TabsProps {
  tabs: Tab[];
  articles: Article[];
}

const Tabs: React.FC<TabsProps> = ({ tabs, articles }) => {
  // const catId = tabs.map((item) => console.log(item._item, 'this is item'));

  // console.log(catId, 'this is catId');
  const [activeTab, setActiveTab] = useState(tabs[0]._id);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };
  console.log(activeTab, 'htis', tabs[0]?._id, 'this is test');

  return (
    <div className="mx-auto">
      <div className="w-fit  mx-auto flex">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(tab._id)}
            className={`w-fit ${
              activeTab === tab._id
                ? 'border-b-2 border-yellow-500 text-yellow-500'
                : 'border-b-2'
            } py-2 px-4 focus:outline-none capitalize`}
          >
            {tab.categoryName}
          </button>
        ))}
      </div>
      <div className="mt-10 ">
        {tabs.map((tab) => (
          <div
            key={tab._id}
            className={`${activeTab === tab._id ? 'block' : 'hidden'} p-4`}
          >
            <div className="grid grid-cols-1 my-10 md:grid-cols-2 lg:grid-cols-2 gap-10 lg:gap-[2rem] p-5 lg:px-[9rem]">
              {articles
                ?.filter((article) => article.category?._id === tab._id)
                ?.map((article, index) => (
                  <ArticleCard key={index} article={article} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
