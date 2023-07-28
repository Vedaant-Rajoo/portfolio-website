<script context="module">
    import { gql, GraphQLClient } from 'graphql-request'
	import { onMount } from 'svelte';
    // Inside loadPageData() function
export async function loadPageData() {
  try {
    const data = await load();
    console.log('Data fetched:', data);
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return { props: { projects: null } };
  }
}
  
    export async function load() {
      try {
        const hygraph = new GraphQLClient(
          import.meta.env.VITE_GRAPHQL_API,
          {
            headers: {},
          }
        )
  
        const query = gql`
          query getProjects {
            projects {
              desc
              head
            }
          }
        `
  
        const { projects } = await hygraph.request(query)
  
        return {
          props: {
            projects,
          },
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        return {
          props: {
            projects: null, // You can set a default value or handle the error case as needed
          },
        };
      }
    }
  </script>
  
  <script>
     
     /**
	   * @type {any}
	   */
      export let projects
     onMount(async () => {
    console.log('Page component mounted.');
    try {
      const data = await loadPageData();
      console.log('Data received in Page component:', data);
      projects = data.props.projects;
    } catch (error) {
      console.error('Error setting projects:', error);
    }
  });
  </script>
  
  <h1>Hygraph starter blog</h1>
    
    {#if projects}
      {#each projects as project}
        <h2>{project.head}</h2>
        <p>{project.desc}</p>
      {/each}
    {:else}
      <p>Loading...</p>
    {/if}
  