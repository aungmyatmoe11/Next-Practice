Page Layout

1. Layout
2. Tempalte
3. Error
4. Loading
5. NotFound
6. Page

```
<Layout>
    <Template>
        <ErrorBoundary fallback={<Error/>}>
            <Suspense fallback={<Loading/>}>
                <ErrorBoundary fallback={<NotFound/>}>
                    <Page/>
                </ErrorBoundary>
            </Suspense>
        </ErrorBoundary>
    </Template>
</Layout>
```