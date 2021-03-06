"use strict";

module.exports = function(ecs, game) {
	game.entities.registerSearch("constrainPositionSearch", ["position", "size", "constrainPosition"]);
	ecs.addEach(function constrainTocontrainPosition(entity, elapsed) { // eslint-disable-line no-unused-vars
		var position = game.entities.get(entity, "position");
		var size = game.entities.get(entity, "size");

		var constrainPosition = game.entities.get(entity, "constrainPosition");
		var other = constrainPosition.id;
		var otherPosition = game.entities.get(other, "position");
		var otherSize = game.entities.get(other, "size");

		if (position.x < otherPosition.x) {
			position.x = otherPosition.x;
		}
		if (position.x + size.width > otherPosition.x + otherSize.width) {
			position.x = otherPosition.x + otherSize.width - size.width;
		}
		if (position.y < otherPosition.y) {
			position.y = otherPosition.y;
		}
		if (position.y + size.height > otherPosition.y + otherSize.height) {
			position.y = otherPosition.y + otherSize.height - size.height;
		}
	}, "constrainPositionSearch");
};
