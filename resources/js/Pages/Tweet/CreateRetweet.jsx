import AppLayout from "@/Layouts/AppLayout";
import { Transition } from "@headlessui/react";
import { usePage } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import TextArea from "@/Components/TextArea";
import InputError from "@/Components/InputError";
import { useForm } from "@inertiajs/react";


const CreateRetweet = () => {
    const tweet = usePage().props.tweet;

    const { data, setData, post, errors, processing, recentlySuccessful } =
        useForm(
            {
                parent_id: tweet.id,
                body: '',
            }
        );

    const submit = (e) => {
        e.preventDefault();
        console.log(data);

        post(route('retweet.store'), {
            onSuccess: () => {
                setData('body', '');
            },
            onFinish: () => setData('body', ''),
        });
    };


    return (
        <>
            <h1 className="">Retweeting: </h1>
            <p className="subtext">{tweet.body}</p>
            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <TextArea
                        id="body"
                        className=""
                        name="body"
                        onChange={(e) => setData('body', e.target.value)}
                        required
                        isFocused
                        autoComplete="body"
                        rows="5"
                        cols="60"
                    />

                    <input type="hidden" name="parent_id" id="parent_id" value={tweet.id} />

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

CreateRetweet.layout = page => <AppLayout user={page.props.auth.user} children={page} />;

export default CreateRetweet;