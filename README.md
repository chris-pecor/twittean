

## Install

clone the repo locally

composer install

copy the .env file

./vendor/bin/sail up -d

./vendor/bin/sail artisan key:generate

./vendor/bin/sail artisan migrate

./vendor/bin/sail artisan db:seed

## Login

email: test@example.com
password: password