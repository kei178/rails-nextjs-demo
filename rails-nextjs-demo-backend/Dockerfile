FROM ruby:2.6.4

RUN apt-get update
RUN apt-get install -y vim

# XXX docker-sync with specifying UID causes permission error
# ARG UID
# RUN adduser rails --uid $UID --disabled-password --gecos ""

ENV APP /usr/src/app
RUN mkdir $APP
WORKDIR $APP

COPY Gemfile* $APP/
RUN bundle install -j3 --path vendor/bundle 

COPY . $APP/

CMD ["./bin/server-dev"]