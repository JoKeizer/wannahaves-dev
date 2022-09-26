import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from '@storyblok/react';
import { loadGetInitialProps } from 'next/dist/shared/lib/utils';

export default function Home({ story }) {
  story = useStoryblokState(story);

  return (
      <StoryblokComponent blok={story.content} />
  );
}



export async function getStaticProps() {
  // the slug of the story
  let slug = 'home';

  let params = {
    version: 'draft', // or 'published'
    "resolve_relations": "featured-articles.articles",
    "resolve_relations": "ClientLogos.logos._uid"

  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, params);

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
      preview: params.preview || false

    },
  };
}
