import {MailIcon} from '@heroicons/react/outline';
import AppLayout from 'components/AppLayout';
import FlatButton from 'components/FlatButton';
import GradientButton from 'components/GradientButton';
import TextInputField from 'components/TextInputField';
import Head from 'next/head'

export default function HomePage() {
    return (
        <AppLayout>
            <Head>
                <title>atcampus components</title>
            </Head>
            <main className="m-4">
                <h1 className="text-xl lg:text-2xl">atcampus components</h1>

                <div className="mt-8">
                    <h2 className="text-lg lg:text-xl">Gradient Button</h2>

                    <GradientButton as={'button'}>
                        Text goes here
                    </GradientButton>
                </div>
                <div className="mt-8">
                    <h2 className="text-lg lg:text-xl">Flat Button</h2>

                    <FlatButton as={'button'}>Text goes here</FlatButton>
                </div>

                <div className="mt-8">
                    <h2 className="text-lg lg:text-xl">Text Input Field</h2>

                    <TextInputField
                        placeholder={'name@email.com'}
                        name="email"
                        type="email"
                    />
                </div>

                <div className="mt-8">
                    <h2 className="text-lg lg:text-xl">
                        Text Input Field with label
                    </h2>

                    <TextInputField
                        label={'Skriv inn e-post'}
                        placeholder={'name@email.com'}
                        name="email"
                        type="email"
                    />
                </div>

                <div className="mt-8">
                    <h2 className="text-lg lg:text-xl">
                        Text Input Field with icon
                    </h2>

                    <TextInputField
                        label={'Skriv inn e-post'}
                        placeholder={'name@email.com'}
                        name="email"
                        type="email"
                        icon={<MailIcon className="w-6 h-6 text-dark-2/70"/>}
                    />
                </div>

                <div className="mt-8">
                    <h2 className="text-lg lg:text-xl">
                        Text Input Field with icon and button
                    </h2>

                    <TextInputField
                        label={'Skriv inn e-post'}
                        placeholder={'name@email.com'}
                        name="email"
                        type="email"
                        icon={<MailIcon className="w-7 h-7 text-dark-2/70"/>}
                        button={
                            <GradientButton as={'button'}>
                                Text goes here
                            </GradientButton>
                        }
                    />
                </div>

                <div className="mt-4">
                    <p className="py-4 text-sm text-dark-1">
                        ❤️
                    </p>
                </div>
            </main>
        </AppLayout>
    );
}
