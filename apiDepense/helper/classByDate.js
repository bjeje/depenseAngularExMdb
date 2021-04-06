const today = new Date(),
    oneDay = ( 1000 * 60 * 60 * 24 ),
    thirtyDays = new Date( today.valueOf() - ( 30 * oneDay ) ),
    fifteenDays = new Date( today.valueOf() - ( 15 * oneDay ) ),
    sevenDays = new Date( today.valueOf() - ( 7 * oneDay ) );

function classByDate(db) {

    db.collection.aggregate([
        { "$match": {
                "date": { "$gte": thirtyDays }
            }},
        { "$group": {
                "_id": {
                    "$cond": [
                        { "$lt": [ "$date", fifteenDays ] },
                        "16-30",
                        { "$cond": [
                                { "$lt": [ "$date", sevenDays ] },
                                "08-15",
                                "01-07"
                            ]}
                    ]
                },
                "count": { "$sum": 1 },
                "totalValue": { "$sum": "$value" }
            }}
    ])
}
