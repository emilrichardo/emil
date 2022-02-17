import React from 'react';
import Button from '../components/Button';
import Layout from '../components/layouts/Layout';
export default function notFound() {
    return(
        <Layout>
            <div class="w-9/12 m-auto my-10 py-16  flex items-center justify-center">
            <div class=" overflow-hidden sm:rounded-lg pb-8">
            <div class=" text-center pt-8">
            <h1 class="text-6xl md:text-9xl">404</h1>
            <h1 class="text-4xl md:text-6xl font-medium py-8">oops! Page not found</h1>
            <p class="text-xl md:text-2xl pb-8 px-12 font-medium">Oops! The page you are looking for does not exist. It might have been moved or deleted.</p>
            <Button to="/" variant="default" size="lg">
                Back to Home
            </Button>

            </div>
            </div>
            </div>
        </Layout>
    )
};
