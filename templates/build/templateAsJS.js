var templateString = '' +
        '{{#mediaItems}}' +
            '<p>' +
                '<div>{{title}}</div>' +
                '<span>' +
                    '{{#seasonNumber}}{{#localizeText}}season{{/localizeText}} {{seasonNumber}}{{/seasonNumber}} : ' +
                    '{{#localizeText}}episode{{/localizeText}}</span>' +
            '</p>' +
        '{{/mediaItems}}';