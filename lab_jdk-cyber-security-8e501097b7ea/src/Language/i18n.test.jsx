import i18n from './i18n';

test('i18n resources are correctly configured', () => {
    const expectedResources = {
        en: {
            translation: {
                greeting: 'title',
            },
        },
        fr: {
            translation: {
                greeting: 'title',
            },
        },
    };

    expect(i18n.options.resources).toEqual(expectedResources);
});
