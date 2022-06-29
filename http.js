// How does the Internet work?

/* 
    Browser - has a built in set of rules on how to render a file.

    The rules are governed by the W3C organization.

    HTTP - protocol that governs transmission of date across the web
        Hypertext Transfer Protocol METHODS:

        * GET - retrieves data (no body)
        * POST - adds data (has body)
        * PUT - replaces data (has body)
        * DELETE - deletes data (no body)
        * 
    HTTP Request and Response lifecycle:
        * Endpoint( URI/L) - uniform resource identifies/locator
        * Headers - metadate of info about the request
        * Methods (GET, POST, PUT, DELETE)  - stipulates the rules for the request
        * Body (sometimes) - holds our information in a JSON format.
        * Status Code - handles health of the response

    Before HTTP request reaches a server, it goes thru the Domain Name Server (DNS) to resolve the URL into an IP address.

    IP address is onlylike address of house, doesn't tell you what DOOR or SOCKET you want to use.

    HTTP requests require TCP connection, meaning there's a handshake for information.

    */