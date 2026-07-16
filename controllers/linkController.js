let links = [
    { id: 1, title:'Super article sur Node.js', url: 'https://exemple.com/node', description: "Un bon tuto."},
    { id: 2, title:'React Hooks', url: 'https://exemple.com/react', description: "Tout sur les Hooks."}
];
let nextId = 3;
// GET
exports.getAllLinks = (req, res) => {
    res.status(200).json(links);
};

// GET /:id je veux le link avec l'id 1
exports.getLinkById = (req, res) => {
    const link = links.find(l => l.id === parseInt(req.params.id));
    if (!link) {
        return res.status(404).json({message: 'Link not found'});
    }
    res.status(200).json(link);
};
// POST = Création d'un link
exports.createLink = (req, res) => {
    const { title, url, description } = req.body;
    if(!title || !url) {
        return res.status(400).json({message: "Title and url are required"});
    }
    const newLink = {
        // " nextId ++ => Utilise d'abord la valeur actuelle, puis augmente après."
        id: nextId++,
        title: title,
        url: url,
        description: description,
    }
    links.push(newLink);
    // code http 201 = Creation: Requête traitée avec succès et création d’une ressource.
    res.status(201).json(newLinks);
}

// PUT = Modification d'un link /:id
exports.updateLinkById = (req, res) => {
    const link = links.find(l => l.id === parseInt(req.params.id));
    if(!link) {
        return res.status(404).json({message: "Link not found"});
    }
    link.title = req.body.title || link.title;
    link.description = req.body.description || link.description;
    link.url = req.body.url || link.url;

    res.status(200).json(link);
}

// DELETE /:id
exports.deleteLink = (req, res) => {
    const linkIndex = links.findIndex(l => l.id === parseInt(req.params.id));
    if(linkIndex === -1) {
        return res.status(404).json({message: "Link not found"});
    }
    links.splice(linkIndex, 1);
    res.status(204).send();
}