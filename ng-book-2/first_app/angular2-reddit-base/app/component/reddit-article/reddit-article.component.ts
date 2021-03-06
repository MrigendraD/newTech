import { Component, Input } from '@angular/core';

import { Article } from './article';


@Component({
    selector: 'reddit-article',
    host: {
        class: 'row'
    },
    template: `
        <div class="four wide column center aligned votes">
            <div class="ui statistic">
                <div class="value">
                    {{ article.votes }}
                </div>
                <div class="label">
                    Points
                </div>
            </div>
        </div>
        <div class="twelve wide column">
            <a class="ui large header" href="{{ article.link }}">
                {{ article.title }}
            </a>
            <!-- right here -->
            <div class="meta">({{ article.domain() }})</div>
            <ul class="ui big horizontal list voters">
                <li class="item">
                    <a href (click)="voteUp()">
                    <i class="arrow up icon"></i>
                    upvote
                    </a>
                </li>
                <li class="item">
                    <a href (click)="voteDown()">
                    <i class="arrow down icon"></i>
                    downvote
                    </a>
                </li>
            </ul>
        </div>
    `
})

export class RedditArticleComponent {

    voteUp() {
        this.article.votes += 1;
        return false;
    }
    voteDown() {
        this.article.votes -= 1;
        return false;
    }

    @Input()
    article: Article;

}