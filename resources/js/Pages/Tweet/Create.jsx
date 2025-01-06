import AppLayout from "@/Layouts/AppLayout";
import { Transition } from "@headlessui/react";
import { usePage } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import { useForm } from "@inertiajs/react";
import TextArea from "@/Components/TextArea";


const Create = () => {

    const { data, setData, post, errors, processing, recentlySuccessful } =
        useForm(
            {
                body: '',
            }
        );

    const submit = (e) => {
        e.preventDefault();

        post(route('tweet.store'), {
            onSuccess: () => {
                setData('body', '');
            },
            onFinish: () => setData('body', ''),
        });
    };

    return (
        <>
            <h1 className="">Create Tweet</h1>
            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>

                    <TextArea
                        id="body"
                        name="body"
                        onChange={(e) => setData('body', e.target.value)}
                        required
                        isFocused
                        autoComplete="body"
                        rows="5"
                        cols="60"
                    />

                    <InputError className="mt-2" message={errors.body} />
                </div>
                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Tweet</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">
                            Posted.
                        </p>
                    </Transition>
                </div>
            </form>
        </>
    );
};

Create.layout = page => <AppLayout user={page.props.auth.user} children={page} />;

export default Create;