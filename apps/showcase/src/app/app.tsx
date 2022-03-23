import React, { Suspense } from 'react';
import { Box, Button, Typography } from '@mui/material';

// lazy load components
const LazyMenuExample = React.lazy(() => import('./menu-example/menu-example'));
const LazyMenuExampleExtractMenu1 = React.lazy(
  () => import('./menu-example-extract-menu1/menu-example')
);
const LazyMenuExampleExtractMenu2 = React.lazy(
  () => import('./menu-example-extract-menu2/menu-example')
);
const LazyMenuExampleExtractMenu3 = React.lazy(
  () => import('./menu-example-extract-menu3/menu-example')
);
const LazyMenuExampleExactMenu4 = React.lazy(
  () => import('./menu-example-extract-menu4/menu-example')
);

// map of components and titles
const examples = {
  menu_example: {
    component: LazyMenuExample,
    title: 'Default Example',
  },
  menu_example_1: {
    component: LazyMenuExampleExtractMenu1,
    title: 'Basic Extracted Menu',
  },
  menu_example_2: {
    component: LazyMenuExampleExtractMenu2,
    title: 'Using Slots',
  },
  menu_example_3: {
    component: LazyMenuExampleExtractMenu3,
    title: 'Extracted State',
  },
  menu_example_4: {
    component: LazyMenuExampleExactMenu4,
    title: 'Render Props',
  },
} as const;
type Examples = keyof typeof examples;

export function App() {
  const [selectedExample, setSelectedExample] =
    React.useState<Examples>('menu_example');
  const Example = examples[selectedExample].component;
  const title = examples[selectedExample].title;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Typography variant="h5" component={'h1'}>
        MUI React Menu Examples
      </Typography>
      <Box
        sx={{
          display: 'flex',
          gap: 1,
        }}
      >
        {Object.keys(examples).map((example: string) => {
          const exampleKey = example as Examples;

          return (
            <Button
              variant="outlined"
              key={example}
              onClick={() => {
                setSelectedExample(exampleKey);
              }}
            >
              {examples[exampleKey].title.toString()}
            </Button>
          );
        })}
      </Box>
      <title>{title}</title>
      <Suspense fallback="reticulating splines">{<Example />}</Suspense>
    </Box>
  );
}

export default App;
