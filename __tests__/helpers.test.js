test('format_date() returns expected date string', ()=>{
    const date = new Date('2020-03-20 16:12:03');

    expect(format_date(date).toBe('03/20/2020'))
});