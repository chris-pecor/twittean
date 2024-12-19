import AppLayout from "@/Layouts/AppLayout";
import { Transition } from "@headlessui/react";
import { usePage } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import { useForm } from "@inertiajs/react";


const Create = () => {

    const user = usePage().props.auth.user;

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
        <form onSubmit={submit} className="mt-6 space-y-6">
            <div>
                

                <TextInput
                    id="body"
                    className="mt-1 block w-full"
                    
                    onChange={(e) => setData('body', e.target.value)}
                    required
                    isFocused
                    autoComplete="body"
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
    );
};

Create.layout = page => <AppLayout user={page.props.auth.user} children={page} />;

export default Create;