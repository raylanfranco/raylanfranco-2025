#!/bin/bash

COMPONENT_NAME=$1
COMPONENTS_DIR="./src/app/components"

echo "✅ Running create-component.sh..."
echo "📂 Creating component: $COMPONENT_NAME in $COMPONENTS_DIR"

if [ -z "$COMPONENT_NAME" ]; then
    echo "❌ Error: No component name provided!"
    exit 1
fi

mkdir -p "$COMPONENTS_DIR/$COMPONENT_NAME"
echo "📁 Created directory: $COMPONENTS_DIR/$COMPONENT_NAME"

touch "$COMPONENTS_DIR/$COMPONENT_NAME/$COMPONENT_NAME.tsx"
touch "$COMPONENTS_DIR/$COMPONENT_NAME/$COMPONENT_NAME.module.css"
echo "✅ Created $COMPONENT_NAME.tsx and $COMPONENT_NAME.module.css"

echo "🎉 Component '$COMPONENT_NAME' created successfully!"