export function getAll(req, res) {
    res.send('getAll recipes');
}

export function get(req, res) {
    res.send('get recipe: '+req.params.id);
}